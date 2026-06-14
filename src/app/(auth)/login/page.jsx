import LoginPage from "@/components/Login";
import React, { Suspense } from "react";

export const metadata = {
  title: "Login",
};

const Login = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPage />
    </Suspense>
  );
};

export default Login;
