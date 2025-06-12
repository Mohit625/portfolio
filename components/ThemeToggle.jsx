"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded p-2 hover:bg-muted transition"
    >
      {theme === "dark" ? <Sun/> : <Moon/>}
    </button>
  );
}
