"use client";
import DateFieldComponent from "@/components/DateField";
import { useSession } from "@/lib/auth-client";
import { addTutorDataFetching } from "@/lib/data";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  NumberField,
  TextArea,
} from "@heroui/react";
import toast from "react-hot-toast";

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

const TutorAddPage = () => {
  const session = useSession();
  const user = session?.data?.user;
  const userId = user?.id;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = await addTutorDataFetching(formData, userId);

    console.log(data);

    if (data) toast.success("Tutor Added Successfully!");
  };

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
            Dashboard
          </span>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">
            Add a New Tutor
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Fill in the details below to list a new tutor on the platform.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Form onSubmit={onSubmit}>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-zinc-100 dark:border-zinc-800">
              <h2 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                Basic Information
              </h2>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <TextField
                className="w-full"
                name="tutorName"
                type="text"
                variant="secondary"
              >
                <Label className={labelClass}>Tutor Name</Label>
                <Input
                  placeholder="e.g. Ayesha Rahman"
                  className={fieldClass}
                />
              </TextField>
              <TextField
                className="w-full"
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
              <TextField
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
              <TextField className="w-full" name="location" variant="secondary">
                <Label className={labelClass}>Location (Area/City)</Label>
                <Input
                  placeholder="e.g. Dhaka, Mirpur"
                  className={fieldClass}
                />
              </TextField>
              <div className="sm:col-span-2">
                <TextField name="experience">
                  <Label className={labelClass}>Experience</Label>
                  <TextArea
                    placeholder="e.g. 5 years of teaching HSC students in Physics and Mathematics..."
                    className={`${fieldClass} resize-none`}
                    rows={3}
                  />
                </TextField>
              </div>
            </div>

            <div className="px-6 py-5 border-t border-b border-zinc-100 dark:border-zinc-800">
              <h2 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                Session Details
              </h2>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Select
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

              <Select name="mode" className="w-full" placeholder="Select mode">
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

              <TextField
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

              <TextField
                className="w-full"
                name="hourlyFee"
                type="text"
                variant="secondary"
              >
                <Label className={labelClass}>Hourly Fee ($)</Label>
                <Input placeholder="e.g. 500" className={fieldClass} />
              </TextField>

              <div>
                <label className={labelClass}>Total Slots</label>
                <NumberField
                  className="w-full"
                  defaultValue={10}
                  minValue={1}
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

              {/* Date field */}
              <div>
                <label className={labelClass}>Session Start Date</label>
                <DateFieldComponent />
              </div>
            </div>

            {/* Submit */}
            <div className="px-6 py-5 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 flex items-center justify-between gap-4">
              <p className="text-xs text-zinc-400 dark:text-zinc-500">
                All fields are required before submitting.
              </p>
              <Button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-colors shadow-sm"
              >
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Add Tutor
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </main>
  );
};

export default TutorAddPage;
