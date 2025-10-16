import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    // 로컬스토리지 값 있으면 우선 사용
    if (saved) return saved;

    // 시스템 설정을 기본값으로 사용
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  // 테마 변경시 html class 업데이트 및 로컬스토리지 저장
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  // 시스템 테마 변경 감지, 사용자가 수동으로 선택하지 않은 경우에만 반영
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem("theme");
      if (!saved) setTheme(e.matches ? "dark" : "light");
    };
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return { theme, setTheme };
}
