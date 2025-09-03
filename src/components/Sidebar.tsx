import React from "react";
import { Link } from "react-scroll";

const navItems = [
  { to: "about", label: "About" },
  { to: "resume", label: "Resume" },
  { to: "projects", label: "Projects" },
];

function Sidebar() {
  const activeLinkStyle = "text-gray-900 font-bold";
  const defaultLinkStyle = "text-gray-500 font-medium";

  return (
    <aside
      className="
      w-64 h-screen fixed top-0 right-0 z-40
      p-8 flex flex-col
      hidden xl:flex
    "
    >
      <div className="mb-12 text-right">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-2xl font-black text-gray-800 cursor-pointer hover:text-primary transition-colors"
        >
          minjoo's Blog
        </Link>
        <p className="text-sm text-gray-500 mt-2">Frontend Developer</p>
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
            className={`text-lg transition-colors hover:text-gray-900 cursor-pointer ${defaultLinkStyle}`}
            activeClass={activeLinkStyle}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto text-sm text-gray-500 text-right">
        <a
          href="https://github.com/SUCRESUCCES"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900"
        >
          GitHub
        </a>
        <p className="mt-2">© 2025 Minjoo Cho.</p>
      </div>
    </aside>
  );
}

export default Sidebar;
