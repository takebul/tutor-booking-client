import { Button, Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";
import { NavbarMenu } from "./NavbarMenu";
import LoginBtn from "@/ui/LoginBtn";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Logout from "./Logout";

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  return (
    <nav className="shadow bg-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="btn lg:hidden">
            <NavbarMenu />
          </div>
          <Link href={"/"}>
            <Image
              className="w-55"
              src={logo}
              height={50}
              width={100}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex gap-4">
          <NavLink href={"/"} classname={"text-black font-semibold"}>
            Home
          </NavLink>
          <NavLink href={"/tutors"} classname={"text-black font-semibold"}>
            Tutors
          </NavLink>
          {user ? (
            <>
              <NavLink
                href={"/addTutor"}
                classname={"text-black font-semibold"}
              >
                Add Tutor
              </NavLink>
              <NavLink
                href={"/myTutors"}
                classname={"text-black font-semibold"}
              >
                My Tutors
              </NavLink>
              <NavLink
                href={"/bookedSessions"}
                classname={"text-black font-semibold"}
              >
                My Booked Sessions
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                href={"/services"}
                classname={"text-black font-semibold"}
              >
                Services
              </NavLink>
              <NavLink href={"/about"} classname={"text-black font-semibold"}>
                About
              </NavLink>
              <NavLink href={"/contact"} classname={"text-black font-semibold"}>
                Contact
              </NavLink>
            </>
          )}
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Logout />
              <div>
                <Link href={"/profile"}>
                  <Avatar>
                    <Avatar.Image
                      referrerPolicy="no-referrer"
                      alt={user?.name}
                      src={user?.image}
                    />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                </Link>
              </div>
            </>
          ) : (
            <>
              <Link href={`/login`}>
                <LoginBtn>Login</LoginBtn>
              </Link>
              <Link href={`signup`}>
                <LoginBtn>Signup</LoginBtn>
              </Link>
            </>
          )}

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
