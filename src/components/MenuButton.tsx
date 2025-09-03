import React from "react";

interface MenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

function MenuButton({ onClick, isOpen }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="xl:hidden fixed top-6 right-6 z-50 w-12 h-12 bg-white rounded-full shadow-lg flex flex-col justify-center items-center gap-y-1"
    >
      <span
        className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-1.5" : ""
        }`}
      ></span>
      <span
        className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
          isOpen ? "-rotate-45 -translate-y-1.5" : ""
        }`}
      ></span>
    </button>
  );
}

export default MenuButton;
