import React from "react";
import { Project } from "../../data/Project";

interface ProjectCardProps {
  project: Project;
  onCardClick: (project: Project) => void;
}

function ProjectCard({ project, onCardClick }: ProjectCardProps) {
  return (
    <button
      onClick={() => onCardClick(project)}
      className="block w-full max-w-sm text-left group outline-none"
    >
      <div className="relative overflow-hidden bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
        {/* 이미지 영역: 이미지가 없을 때의 대비책까지 포함 */}
        <div className="relative h-52 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
          {project.imgUrl ? (
            <img
              src={project.imgUrl}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500 font-medium">
              {project.name}
            </div>
          )}
          {/* 이미지 위 은은한 그라데이션 오버레이 (다크모드에서 더 예쁨) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* 텍스트 영역 */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.name}
            </h3>
            <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 uppercase tracking-tighter">
              View
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-gray-400" />
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {project.period}
            </p>
          </div>
        </div>

        {/* 하단 장식 선: 호버 시 길어지는 효과 */}
        <div className="absolute bottom-0 left-0 h-1 bg-blue-500 w-0 group-hover:w-full transition-all duration-500" />
      </div>
    </button>
  );
}

export default ProjectCard;
