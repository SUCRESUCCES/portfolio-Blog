export interface Project {
  id: number;
  name: string;
  period: string;
  goal: string[];
  stack: string;
  features: string[];
  role: string;
  feedback: string;
  imgUrl?: string;
  githubUrl?: string;
  deployUrl?: string;
  category: "Work Experience" | "Side Project";
}

export const projects: Project[] = [
  {
    id: 1,
    category: "Side Project",
    name: "SINU-EDU",
    period: "2024.12.20 ~ 2025.02.04",
    goal: [
      "접근성과 효율성을 갖춘 온라인 코딩 학습 플랫폼",
      "사용자 친화적인 인터페이스",
      "회원간 원활한 커뮤니티 환경 조성",
      "관리자 환경과 질문 및 게시판 구현",
    ],
    stack:
      "JavaScript, HTML, CSS, Java, Springboot, jQuery, mybatis, Oracle, Eclipse, Tomcat, GitHub",
    features: [
      "홈화면 및 UI 디자인",
      "비밀번호 찾기 및 정보 수정",
      "게시판 기능",
      "회원관리 기능",
    ],
    role: "질문게시판 구현",
    feedback:
      "질문 게시판을 만들면서 단순한 기능 구현만으로는 아쉬워 다양한 기능과 효율적인 운영에 대해 고민하게 되었습니다. 실제 사용자 입장에서 편리하게 사용할 수 있도록 디자인과 기능을 신경썼고, 협업의 중요성을 느꼈습니다.",
    githubUrl: "https://github.com/SUCRESUCCES/Semi-project-CodingHi.git",
  },
  {
    id: 2,
    category: "Side Project",
    name: "HAPLA",
    period: "2025.02.03 ~ 2025.03.27",
    goal: [
      "사용자 중심의 온라인 여행 정보 플랫폼",
      "사용자 친화적인 인터페이스",
      "회원간 정보 공유를 위한 커뮤니티",
      "관리자의 원활한 회원 및 게시글 관리",
    ],
    stack:
      "JavaScript, HTML, CSS, Java, Springboot, jQuery, mybatis, Oracle, Eclipse, Tomcat, GitHub, SourceTree",
    features: [
      "메인 및 검색 기능",
      "게시판/커뮤니티",
      "회원관리 및 소셜 로그인",
      "여행 일정 관리",
    ],
    role: "여행 일정 관리 구현",
    feedback:
      "API를 처음 적용해보고, 맞춰 코드를 작성하는 과정을 경험했습니다. 새로운 기술을 익히며 협업의 중요성과 꾸준한 성장의 필요성을 느꼈습니다.",
    githubUrl: "https://github.com/SUCRESUCCES/Final-project-Hapla.git",
  },
  {
    id: 3,
    category: "Side Project",
    name: "Portfolio Website",
    period: "2024.07.01 ~ 진행중",
    goal: [
      "개인 포트폴리오 웹사이트 개발",
      "React와 TypeScript를 활용한 모던 웹 개발",
      "반응형 디자인 및 다크 모드 지원",
    ],
    stack: "React, TypeScript, Tailwind CSS, Vite, GitHub Pages",
    features: [
      "홈, 소개, 이력서, 프로젝트 섹션 구현",
      "프로젝트 상세 모달 기능",
      "반응형 디자인 및 다크 모드 지원",
    ],
    role: "전체 개발 및 디자인",
    feedback:
      "포트폴리오 웹사이트를 직접 개발하면서 React와 TypeScript에 대한 이해를 깊게 할 수 있었습니다. 또한, 사용자 경험을 고려한 디자인과 기능 구현의 중요성을 깨달았습니다.",
    githubUrl: "https://github.com/SUCRESUCCES/portfolio-Blog",
  },
  {
    id: 4,
    category: "Side Project",
    name: "Todo List App",
    period: "2025.08.08 ~ 2025.09.06",
    goal: [
      "사용자 중심의 간단한 할 일 목록 앱 개발",
      "React와 TypeScript를 활용한 모던 웹 개발",
      "사용자 친화적인 인터페이스 제공",
    ],
    stack: "React, TypeScript, Tailwind CSS, Vite, GitHub Pages",
    features: [
      "할 일 추가 및 삭제 기능",
      "완료 상태 토글 기능",
      "할 일 목록 필터링 기능",
    ],
    role: "전체 개발 및 디자인",
    feedback:
      "Todo List 앱을 개발하면서 React와 TypeScript의 기본 개념을 익히고, 사용자 경험을 고려한 UI/UX 설계에 대해 배울 수 있었습니다.",
    githubUrl: "https://github.com/SUCRESUCCES/TodoList",
    deployUrl: "https://ttodutodo.vercel.app/",
  },
  {
    id: 5,
    category: "Side Project",
    name: "JejuEmotionMap",
    period: "2025.12.01 ~ 진행중",
    goal: [
      "제주도의 감정을 시각화한 웹 애플리케이션 개발",
      "사용자 중심의 인터페이스 설계",
      "지도 기반 감정 데이터 시각화",
    ],
    stack: "React, TypeScript, Tailwind CSS, Vite, GitHub Pages",
    features: [
      "제주도 지도 기반 감정 데이터 시각화",
      "사용자 감정 입력 및 저장 기능",
      "감정 데이터 분석 및 통계 제공",
    ],
    role: "프론트엔드 개발",
    feedback:
      "제주도의 감정을 시각화하는 프로젝트를 통해 사용자 경험과 데이터 시각화에 대한 이해를 높일 수 있었습니다.",
    githubUrl: "https://github.com/SUCRESUCCES/jejuEmotionMap",
  },
];
