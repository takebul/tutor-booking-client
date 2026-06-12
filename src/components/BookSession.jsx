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

  const handleBooking = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const tutorData = Object.fromEntries(formData.entries());

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
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
    <div>
      <Modal>
        <Button color="primary" isDisabled={remainingSlots <= 0}>
          {remainingSlots <= 0 ? "Fully Booked" : "Book Now"}
        </Button>
        <Modal.Backdrop>
          <Modal.Container scroll="outside" placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading>Book Session</Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Make changes to your profile here. Click save when you are
                  done.
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <Form
                    onSubmit={handleBooking}
                    className="flex flex-col gap-4"
                  >
                    <TextField
                      className="w-full"
                      name="studentName"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Student Name</Label>
                      <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="phone"
                      type="tel"
                      variant="secondary"
                    >
                      <Label>Phone</Label>
                      <Input
                        maxLength={11}
                        minLength={3}
                        placeholder="Enter your phone number"
                      />
                    </TextField>

                    <TextField
                      className="w-full"
                      name="tutorId"
                      type="text"
                      variant="secondary"
                      defaultValue={id}
                    >
                      <Label>Tutor Id</Label>
                      <Input placeholder="Enter your tutor Id" />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="tutorName"
                      type="text"
                      variant="secondary"
                      defaultValue={tutorName}
                    >
                      <Label>Tutor Name</Label>
                      <Input placeholder="Enter your tutor name" />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="email"
                      type="email"
                      variant="secondary"
                      defaultValue={user?.email}
                    >
                      <Label>Email</Label>
                      <Input placeholder="Enter your email" />
                    </TextField>
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit" slot="close">
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
    </div>
  );
};

export default BookSessionPage;
