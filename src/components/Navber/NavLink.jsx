"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = href === pathName;

  return (
    <Link
      href={href}
      className={`
        relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150
        ${
          isActive
            ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50"
            : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
        }
      `}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
      )}
    </Link>
  );
};

export default NavLink;
