"use client";

import { Moon, Sun } from "@gravity-ui/icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`
        w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-200
        ${
          isDark
            ? "bg-zinc-800 border-zinc-700 text-yellow-400 hover:bg-zinc-700"
            : "bg-zinc-100 border-zinc-200 text-zinc-500 hover:bg-zinc-200"
        }
      `}
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};

export default ThemeToggle;
