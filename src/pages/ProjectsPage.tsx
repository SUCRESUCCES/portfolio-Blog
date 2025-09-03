import React, { useState } from "react";
import ProjectList from "../components/projects/ProjectList";
import ProjectDetailModal from "../components/projects/ProjectDetailModal";
import { Project } from "../data/Project";

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
        프로젝트
      </h2>

      <ProjectList onCardClick={handleCardClick} />

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}

export default ProjectsPage;
