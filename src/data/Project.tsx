export interface Project {
  id: number;
  title: string;
  description: string;
  skills: string[];
  imgUrl: string;
  githubUrl: string;
  deployUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "포트폴리오 블로그",
    description:
      "Next.js와 TypeScript를 사용하여 만든 개인 포트폴리오 및 기술 블로그입니다. 깔끔한 UI와...",
    skills: ["Next.js", "TypeScript", "React", "CSS Modules"],
    imgUrl: "/images/project-thumbnail-1.png", // public 폴더 기준 경로
    githubUrl: "https://github.com/SUCRESUCCES/portfolio-Blog",
    deployUrl: "https://minjoo-portfolio.vercel.app/",
  },
  {
    id: 2,
    title: "두 번째 프로젝트",
    description: "이 프로젝트는 어떤 문제를 해결하기 위해...",
    skills: ["React", "JavaScript", "Styled-components"],
    imgUrl: "/images/project-thumbnail-2.png",
    githubUrl: "https://github.com/...",
  },
];
