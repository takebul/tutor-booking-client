"use client";

import { useState } from "react";
import {
  TextField,
  Label,
  InputGroup,
  FieldError,
  Button,
  Description,
} from "@heroui/react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ForgotPassWord() {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  // Validation: Check if the two NEW password fields match
  const passwordsMatch =
    confirmPassword.length === 0 || newPassword === confirmPassword;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordsMatch || !currentPassword || !newPassword) return;

    setLoading(true);
    try {
      const { data, error } = await authClient.changePassword({
        newPassword: newPassword,
        currentPassword: currentPassword,
      });

      if (data) {
        toast.success("Password change successful!");
        // Clear form states
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");

        setTimeout(() => {
          router.push("/login");
        }, 1000);
      }

      if (error) {
        toast.error(error.message || "An error occurred");
      }

      console.log({ data, error });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-2">Reset Password</h1>
        <p className="text-center text-default-500 mb-6">
          Enter your details below to update your password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Current Password Field */}
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
            <Label>Current Password</Label>
            <InputGroup>
              <InputGroup.Input
                name="currentPassword"
                placeholder="Enter current password"
                type={showCurrent ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <InputGroup.Suffix>
                <button
                  type="button"
                  onClick={() => setShowCurrent(!showCurrent)}
                  className="flex items-center justify-center text-default-400 hover:text-default-600"
                >
                  {showCurrent ? (
                    <EyeSlash className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </InputGroup.Suffix>
            </InputGroup>
            <Description>
              Must be at least 6 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          {/* New Password Field */}
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
            <Label>New Password</Label>
            <InputGroup>
              <InputGroup.Input
                name="newPassword"
                placeholder="Enter new password"
                type={showNew ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <InputGroup.Suffix>
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="flex items-center justify-center text-default-400 hover:text-default-600"
                >
                  {showNew ? (
                    <EyeSlash className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </InputGroup.Suffix>
            </InputGroup>
            <Description>
              Must be at least 6 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          {/* Confirm New Password Field */}
          <TextField
            isInvalid={!passwordsMatch}
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
            <Label>Confirm New Password</Label>
            <InputGroup>
              <InputGroup.Input
                name="confirmPassword"
                placeholder="Confirm your new password"
                type={showConfirm ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <InputGroup.Suffix>
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="flex items-center justify-center text-default-400 hover:text-default-600"
                >
                  {showConfirm ? (
                    <EyeSlash className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </InputGroup.Suffix>
            </InputGroup>
            <FieldError>Passwords do not match</FieldError>
            <Description>
              Must be at least 6 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <Button
            type="submit"
            color="primary"
            className="w-full"
            isLoading={loading}
            isDisabled={
              !currentPassword ||
              !newPassword ||
              !confirmPassword ||
              !passwordsMatch
            }
          >
            Reset Password
          </Button>
        </form>
      </div>
    </div>
  );
}
