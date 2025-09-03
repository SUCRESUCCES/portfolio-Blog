import React from "react";
import { Link } from "react-scroll";

const navItems = [
  { to: "about", label: "About" },
  { to: "resume", label: "Resume" },
  { to: "projects", label: "Projects" },
];

interface MobileMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenuModal({ isOpen, onClose }: MobileMenuModalProps) {
  return (
    <div
      className={`
      xl:hidden fixed inset-0 z-40
      bg-gray-900 bg-opacity-95 text-white
      flex flex-col items-center justify-center
      transition-opacity duration-300
      ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
    `}
    >
      <nav className="flex flex-col items-center gap-y-8">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            className="text-3xl font-bold text-gray-300 hover:text-white transition-colors cursor-pointer"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default MobileMenuModal;
