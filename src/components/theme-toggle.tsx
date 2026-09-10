"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  function cycleTheme() {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={cycleTheme}
      className="w-8 h-8 p-0 cursor-pointer"
      title="Cambiar tema"
    >
      {theme === "light" && <Sun size={16} />}
      {theme === "dark" && <Moon size={16} />}
      {theme === "system" && <Monitor size={16} />}
    </Button>
  );
}