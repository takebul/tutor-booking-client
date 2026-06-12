import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";
import { NavbarMenu } from "./NavbarMenu";
import LoginBtn from "@/ui/LoginBtn";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Logout from "./Logout";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="lg:hidden">
            <NavbarMenu user={user} />
          </div>

          <Link
            href="/"
            className="flex items-center gap-2.5 group select-none"
          >
            <div className="w-8 h-8 rounded-xl bg-blue-600 group-hover:bg-blue-700 transition-colors flex items-center justify-center shadow-sm flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-4 h-4"
              >
                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
              </svg>
            </div>
            <span className="hidden sm:block font-bold text-lg text-zinc-900 dark:text-white leading-none tracking-tight">
              Tutor
              <span className="text-blue-600 dark:text-blue-400">Book</span>
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/tutors">Tutors</NavLink>
          {user ? (
            <>
              <NavLink href="/addTutor">Add Tutor</NavLink>
              <NavLink href="/myTutors">My Tutors</NavLink>
              <NavLink href="/bookedSessions">Booked Sessions</NavLink>
            </>
          ) : (
            <>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </>
          )}
        </div>

        <div className="flex items-center gap-4 flex-shrink-0">
          {user ? (
            <div className="flex items-center gap-4">
              <Logout />
              <Link href="/profile">
                <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-blue-500 ring-offset-2 ring-offset-white dark:ring-offset-zinc-950 hover:ring-blue-400 transition-all flex-shrink-0">
                  {user?.image ? (
                    <Image
                      width={70}
                      height={70}
                      src={user.image}
                      alt={user?.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-blue-600 flex items-center justify-center text-white text-sm font-semibold">
                      {user?.name?.charAt(0)?.toUpperCase()}
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login" className="hidden sm:block">
                <LoginBtn variant="outline">Login</LoginBtn>
              </Link>

              <Link href="/signup">
                <LoginBtn variant="solid">Signup</LoginBtn>
              </Link>
            </div>
          )}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
