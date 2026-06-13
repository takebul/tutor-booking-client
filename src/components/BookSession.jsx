"use client";

import { useSession } from "@/lib/auth-client";
import { revalidatePage } from "@/lib/serverAction";
import {
  Button,
  Form,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import toast from "react-hot-toast";

const BookSessionPage = ({ tutor, id }) => {
  const { tutorName, remainingSlots } = tutor;
  const session = useSession();
  const user = session?.data?.user;
  const isFull = remainingSlots <= 0;

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const tutorData = Object.fromEntries(formData.entries());

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`,
        {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(tutorData),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
        return;
      }

      toast.success(data.message || "Tutor Booking Successful");
      await revalidatePage(`/tutors/${id}`);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <Modal>
      <Button
        color="primary"
        isDisabled={isFull}
        className={`
          inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold
          transition-all duration-200 shadow-sm
          ${
            isFull
              ? "bg-zinc-200 dark:bg-zinc-700 text-zinc-400 dark:text-zinc-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200 dark:shadow-none hover:shadow-md"
          }
        `}
      >
        {isFull ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
            Fully Booked
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Book Now
          </>
        )}
      </Button>

      <Modal.Backdrop>
        <Modal.Container scroll="outside" placement="auto">
          <Modal.Dialog className="sm:max-w-md w-full">
            <Modal.CloseTrigger className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" />

            <Modal.Header className="px-6 pt-6 pb-4 border-b border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <Modal.Heading className="text-lg font-bold text-zinc-900 dark:text-white">
                    Book a Session
                  </Modal.Heading>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    with{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {tutorName}
                    </span>
                  </p>
                </div>
              </div>
            </Modal.Header>

            <Modal.Body className="px-6 py-5">
              <Surface variant="default">
                <Form onSubmit={handleBooking} className="flex flex-col gap-4">
                  <TextField
                    className="w-full"
                    name="studentName"
                    type="text"
                    variant="secondary"
                    defaultValue={user?.name}
                  >
                    <Label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-1.5 block">
                      Student Name
                    </Label>
                    <Input
                      placeholder="Enter your full name"
                      className="w-full px-3 py-2.5 text-sm rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="phone"
                    type="tel"
                    variant="secondary"
                  >
                    <Label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-1.5 block">
                      Phone Number
                    </Label>
                    <Input
                      maxLength={11}
                      minLength={3}
                      placeholder="Enter your phone number"
                      className="w-full px-3 py-2.5 text-sm rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="email"
                    type="email"
                    variant="secondary"
                    defaultValue={user?.email}
                  >
                    <Label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-1.5 block">
                      Email
                    </Label>
                    <Input
                      placeholder="Enter your email"
                      className="w-full px-3 py-2.5 text-sm rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </TextField>

                  <input type="hidden" name="tutorId" value={id} />
                  <input type="hidden" name="tutorName" value={tutorName} />

                  <Modal.Footer className="flex gap-3 pt-2">
                    <Button
                      slot="close"
                      variant="secondary"
                      className="flex-1 py-2.5 text-sm font-medium rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      slot="close"
                      className="flex-1 py-2.5 text-sm font-bold rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm"
                    >
                      Confirm Booking
                    </Button>
                  </Modal.Footer>
                </Form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookSessionPage;
