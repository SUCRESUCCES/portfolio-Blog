import React from "react";
import Sidebar from "./components/Sidebar";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 lg:pr-64">
        <MainPage />
      </main>
    </div>
  );
}

export default App;
