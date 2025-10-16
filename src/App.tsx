import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MainPage from "./pages/MainPage";
import MenuButton from "./components/MenuButton";
import MobileMenuModal from "./components/MobileMenuModal";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // ✅ 1) 첫 로드: localStorage > 시스템 선호 순으로 결정
  useEffect(() => {
    const saved = localStorage.getItem("theme"); // "dark" | "light" | null
    if (saved === "dark" || saved === "light") {
      setIsDark(saved === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDark(prefersDark);
    }
  }, []);

  // ✅ 2) html 클래스 동기화
  useEffect(() => {
    const root = document.documentElement; // <html>
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [isDark]);

  // ✅ 3) 시스템 테마 변경을, 사용자가 직접 선택하지 않았다면 따라가게
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem("theme");
      if (!saved) setIsDark(e.matches);
    };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // ✅ 4) 토글: 상태 + localStorage 저장
  const handleToggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  // 기존 모달 스크롤 락
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
      <Sidebar isDark={isDark} onToggleTheme={handleToggleTheme} />

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
