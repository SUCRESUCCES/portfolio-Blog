import React from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-gray-500" />
      ) : (
        <Moon className="w-6 h-6 text-gray-300" />
      )}
    </button>
  );
}

export default ThemeToggle;
