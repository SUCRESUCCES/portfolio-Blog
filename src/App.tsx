import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MainPage from "./pages/MainPage";
import MenuButton from "./components/MenuButton";
import MobileMenuModal from "./components/MobileMenuModal";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <div className="flex">
      <Sidebar />

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
