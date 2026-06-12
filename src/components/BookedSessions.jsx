"use client";
import { Button, Chip, Table } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const BookedSessions = ({ myBookedSession }) => {
  const router = useRouter();
  const { phone, enrolledAt, email, tutorName, studentName, _id, status } =
    myBookedSession;

  const handleCancel = async () => {
    const res = await fetch(`http://localhost:8541/tutorBookedData/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data) {
      toast.success("Booked Session Cancel Successful");
      router.refresh();
    } else {
      toast.error("Please try again later");
    }
  };

  return (
    <div>
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-[600px]">
            <Table.Header>
              <Table.Column isRowHeader>Student Name</Table.Column>
              <Table.Column>Phone</Table.Column>
              <Table.Column>Tutor Name</Table.Column>
              <Table.Column>Email</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Cancel</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{studentName}</Table.Cell>
                <Table.Cell>{phone}</Table.Cell>
                <Table.Cell>{tutorName}</Table.Cell>
                <Table.Cell>{email}</Table.Cell>
                <Table.Cell>
                  {status === "pending" ? (
                    <Chip color="success" className="bg-green-200">
                      Confirmed
                    </Chip>
                  ) : (
                    <Chip color="danger" className="bg-red-200">
                      Canceled
                    </Chip>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <Button
                    onClick={handleCancel}
                    isIconOnly
                    size="sm"
                    variant="danger-soft"
                    isDisabled={status === "Cancelled"}
                  >
                    {" "}
                    <Icon className="size-4" icon="gravity-ui:xmark" />
                  </Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default BookedSessions;
