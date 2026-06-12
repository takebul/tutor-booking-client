"use client";

import { Bars } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

export function NavbarMenu({ user }) {
  const guestItems = [
    { label: "Home", href: "/", icon: "🏠" },
    { label: "Tutors", href: "/tutors", icon: "🎓" },
    { label: "Services", href: "/services", icon: "📋" },
    { label: "About", href: "/about", icon: "ℹ️" },
    { label: "Contact", href: "/contact", icon: "✉️" },
  ];

  const authItems = [
    { label: "Home", href: "/", icon: "🏠" },
    { label: "Tutors", href: "/tutors", icon: "🎓" },
    { label: "Add Tutor", href: "/addTutor", icon: "➕" },
    { label: "My Tutors", href: "/myTutors", icon: "👨‍🏫" },
    { label: "Booked Sessions", href: "/bookedSessions", icon: "📅" },
  ];

  const navItems = user ? authItems : guestItems;

  return (
    <Drawer>
      <Button
        size="sm"
        variant="ghost"
        className="p-2 min-w-0 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 border-none shadow-none"
      >
        <Bars className="w-5 h-5" />
      </Button>

      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog className="w-72 h-full bg-white dark:bg-zinc-950 flex flex-col shadow-xl">
            <Drawer.CloseTrigger className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" />

            <Drawer.Header className="px-5 pt-5 pb-4 border-b border-zinc-100 dark:border-zinc-800">
              <Drawer.Heading>
                <Link href="/" className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
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
                  <span className="font-bold text-lg text-zinc-900 dark:text-white tracking-tight">
                    Tutor
                    <span className="text-blue-600 dark:text-blue-400">
                      Book
                    </span>
                  </span>
                </Link>
              </Drawer.Heading>
            </Drawer.Header>

            <Drawer.Body className="px-3 py-4 flex-1 overflow-y-auto">
              <p className="text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2 px-3">
                Menu
              </p>
              <nav className="flex flex-col gap-0.5">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span className="text-base leading-none">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </Drawer.Body>

            {!user && (
              <div className="px-4 py-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-col gap-2">
                <Link href="/login">
                  <button className="w-full py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-600 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                    Login
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="w-full py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}
