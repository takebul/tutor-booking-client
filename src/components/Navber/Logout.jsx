"use client";

import { authClient } from "@/lib/auth-client";
import LogoutBtn from "@/ui/LogoutBtn";
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
        <LogoutBtn>Logout</LogoutBtn>
      </div>
    </div>
  );
};

export default Logout;
