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
  category: "Work Experience" | "Side Project"; // 'category'는 필수 항목!
}

export const projects: Project[] = [
  {
    id: 1,
    category: "Side Project", // <-- 이 줄을 추가했습니다!
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
];
