"use client";

import React from "react";
import { projects, Project } from "../../data/Project";
import ProjectCard from "./ProjectCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProjectListProps {
  onCardClick: (project: Project) => void;
}

function ProjectList({ onCardClick }: ProjectListProps) {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {projects.map((project: Project) => (
          <SwiperSlide key={project.id} className="!h-auto">
            <div className="flex justify-center">
              <ProjectCard project={project} onCardClick={onCardClick} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectList;
