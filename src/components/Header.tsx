import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/about", label: "소개" },
  { path: "/resume", label: "이력" },
  { path: "/projects", label: "프로젝트" },
];

function Header() {
  const location = useLocation();
  return (
    <header
      style={{
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
      }}
    >
      <nav className="header-nav">
        <Link
          to="/"
          className={
            "header-logo" + (location.pathname === "/" ? " active" : "")
          }
        >
          minjoo's Blog
        </Link>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={
              "header-link" + (location.pathname === item.path ? " active" : "")
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
