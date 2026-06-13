"use client";
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { error } from "better-auth/api";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const callbackURL = searchParams.get("callbackUrl") || "/tutors";

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const { password, email } = user;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: true,
      callbackURL: callbackURL,
    });
    if (data) {
      toast.success("Login successful");
    }

    if (error) {
      toast.error(error.message);
    }
    if (data) {
      router.push(callbackURL);
    }
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    if (data) {
      setTimeout(() => {
        toast.success("Login successful");
      }, 1000);
    }
    if (data) {
      router.push(callbackURL);
    }
  };
  return (
    <div className="my-10">
      <Form
        className="flex w-lg mx-auto flex-col gap-4 border-2 border-gray-300 rounded-sm p-4 shadow"
        onSubmit={handleLogin}
      >
        <div className="text-center my-4 space-y-4">
          <h1 className="font-bold text-4xl">Login</h1>
          <p className="text-muted">Welcome back! Please login to continue</p>
        </div>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={6}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 6) {
              return "Password must be at least 6 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <InputGroup>
            <InputGroup.Input
              className="w-full"
              type={isVisible ? "text" : "password"}
              placeholder="Enter your password"
            />
            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
          <Description>
            Must be at least 6 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
          <div className="mb-1 text-right text-blue-700 font-medium">
            <Link href={`forgot-password`}>Forgot Password?</Link>
          </div>
        </TextField>
        <div className="flex gap-2">
          <Button className={"w-full rounded-sm"} type="submit">
            Login
          </Button>
        </div>
        <div>
          <Button
            onClick={handleGoogleSignIn}
            className="w-full rounded-xs"
            variant="outline"
          >
            <Icon icon="devicon:google" />
            Sign in with Google
          </Button>
        </div>
        <div className="text-center">
          <span className="text-slate-500">Already have an account? </span>
          <Link href={"/signup"}>
            <span className="text-cyan-500 font-bold">Sign Up</span>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
