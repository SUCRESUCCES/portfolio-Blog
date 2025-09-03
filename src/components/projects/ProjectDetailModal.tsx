import React from "react";
import { Project } from "../../data/Project";

interface ModalProps {
  project: Project;
  onClose: () => void;
}

function ProjectDetailModal({ project, onClose }: ModalProps) {
  const stackItems = project.stack.split(/,\s*/);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>

        <div className="flex flex-col gap-y-6">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900">
              {project.name}
            </h2>
            {project.imgUrl && (
              <div className="my-4">
                {" "}
                <img
                  src={project.imgUrl}
                  alt={`${project.name} 대표 이미지`}
                  className="w-full rounded-lg border border-gray-200"
                />
              </div>
            )}
            <p className="text-md text-gray-500 mt-2">{project.period}</p>
          </div>
          <Section title="🎯 목표">
            <ul className="list-disc list-inside text-gray-700 space-y-1 leading-relaxed">
              {project.goal.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>
          </Section>
          <Section title="🛠️ 사용 기술">
            <div className="flex flex-wrap gap-2">
              {stackItems.map((tech) => (
                <span
                  key={tech}
                  className="bg-sky-100 text-sky-800 text-sm font-medium px-3 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>
          {/* 추가할 것 추가하기! */}
          <div className="mt-6 pt-6 border-t border-gray-200 flex items-center gap-x-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-x-2 px-4 py-2 bg-gray-800 text-white font-semibold text-sm rounded-lg hover:bg-gray-900 transition-colors shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                GitHub
              </a>
            )}
            {project.deployUrl && (
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-x-2 px-4 py-2 bg-primary text-white font-semibold text-sm rounded-lg hover:bg-primary-hover transition-colors shadow-sm"
              >
                Website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    {children}
  </div>
);

export default ProjectDetailModal;
