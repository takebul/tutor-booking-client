"use client";
import { Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const BookedSessions = ({ myBookedSessions }) => {
  const router = useRouter();

  const handleCancel = async (id) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/tutorBookedData/${id}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
      },
    );
    const data = await res.json();
    if (data) {
      toast.success("Session cancelled successfully");
      router.refresh();
    } else {
      toast.error("Please try again later");
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            {[
              "Student Name",
              "Phone",
              "Tutor Name",
              "Email",
              "Enrolled At",
              "Status",
              "Action",
            ].map((col) => (
              <th
                key={col}
                className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {myBookedSessions.map((session) => {
            const {
              _id,
              studentName,
              phone,
              tutorName,
              email,
              enrolledAt,
              status,
            } = session;

            const isCancelled = status === "Cancelled";

            return (
              <tr key={_id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-800 whitespace-nowrap">
                  {studentName}
                </td>
                <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                  {phone}
                </td>
                <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                  {tutorName}
                </td>
                <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                  {email}
                </td>
                <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                  {enrolledAt
                    ? new Date(enrolledAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    : "—"}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      isCancelled
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {isCancelled ? "Cancelled" : "Confirmed"}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <Button
                    variant="danger-soft"
                    onClick={() => handleCancel(_id)}
                    disabled={isCancelled}
                    title="Cancel session"
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-md border transition-colors ${
                      isCancelled
                        ? "opacity-40 cursor-not-allowed border-gray-200 text-gray-400"
                        : "border-red-200 text-red-500 hover:bg-red-50 cursor-pointer"
                    }`}
                  >
                    <Icon icon="gravity-ui:xmark" className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BookedSessions;
