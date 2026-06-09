import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";
import { NavbarMenu } from "./NavbarMenu";
import LogoutBtn from "@/ui/LogoutBtn";
import LoginBtn from "@/ui/LoginBtn";

const Navbar = () => {
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
          <NavLink href={"/addTutor"} classname={"text-black font-semibold"}>
            Add Tutor
          </NavLink>
          <NavLink href={"/myTutors"} classname={"text-black font-semibold"}>
            My Tutors
          </NavLink>
          <NavLink
            href={"/bookedSessions"}
            classname={"text-black font-semibold"}
          >
            My Booked Sessions
          </NavLink>
        </div>
        <div className="flex items-center gap-4">
          <LoginBtn>Login</LoginBtn>
          <LogoutBtn>Logout</LogoutBtn>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
