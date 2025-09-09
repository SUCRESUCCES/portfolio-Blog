import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MainPage from "./pages/MainPage";
import MenuButton from "./components/MenuButton";
import MobileMenuModal from "./components/MobileMenuModal";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement; // <html>
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [isDark]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <div
      className={`flex min-h-screen bg-gradient-to-br ${
        isDark
          ? "from-black via-gray-900 to-gray-800"
          : "from-white via-gray-50 to-gray-200"
      }`}
    >
      <Sidebar isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />

      <MenuButton
        isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      <MobileMenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      <main className="flex-1 xl:pr-64">
        <MainPage />
      </main>
    </div>
  );
}

export default App;
