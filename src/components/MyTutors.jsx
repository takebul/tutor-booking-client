"use client";

import { AlertDialog, Button, Table } from "@heroui/react";
import { Icon } from "@iconify/react";
import { EditTutorsData } from "./Modal";
import toast from "react-hot-toast";
import { revalidatePage } from "@/lib/serverAction";

const MyTutors = ({ tutor }) => {
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:8541/myTutor/${tutor?._id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data) {
      toast.success("Tutor Delete Successful");
      await revalidatePage(`/myTutors`);
    } else {
      toast.error("Please try again later");
    }
    console.log({ tutor });
  };

  return (
    <div>
      <Table>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Tutor Name</Table.Column>
            <Table.Column>Subject</Table.Column>
            <Table.Column>Available</Table.Column>
            <Table.Column>Hourly Fee</Table.Column>
            <Table.Column>Total Slot</Table.Column>
            <Table.Column>Registration Date</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>{tutor?.name}</Table.Cell>
              <Table.Cell>{tutor?.subject}</Table.Cell>
              <Table.Cell>{tutor?.mode}</Table.Cell>
              <Table.Cell>{tutor?.hourlyFee}</Table.Cell>
              <Table.Cell>{tutor?.remainingSlots}</Table.Cell>
              <Table.Cell>{tutor?.sessionStartDate}</Table.Cell>
              <Table.Cell>
                <div className="flex items-center gap-1">
                  <EditTutorsData tutor={tutor}>
                    <Icon className="size-4" icon="gravity-ui:pencil" />
                  </EditTutorsData>
                  <AlertDialog>
                    <Button isIconOnly size="sm" variant="danger-soft">
                      {" "}
                      <Icon className="size-4" icon="gravity-ui:trash-bin" />
                    </Button>
                    <AlertDialog.Backdrop>
                      <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                          <AlertDialog.CloseTrigger />
                          <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                              Delete tutor permanently?
                            </AlertDialog.Heading>
                          </AlertDialog.Header>
                          <AlertDialog.Body>
                            <p>
                              This will permanently delete{" "}
                              <strong>{tutor?.name}</strong> and all of its
                              data. This action cannot be undone.
                            </p>
                          </AlertDialog.Body>
                          <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                              Cancel
                            </Button>
                            <Button onClick={handleDelete} variant="danger">
                              Delete Project
                            </Button>
                          </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                      </AlertDialog.Container>
                    </AlertDialog.Backdrop>
                  </AlertDialog>
                </div>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Content>
      </Table>
    </div>
  );
};

export default MyTutors;
