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
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";

const EditProfile = () => {
  const session = useSession();
  const user = session?.data?.user;

  const handleEdit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const data = await authClient.updateUser({ name, image });
    if (data) {
      toast.success("Profile updated successfully");
      await revalidatePage("/profile");
    }
  };

  return (
    <Modal>
      <Button
        size="lg"
        variant="outline"
        className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-indigo-500 text-white font-semibold border-0 hover:opacity-90 transition-opacity py-3"
      >
        <Icon icon="gravity-ui:pencil" width={18} height={18} />
        Edit Profile
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto" scroll="outside">
          <Modal.Dialog className="sm:max-w-md rounded-2xl overflow-hidden">
            <Modal.CloseTrigger />

            {/* Modal header band */}
            <div className="h-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-indigo-500" />

            <Modal.Header className="px-6 pt-5 pb-0">
              <Modal.Icon className="bg-amber-100 text-amber-600">
                <Icon icon="gravity-ui:person" className="size-5" />
              </Modal.Icon>
              <Modal.Heading className="text-lg font-bold">
                Edit Profile
              </Modal.Heading>
              <p className="mt-1 text-sm text-muted">
                Update your name and profile picture below.
              </p>
            </Modal.Header>

            <Modal.Body className="px-6 pt-4 pb-2">
              <Surface variant="default">
                <Form onSubmit={handleEdit} className="flex flex-col gap-4">
                  <TextField
                    defaultValue={user?.name}
                    className="w-full"
                    name="name"
                    type="text"
                    isRequired
                  >
                    <Label className="text-sm font-medium">Name</Label>
                    <Input
                      placeholder="Your full name"
                      className="rounded-lg"
                    />
                  </TextField>

                  <TextField
                    defaultValue={user?.image}
                    className="w-full"
                    name="image"
                    type="url"
                  >
                    <Label className="text-sm font-medium">
                      Profile Image URL
                    </Label>
                    <Input
                      placeholder="https://example.com/photo.jpg"
                      className="rounded-lg"
                    />
                  </TextField>

                  <Modal.Footer className="px-0 pt-2">
                    <Button
                      slot="close"
                      variant="secondary"
                      className="rounded-lg"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      slot="close"
                      className="rounded-lg bg-gradient-to-r from-amber-400 to-indigo-500 text-white border-0"
                    >
                      <Icon icon="gravity-ui:pencil" width={16} height={16} />
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
};

export default EditProfile;
