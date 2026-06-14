"use client";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const BookedSessions = ({ myBookedSession }) => {
  const router = useRouter();
  const { phone, enrolledAt, email, tutorName, studentName, _id, status } =
    myBookedSession;

  const isCancelled = status === "Cancelled";

  const handleCancel = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/tutorBookedData/${_id}`,
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

  // Format enrolledAt date nicely if available
  const formattedDate = enrolledAt
    ? new Date(enrolledAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "—";

  return (
    <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
      {/* Student */}
      <td className="px-5 py-4 whitespace-nowrap">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            {studentName?.charAt(0)?.toUpperCase() || "S"}
          </div>
          <span className="font-semibold text-zinc-900 dark:text-white text-sm">
            {studentName}
          </span>
        </div>
      </td>

      {/* Phone */}
      <td className="px-5 py-4 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-400">
        {phone}
      </td>

      {/* Tutor */}
      <td className="px-5 py-4 whitespace-nowrap">
        <span className="inline-block bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-violet-100 dark:border-violet-900">
          {tutorName}
        </span>
      </td>

      {/* Email */}
      <td className="px-5 py-4 whitespace-nowrap text-sm text-zinc-500 dark:text-zinc-400">
        {email}
      </td>

      {/* Enrolled date */}
      <td className="px-5 py-4 whitespace-nowrap text-sm text-zinc-500 dark:text-zinc-400">
        {formattedDate}
      </td>

      {/* Status */}
      <td className="px-5 py-4 whitespace-nowrap">
        {isCancelled ? (
          <span className="inline-flex items-center gap-1 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-red-100 dark:border-red-900">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            Cancelled
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-100 dark:border-green-900">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Confirmed
          </span>
        )}
      </td>

      {/* Cancel action */}
      <td className="px-5 py-4 whitespace-nowrap">
        {isCancelled ? (
          <span className="text-xs text-zinc-400 dark:text-zinc-600 italic">
            Cancelled
          </span>
        ) : (
          <button
            onClick={handleCancel}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
          >
            <Icon icon="gravity-ui:xmark" className="w-3.5 h-3.5" />
            Cancel
          </button>
        )}
      </td>
    </tr>
  );
};

export default BookedSessions;
