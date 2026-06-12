"use client";
import DateFieldComponent from "@/components/DateField";
import { useSession } from "@/lib/auth-client";
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

const TutorAddPage = () => {
  const session = useSession();
  const user = session?.data?.user;

  const userId = user?.id;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const TutorData = Object.fromEntries(formData.entries());

    const res = await fetch(`http://localhost:8541/tutors`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...TutorData, tutorId: userId }),
    });
    const data = await res.json();

    if (data) {
      toast.success("Tutor Add Successful");
    }
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        className="flex flex-col w-3xl my-10 border-2 rounded-md shadow p-6 mx-auto gap-4"
      >
        <TextField
          className="w-full"
          name="tutorName"
          type="text"
          variant="secondary"
        >
          <Label>Tutor Name</Label>
          <Input placeholder="Enter your name" />
        </TextField>
        <TextField
          className="w-full"
          name="image"
          type="text"
          variant="secondary"
        >
          <Label>Photo URL</Label>
          <Input placeholder="imgbb / postimage link" />
        </TextField>
        <Select name="subject" className="w-full" placeholder="Select one">
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
        >
          <Label>Hourly Fee</Label>
          <Input placeholder="500" />
        </TextField>
        <NumberField
          className="w-full"
          defaultValue={10}
          minValue={1}
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
          className="w-full"
          name="institution"
          type="text"
          variant="secondary"
        >
          <Label>Institution</Label>
          <Input placeholder="Example Universality" />
        </TextField>
        <TextField name="experience">
          <Label>Experience</Label>
          <TextArea placeholder="5 Years Teaching Experience.." />
        </TextField>
        <TextField className="w-full" name="location" variant="secondary">
          <Label>Location (Area/City)</Label>
          <Input placeholder="Barishal" />
        </TextField>
        <Select name="mode" className="w-full" placeholder="Select one">
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

        <div>
          <Button type="submit" className={"w-full rounded-md"}>
            Submit Tutor
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default TutorAddPage;
