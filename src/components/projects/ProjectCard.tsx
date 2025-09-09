import React from "react";
import { Project } from "../../data/Project";

interface ProjectCardProps {
  project: Project;
  onCardClick: (project: Project) => void; // onCardClick 함수를 props로 받음
}

function ProjectCard({ project, onCardClick }: ProjectCardProps) {
  return (
    <button
      onClick={() => onCardClick(project)}
      className="block w-full max-w-sm text-left"
    >
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
        {project.imgUrl ? (
          <img
            src={project.imgUrl}
            alt={project.name}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
            {project.name}
          </div>
        )}
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 truncate">
            {project.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{project.period}</p>
        </div>
      </div>
    </button>
  );
}

export default ProjectCard;
