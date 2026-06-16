"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { redirect, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Logout = () => {
  const router = useRouter();
  const handleLogout = async () => {
    const data = await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.refresh();
          redirect("#");
        },
      },
    });
    if (data) {
      toast.success("Logout Successful");
    }
  };
  return (
    <div>
      <div onClick={handleLogout}>
        <Button variant="danger" className={"rounded-sm"}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Logout;
