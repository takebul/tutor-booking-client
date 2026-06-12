"use client";
import { authClient, useSession } from "@/lib/auth-client";
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
import { FaEdit } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const EditProfile = () => {
  const session = useSession();
  const user = session?.data?.user;
  console.log(user);
  const handleEdit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    console.log({ name, image });

    const data = await authClient.updateUser({
      name,
      image,
    });
    if (data) {
      toast.success("Profile Update Successful");
      await revalidatePage("/profile");
    }
  };
  return (
    <div>
      <Modal>
        <Button
          size="lg"
          variant="outline"
          className={"rounded-sm w-full text-white bg-slate-700 p-2 text-lg"}
        >
          <FaEdit />
          Edit Profile
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto" scroll="outside">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <FaUser className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Edit Profile Form</Modal.Heading>
                <p className="mt-0.5 text-sm text-muted">
                  Fill out the form below and edit to your profile.
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <Form onSubmit={handleEdit} className="flex flex-col gap-4">
                    <TextField
                      defaultValue={user?.name}
                      className="w-full"
                      name="name"
                      type="text"
                    >
                      <Label>Name</Label>
                      <Input placeholder="Your Name" />
                    </TextField>
                    <TextField
                      defaultValue={user?.image}
                      className="w-full"
                      name="image"
                      type="text"
                    >
                      <Label>Image URL</Label>
                      <Input placeholder="Image URL" />
                    </TextField>
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit" slot={"close"}>
                        <FaEdit /> Edit
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

export default EditProfile;
