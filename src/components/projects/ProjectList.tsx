import React from "react";
import { projects } from "../../data/Project";
import ProjectCard from "./ProjectCard";
import { Project } from "../../data/Project";

interface ProjectListProps {
  onCardClick: (project: Project) => void;
}

function ProjectList({ onCardClick }: ProjectListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
}

export default ProjectList;
