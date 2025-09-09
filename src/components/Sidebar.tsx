import React from "react";
import { Link } from "react-scroll";
import { ThemeProps } from "../types/theme";
import ThemeToggle from "./ThemeToggle"; // ✅ 누락된 import 추가

const navItems = [
  { to: "about", label: "About" },
  { to: "resume", label: "Resume" },
  { to: "projects", label: "Projects" },
];

function Sidebar({ isDark, onToggleTheme }: ThemeProps) {
  const activeLinkStyle = isDark
    ? "text-white font-bold"
    : "text-gray-900 font-bold";
  const defaultLinkStyle = isDark ? "text-gray-300" : "text-gray-500";
  const hoverLinkStyle = isDark ? "hover:text-white" : "hover:text-gray-900";
  const brandText = isDark ? "text-white" : "text-gray-800";
  const subText = isDark ? "text-gray-400" : "text-gray-500";
  const footerHover = isDark ? "hover:text-white" : "hover:text-gray-900";

  return (
    <aside
      className="
        w-64 h-screen fixed top-0 right-0 z-40
        p-8 flex flex-col hidden xl:flex
      "
    >
      <div className="mb-12 text-right">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className={`text-2xl font-black cursor-pointer transition-colors ${brandText}`}
        >
          minjoo&apos;s Blog
        </Link>
        <p className={`text-sm mt-2 ${subText}`}>Frontend Developer</p>
      </div>

      <nav className="my-auto flex flex-col gap-y-4 items-end">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            className={`text-lg transition-colors cursor-pointer ${defaultLinkStyle} ${hoverLinkStyle}`}
            activeClass={activeLinkStyle}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto text-right">
        <div className="mb-4 flex justify-end">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
        </div>
        <div className={`text-sm ${subText}`}>
          <a
            href="https://github.com/SUCRESUCCES"
            target="_blank"
            rel="noopener noreferrer"
            className={footerHover}
          >
            GitHub
          </a>
          <p className="mt-2">© 2025 Minjoo Cho.</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
