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
import { updateTutorDataFetching } from "@/lib/data";

const fieldClass =
  "w-full px-4 py-2.5 text-sm rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition";
const labelClass =
  "block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-1.5";

const subjects = [
  "English",
  "History and Universality of Bangladesh",
  "Arts and Craft",
  "Economics",
  "ICT",
  "Higher Mathematics",
];

export function EditTutorsData({ children, tutor }) {
  const {
    _id,
    subject,
    sessionStartDate,
    remainingSlots,
    tutorName,
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

    const data = await updateTutorDataFetching(formData, _id);
    if (data) {
      toast.success("Tutor updated successfully!");
      await revalidatePage("/myTutors");
    }
  };

  return (
    <Modal>
      <Button variant="secondary" asChild>
        <span>{children}</span>
      </Button>

      <Modal.Backdrop>
        <Modal.Container scroll="outside" placement="auto">
          <Modal.Dialog className="sm:max-w-lg w-full bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl">
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
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <div>
                  <Modal.Heading className="text-lg font-bold text-zinc-900 dark:text-white">
                    Edit Tutor
                  </Modal.Heading>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    Update details for{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {tutorName}
                    </span>
                  </p>
                </div>
              </div>
            </Modal.Header>

            <Modal.Body className="px-6 py-5 max-h-[70vh] overflow-y-auto">
              <Surface variant="default">
                <Form
                  onSubmit={handleUpdateTutorData}
                  className="flex flex-col gap-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <TextField
                      className="w-full"
                      defaultValue={tutorName}
                      name="name"
                      type="text"
                      variant="secondary"
                    >
                      <Label className={labelClass}>Tutor Name</Label>
                      <Input
                        placeholder="Enter tutor name"
                        className={fieldClass}
                      />
                    </TextField>
                    <TextField
                      className="w-full"
                      defaultValue={image}
                      name="image"
                      type="text"
                      variant="secondary"
                    >
                      <Label className={labelClass}>Photo URL</Label>
                      <Input
                        placeholder="imgbb / postimage link"
                        className={fieldClass}
                      />
                    </TextField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select
                      defaultValue={subject}
                      name="subject"
                      className="w-full"
                      placeholder="Select subject"
                    >
                      <Label className={labelClass}>Subject / Category</Label>
                      <Select.Trigger
                        className={`${fieldClass} flex items-center justify-between`}
                      >
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          {subjects.map((s) => (
                            <ListBox.Item key={s} id={s} textValue={s}>
                              {s}
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          ))}
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    <Select
                      defaultValue={mode}
                      name="mode"
                      className="w-full"
                      placeholder="Select mode"
                    >
                      <Label className={labelClass}>Teaching Mode</Label>
                      <Select.Trigger
                        className={`${fieldClass} flex items-center justify-between`}
                      >
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          {["Online", "Offline", "Both"].map((m) => (
                            <ListBox.Item key={m} id={m} textValue={m}>
                              {m}
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          ))}
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>

                  <TextField
                    defaultValue={availableTimeSlot}
                    className="w-full"
                    name="availableTimeSlot"
                    type="text"
                    variant="secondary"
                  >
                    <Label className={labelClass}>Available Days & Time</Label>
                    <Input
                      placeholder="e.g. Tue – Sun, 8:00 PM – 11:00 PM"
                      className={fieldClass}
                    />
                  </TextField>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <TextField
                      className="w-full"
                      name="hourlyFee"
                      type="text"
                      variant="secondary"
                      defaultValue={hourlyFee}
                    >
                      <Label className={labelClass}>Hourly Fee ($)</Label>
                      <Input placeholder="e.g. 500" className={fieldClass} />
                    </TextField>

                    <div>
                      <label className={labelClass}>Total Slots</label>
                      <NumberField
                        className="w-full"
                        defaultValue={remainingSlots}
                        minValue={0}
                        maxValue={100}
                        name="remainingSlots"
                      >
                        <NumberField.Group className="flex items-center border border-zinc-200 dark:border-zinc-700 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-800">
                          <NumberField.DecrementButton className="px-3 py-2.5 text-zinc-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors text-lg font-bold" />
                          <NumberField.Input className="flex-1 text-center text-sm bg-transparent text-zinc-900 dark:text-white focus:outline-none" />
                          <NumberField.IncrementButton className="px-3 py-2.5 text-zinc-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors text-lg font-bold" />
                        </NumberField.Group>
                      </NumberField>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <TextField
                      defaultValue={institution}
                      className="w-full"
                      name="institution"
                      type="text"
                      variant="secondary"
                    >
                      <Label className={labelClass}>Institution</Label>
                      <Input
                        placeholder="e.g. Dhaka University"
                        className={fieldClass}
                      />
                    </TextField>
                    <TextField
                      defaultValue={location}
                      className="w-full"
                      name="location"
                      variant="secondary"
                    >
                      <Label className={labelClass}>Location</Label>
                      <Input placeholder="e.g. Dhaka" className={fieldClass} />
                    </TextField>
                  </div>

                  <TextField defaultValue={experience} name="experience">
                    <Label className={labelClass}>Experience</Label>
                    <TextArea
                      placeholder="e.g. 5 years of teaching..."
                      className={`${fieldClass} resize-none`}
                      rows={2}
                    />
                  </TextField>

                  <div>
                    <label className={labelClass}>Session Start Date</label>
                    <DateFieldComponent />
                  </div>

                  <Modal.Footer className="flex gap-3 pt-2 border-t border-zinc-100 dark:border-zinc-800 mt-2">
                    <Button
                      slot="close"
                      variant="secondary"
                      className="flex-1 py-2.5 text-sm font-medium border border-zinc-200 dark:border-zinc-700 rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      slot="close"
                      className="flex-1 py-2.5 text-sm font-bold rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm"
                    >
                      Save Changes
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
