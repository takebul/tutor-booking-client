"use client";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const fieldClass =
  "w-full px-4 py-2.5 text-sm rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition";
const labelClass =
  "block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-1.5";

const Signup = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { name, email, password, image } = Object.fromEntries(
      formData.entries(),
    );

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });
    if (data) {
      toast.success("Account created successfully!");
      router.push("/login");
    }
    if (error) toast.error(error.message);
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    if (data) {
      setTimeout(() => {
        toast.success("Google Signin Successful");
      }, 8000);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-5 h-5"
              >
                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
              </svg>
            </div>
            <span className="font-bold text-xl text-zinc-900 dark:text-white tracking-tight">
              Tutor
              <span className="text-blue-600 dark:text-blue-400">Book</span>
            </span>
          </Link>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
              Create an account
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              Join TutorBook and start learning today
            </p>
          </div>

          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="w-full flex items-center justify-center gap-3 py-2.5 px-4 border border-zinc-200 dark:border-zinc-700 rounded-xl text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors mb-6"
          >
            <Icon icon="devicon:google" className="w-4 h-4" />
            Continue with Google
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-700" />
            <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
              or sign up with email
            </span>
            <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-700" />
          </div>

          <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <TextField isRequired name="name" type="text">
              <Label className={labelClass}>Full Name</Label>
              <Input placeholder="Your full name" className={fieldClass} />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            <TextField isRequired name="image" type="url">
              <Label className={labelClass}>Profile Photo URL</Label>
              <Input
                placeholder="https://example.com/photo.jpg"
                className={fieldClass}
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            <TextField
              isRequired
              name="email"
              type="email"
              validate={(v) =>
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v)
                  ? "Please enter a valid email address"
                  : null
              }
            >
              <Label className={labelClass}>Email Address</Label>
              <Input placeholder="you@example.com" className={fieldClass} />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            <TextField
              isRequired
              minLength={6}
              name="password"
              type="password"
              validate={(v) => {
                if (v.length < 6) return "Minimum 6 characters";
                if (!/[A-Z]/.test(v))
                  return "Must contain one uppercase letter";
                if (!/[0-9]/.test(v)) return "Must contain one number";
                return null;
              }}
            >
              <Label className={labelClass}>Password</Label>
              <InputGroup className="flex items-center border border-zinc-200 dark:border-zinc-700 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-800 focus-within:ring-2 focus-within:ring-blue-500 transition">
                <InputGroup.Input
                  className="flex-1 px-4 py-2.5 text-sm bg-transparent text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none"
                  type={isVisible ? "text" : "password"}
                  placeholder="Create a strong password"
                />
                <InputGroup.Suffix className="pr-2">
                  <Button
                    isIconOnly
                    size="sm"
                    variant="ghost"
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    onPress={() => setIsVisible(!isVisible)}
                    className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                  >
                    {isVisible ? (
                      <Eye className="size-4" />
                    ) : (
                      <EyeSlash className="size-4" />
                    )}
                  </Button>
                </InputGroup.Suffix>
              </InputGroup>
              <Description className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
                Min 6 chars · 1 uppercase · 1 number
              </Description>
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            <div className="flex gap-3">
              <Button
                type="submit"
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-colors shadow-sm"
              >
                Create Account
              </Button>
              <Button
                type="reset"
                variant="secondary"
                className="px-5 py-3 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 text-sm font-medium rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                Reset
              </Button>
            </div>
          </Form>

          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-bold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-zinc-400 dark:text-zinc-600 mt-4">
          By signing up, you agree to our{" "}
          <Link
            href="/"
            className="underline hover:text-zinc-600 dark:hover:text-zinc-400"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/"
            className="underline hover:text-zinc-600 dark:hover:text-zinc-400"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </main>
  );
};

export default Signup;
