import React, { useState } from "react";

import Profile from "../components/main/Profile";
import AboutCard from "../components/about/AboutCard";
import ResumeCard from "../components/resume/ResumeCard";
import ProjectList from "../components/projects/ProjectList";
import ProjectDetailModal from "../components/projects/ProjectDetailModal";
import { Project } from "../data/Project";

function MainPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <section id="home" className="w-full flex justify-center py-20 px-4">
        <div className="w-full max-w-3xl mx-auto">
          <Profile />
        </div>
      </section>

      <section
        id="about"
        className="w-full flex justify-center py-20 px-4 bg-gray-50"
      >
        <div className="w-full max-w-3xl mx-auto">
          <AboutCard />
        </div>
      </section>

      <section id="resume" className="w-full flex justify-center py-20 px-4">
        <div className="w-full max-w-3xl mx-auto">
          <ResumeCard />
        </div>
      </section>

      <section
        id="projects"
        className="w-full flex justify-center py-20 px-4 bg-gray-50"
      >
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
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
