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
import Image from "next/image";
import toast from "react-hot-toast";

const fieldClass =
  "w-full px-4 py-2.5 text-sm rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition";
const labelClass =
  "block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-1.5";

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
        className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl border-0 transition-colors shadow-sm"
      >
        <Icon icon="gravity-ui:pencil" width={16} height={16} />
        Edit Profile
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto" scroll="outside">
          <Modal.Dialog className="sm:max-w-md w-full bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden">
            <Modal.CloseTrigger className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" />

            <div className="h-1 bg-linear-to-r from-blue-600 via-violet-600 to-blue-500" />

            <Modal.Header className="px-6 pt-6 pb-4 border-b border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                  <Icon
                    icon="gravity-ui:person"
                    className="text-white"
                    width={18}
                    height={18}
                  />
                </div>
                <div>
                  <Modal.Heading className="text-lg font-bold text-zinc-900 dark:text-white">
                    Edit Profile
                  </Modal.Heading>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    Update your name and profile picture
                  </p>
                </div>
              </div>
            </Modal.Header>

            <div className="px-6 pt-5 flex items-center gap-4">
              <div className="shrink-0">
                {user?.image ? (
                  <Image
                    width={14}
                    height={14}
                    src={user.image}
                    alt={user.name}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-full object-cover border-2 border-zinc-200 dark:border-zinc-700"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold border-2 border-zinc-200 dark:border-zinc-700">
                    {user?.name?.[0]?.toUpperCase()}
                  </div>
                )}
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {user?.name}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {user?.email}
                </p>
              </div>
            </div>

            <Modal.Body className="px-6 py-5">
              <Surface variant="default">
                <Form onSubmit={handleEdit} className="flex flex-col gap-4">
                  <TextField
                    defaultValue={user?.name}
                    className="w-full"
                    name="name"
                    type="text"
                    isRequired
                  >
                    <Label className={labelClass}>Full Name</Label>
                    <Input
                      placeholder="Your full name"
                      className={fieldClass}
                    />
                  </TextField>

                  <TextField
                    defaultValue={user?.image}
                    className="w-full"
                    name="image"
                    type="url"
                  >
                    <Label className={labelClass}>Profile Image URL</Label>
                    <Input
                      placeholder="https://example.com/photo.jpg"
                      className={fieldClass}
                    />
                  </TextField>

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
                      className="flex-1 py-2.5 text-sm font-bold rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm inline-flex items-center justify-center gap-2"
                    >
                      <Icon icon="gravity-ui:pencil" width={14} height={14} />
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
