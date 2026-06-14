import LoginPage from "@/components/Login";
import React, { Suspense } from "react";

const Login = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginPage />
    </Suspense>
  );
};

export default Login;
