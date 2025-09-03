import React from "react";
import AboutCard from "../components/about/AboutCard";

function AboutPage() {
  return (
    <section className="w-full flex justify-center items-center py-12 px-4 bg-gray-50 min-h-[calc(100vh-70px)]">
      <AboutCard />
    </section>
  );
}

export default AboutPage;
