"use client";

import { authClient } from "@/lib/auth-client";
import LogoutBtn from "@/ui/LogoutBtn";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  return (
    <div>
      <div
        onClick={async () =>
          await authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                router.push("/login");
              },
            },
          })
        }
      >
        <LogoutBtn>Logout</LogoutBtn>
      </div>
    </div>
  );
};

export default Logout;
