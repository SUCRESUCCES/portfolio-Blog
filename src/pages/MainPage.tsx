"use client";

import React, { useState } from "react";

import Profile from "../components/main/Profile";
import AboutCard from "../components/about/AboutCard";
import ResumeCard from "../components/resume/ResumeCard";
import ProjectList from "../components/projects/ProjectList";
import ProjectDetailModal from "../components/projects/ProjectDetailModal";
import { Project } from "../data/Project";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MainPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <div className="text-gray-900 dark:text-gray-100 min-h-screen">
      {/* HOME */}
      <section
        id="home"
        className="w-full flex justify-center pt-48 pb-32 px-4 min-h-[60vh] items-center"
      >
        <div className="w-full max-w-3xl mx-auto">
          <Profile />
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="w-full flex justify-center py-20 px-4 bg-transparent"
      >
        <div className="w-full max-w-3xl mx-auto">
          <AboutCard />
        </div>
      </section>

      {/* RESUME */}
      <section
        id="resume"
        className="w-full flex justify-center py-20 px-4 bg-transparent"
      >
        <div className="w-full max-w-3xl mx-auto">
          <ResumeCard />
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="w-full flex justify-center py-20 px-4 pt-32 bg-transparent overflow-visible"
      >
        <div className="w-full max-w-5xl mx-auto overflow-visible">
          <h2 className="text-4xl font-extrabold mb-16 text-center text-gray-900 dark:text-white">
            Projects
          </h2>

          <ProjectList onCardClick={handleCardClick} />
        </div>
      </section>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default MainPage;
