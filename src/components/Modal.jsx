"use client";

import {
  Button,
  Select,
  Form,
  Input,
  Label,
  ListBox,
  Modal,
  NumberField,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import DateFieldComponent from "./DateField";
import toast from "react-hot-toast";
import { revalidatePage } from "@/lib/serverAction";

export function EditTutorsData({ children, tutor }) {
  const {
    _id,
    subject,
    sessionStartDate,
    remainingSlots,
    name,
    mode,
    location,
    institution,
    image,
    hourlyFee,
    experience,
    availableTimeSlot,
  } = tutor;

  const handleUpdateTutorData = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const tutorData = Object.fromEntries(formData.entries());

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/myTutor/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(tutorData),
      },
    );
    const data = await res.json();
    if (data) {
      toast.success("Tutor Data Update Successful");
      await revalidatePage("/myTutors");
    }
  };
  return (
    <Modal>
      <Button variant="secondary">{children}</Button>
      <Modal.Backdrop>
        <Modal.Container scroll="outside" placement="auto">
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />
            <Modal.Header className="text-center">
              <Modal.Heading>Book Session</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Make changes to your profile here. Click save when you are done.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <Form
                  onSubmit={handleUpdateTutorData}
                  className="flex flex-col  border-2 rounded-md shadow p-6 mx-auto gap-4"
                >
                  <TextField
                    className="w-full"
                    defaultValue={name}
                    name="name"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Tutor Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField
                    className="w-full"
                    defaultValue={image}
                    name="image"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Photo URL</Label>
                    <Input placeholder="imgbb / postimage link" />
                  </TextField>
                  <Select
                    defaultValue={subject}
                    name="subject"
                    className="w-full"
                    placeholder="Select one"
                  >
                    <Label>Subject / Category</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="English" textValue="English">
                          English
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item
                          id="History and Universality of Bangladesh"
                          textValue="History and Universality of Bangladesh"
                        >
                          History and Universality of Bangladesh
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Arts" textValue="Arts and Craft">
                          Arts and Craft
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Economics" textValue="Economics">
                          Economics
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="ICT" textValue="ICT">
                          ICT <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item
                          id="Higher Mathematics"
                          textValue="Higher Mathematics"
                        >
                          Higher Mathematics
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                  <TextField
                    defaultValue={availableTimeSlot}
                    className="w-full"
                    name="availableTimeSlot"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Available Days and Time</Label>
                    <Input placeholder="Tue - Sun 8:00 PM - 11:00 PM" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="hourlyFee"
                    type="text"
                    variant="secondary"
                    defaultValue={hourlyFee}
                  >
                    <Label>Hourly Fee</Label>
                    <Input placeholder="500" />
                  </TextField>
                  <NumberField
                    className="w-full"
                    defaultValue={remainingSlots}
                    minValue={0}
                    maxValue={100}
                    name="remainingSlots"
                  >
                    <Label>Total Slot</Label>
                    <NumberField.Group>
                      <NumberField.DecrementButton />
                      <NumberField.Input className="w-full" />
                      <NumberField.IncrementButton />
                    </NumberField.Group>
                  </NumberField>

                  <DateFieldComponent />

                  <TextField
                    defaultValue={institution}
                    className="w-full"
                    name="institution"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Institution</Label>
                    <Input placeholder="Example Universality" />
                  </TextField>
                  <TextField defaultValue={experience} name="experience">
                    <Label>Experience</Label>
                    <TextArea placeholder="5 Years Teaching Experience.." />
                  </TextField>
                  <TextField
                    defaultValue={location}
                    className="w-full"
                    name="location"
                    variant="secondary"
                  >
                    <Label>Location (Area/City)</Label>
                    <Input placeholder="Barishal" />
                  </TextField>
                  <Select
                    defaultValue={mode}
                    name="mode"
                    className="w-full"
                    placeholder="Select one"
                  >
                    <Label>Teaching Mode</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="Online" textValue="Online">
                          Online
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Offline" textValue="Offline">
                          Offline <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Both" textValue="Both">
                          Both
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">
                      Update
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
}
