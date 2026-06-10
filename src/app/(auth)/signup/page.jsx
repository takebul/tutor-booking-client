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
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const SignupPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { name, email, password, image } = user;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    console.log({ data });

    if (data) {
      alert("Signup successful");
    }
    if (error) {
      alert(error.message);
    }

    console.log({ error });
  };

  const handleGoogleSignIn = () => {};
  return (
    <div className="justify-items-center my-10">
      <Form
        className="flex flex-col w-2xl gap-4 border-2 border-gray-300 rounded-sm p-4 shadow bg-white"
        onSubmit={handleSubmit}
      >
        <div className="text-center my-4">
          <h1 className="font-bold text-4xl">Signup</h1>
          <p className="text-muted">Create your account to start learning</p>
        </div>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter Your Name" />
          <FieldError />
        </TextField>
        <TextField isRequired name="image" type="url">
          <Label>Image URL</Label>
          <Input placeholder="Enter Your Image URL" />
          <FieldError />
        </TextField>
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
          <Input placeholder="yourname@example.com" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
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
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Signup
          </Button>
          <Button type="reset" variant="secondary">
            Reset
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
          <Link href={"/login"}>
            <span className="text-cyan-500 font-bold">Sign In</span>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default SignupPage;
