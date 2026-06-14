"use client";
import { AlertDialog, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { EditTutorsData } from "./Modal";
import toast from "react-hot-toast";
import { revalidatePage } from "@/lib/serverAction";
import { deleteTutorDataFetching } from "@/lib/data";

const MyTutors = ({ tutor }) => {
  const { _id } = tutor;
  const handleDelete = async () => {
    const data = await deleteTutorDataFetching(_id);
    if (data) {
      toast.success("Tutor deleted successfully");
      await revalidatePage("/myTutors");
    } else {
      toast.error("Please try again later");
    }
  };

  const isFull = tutor?.remainingSlots <= 0;

  return (
    <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
      <td className="px-5 py-4 whitespace-nowrap">
        <div>
          <span className="font-semibold text-zinc-900 dark:text-white text-sm">
            {tutor?.tutorName}
          </span>
        </div>
      </td>

      <td className="px-5 py-4 whitespace-nowrap">
        <span className="inline-block bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-100 dark:border-blue-900">
          {tutor?.subject}
        </span>
      </td>

      <td className="px-5 py-4 whitespace-nowrap">
        <span
          className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border ${
            tutor?.mode === "Online"
              ? "bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 border-teal-100 dark:border-teal-900"
              : tutor?.mode === "Offline"
                ? "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-900"
                : "bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 border-violet-100 dark:border-violet-900"
          }`}
        >
          {tutor?.mode}
        </span>
      </td>

      <td className="px-5 py-4 whitespace-nowrap">
        <span className="text-sm font-bold text-zinc-900 dark:text-white">
          ${tutor?.hourlyFee}
        </span>
      </td>

      <td className="px-5 py-4 whitespace-nowrap">
        <span
          className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${
            isFull
              ? "bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900"
              : "bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400 border border-green-100 dark:border-green-900"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${isFull ? "bg-red-500" : "bg-green-500"}`}
          />
          {isFull ? "Full" : `${tutor?.remainingSlots} left`}
        </span>
      </td>

      <td className="px-5 py-4 whitespace-nowrap text-sm text-zinc-500 dark:text-zinc-400">
        {tutor?.sessionStartDate}
      </td>

      <td className="px-5 py-4 whitespace-nowrap">
        <div className="flex items-center gap-2">
          <EditTutorsData tutor={tutor}>
            <Button
              variant="ghost"
              className="inline-flex items-center gap-1.5 px-3 text-xs font-semibold text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 transition-colors"
            >
              <Icon icon="gravity-ui:pencil" className="w-3.5 h-3.5" />
              Edit
            </Button>
          </EditTutorsData>

          <AlertDialog>
            <Button
              isIconOnly
              size="sm"
              variant="danger-soft"
              className="w-8 h-8 rounded-lg border border-red-100 dark:border-red-900 bg-red-50 dark:bg-red-950/40 text-red-500 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
            >
              <Icon icon="gravity-ui:trash-bin" className="w-3.5 h-3.5" />
            </Button>
            <AlertDialog.Backdrop>
              <AlertDialog.Container>
                <AlertDialog.Dialog className="sm:max-w-[400px] bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl">
                  <AlertDialog.CloseTrigger />
                  <AlertDialog.Header className="p-6 pb-4">
                    <AlertDialog.Icon status="danger" />
                    <AlertDialog.Heading className="text-lg font-bold text-zinc-900 dark:text-white mt-3">
                      Delete tutor permanently?
                    </AlertDialog.Heading>
                  </AlertDialog.Header>
                  <AlertDialog.Body className="px-6 pb-4">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      This will permanently delete{" "}
                      <strong className="text-zinc-900 dark:text-white">
                        {tutor?.name}
                      </strong>{" "}
                      and all of its data. This action cannot be undone.
                    </p>
                  </AlertDialog.Body>
                  <AlertDialog.Footer className="px-6 pb-6 flex gap-3">
                    <Button
                      slot="close"
                      variant="tertiary"
                      className="flex-1 py-2.5 text-sm font-medium border border-zinc-200 dark:border-zinc-700 rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleDelete}
                      variant="danger"
                      className="flex-1 py-2.5 text-sm font-bold rounded-xl bg-red-600 hover:bg-red-700 text-white transition-colors"
                    >
                      Delete Tutor
                    </Button>
                  </AlertDialog.Footer>
                </AlertDialog.Dialog>
              </AlertDialog.Container>
            </AlertDialog.Backdrop>
          </AlertDialog>
        </div>
      </td>
    </tr>
  );
};

export default MyTutors;
