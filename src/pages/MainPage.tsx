import React, { useState } from "react";
import Profile from "../components/main/Profile";
import AboutCard from "../components/about/AboutCard";
import ResumeCard from "../components/resume/ResumeCard";
import ProjectList from "../components/projects/ProjectList";
import ProjectDetailModal from "../components/projects/ProjectDetailModal"; // 모달 컴포넌트 import
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
    <div className="flex flex-col items-center">
      <section
        id="home"
        className="w-full flex justify-center items-center py-12 px-4"
      >
        <Profile />
      </section>

      <section
        id="about"
        className="w-full flex justify-center items-center py-12 px-4 bg-gray-50"
      >
        <AboutCard />
      </section>

      <section
        id="resume"
        className="w-full flex justify-center py-12 px-4 bg-gray-50"
      >
        <ResumeCard />
      </section>

      <section
        id="projects"
        className="w-full flex justify-center py-12 px-4 bg-gray-50"
      >
        <div className="w-full max-w-6xl">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
            프로젝트
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
