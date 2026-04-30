"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
        isDark ? "bg-primary" : "bg-neutral-400"
      }`}
    >
      <span
        className={`absolute top-1 w-5 h-5 rounded-full bg-white flex items-center justify-center transition-all duration-300 ${
          isDark ? "left-8" : "left-1"
        }`}
      >
        {isDark ? (
          <Moon className="h-3 w-3 text-primary" />
        ) : (
          <Sun className="h-3 w-3 text-neutral-500" />
        )}
      </span>
    </button>
  );
}