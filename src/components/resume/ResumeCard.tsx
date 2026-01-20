import React from "react";
import SectionCard from "../common/SectionCard";

const resumeData = {
  education: [
    {
      date: "2025.03 ~ 현재",
      title: "한국방송통신대학교",
      major: "컴퓨터과학과",
      type: "4년제",
      status: "재학중",
    },
    {
      date: "2010.03 ~ 2013.02",
      title: "파주여자고등학교",
      major: "고등학교",
      type: "",
      status: "졸업",
    },
  ],
  training: [
    {
      date: "2024.10.07 ~ 2025.03.27",
      title: "디지털컨버전스 공공데이터 융합 자바개발자 양성 과정",
    },
    {
      date: "2025.10.20 ~ 2025.12.29",
      title: "AI 융합교육기반 프로그램 - 오르미캠프",
    },
  ],
  certificates: [
    { date: "2024.09", title: "컴퓨터활용능력 2급", issuer: "대한상공회의소" },
    { date: "2025.09", title: "SQLD", issuer: "한국데이터산업진흥원" },
    { date: "2026.01", title: "AI Practitioner - Foundational", issuer: "AWS" },
  ],

  experience: [
    {
      date: "2023.07 ~ 2024.07",
      company: "팥티오 운정",
      role: "사원",
      task: "제과, 제빵",
    },
    {
      date: "2023.04 ~ 2023.07",
      company: "정담에프엔비파주지점",
      role: "사원",
      task: "제과, 제빵",
    },
  ],
};

function ResumeCard() {
  return (
    <SectionCard title="Resume" titleHighlight="Path">
      <div className="space-y-12">
        {/* 1. 학력 */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span> 학력
          </h3>
          <div className="space-y-6 ml-3">
            {resumeData.education.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row justify-between border-l-2 border-gray-100 dark:border-white/10 pl-6 relative pb-2"
              >
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5" />
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 text-lg">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    {item.major} {item.type && `(${item.type})`} | {item.status}
                  </p>
                </div>
                <span className="text-sm font-mono text-gray-400 dark:text-gray-500 mt-1 sm:mt-0 font-medium">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. 교육 */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span> 교육
          </h3>
          <div className="space-y-4 ml-3">
            {resumeData.training.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
              >
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 leading-snug">
                    {item.title}
                  </h4>
                </div>
                <span className="text-xs font-mono text-gray-400 dark:text-gray-500 shrink-0">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. 자격증 */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span> 자격증
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-3">
            {resumeData.certificates.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-sm"
              >
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 font-mono mb-2 inline-block">
                  {cert.date}
                </span>
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                  {cert.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. 사회경험 */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>{" "}
            사회경험
          </h3>
          <div className="space-y-4 ml-3">
            {resumeData.experience.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b border-gray-100 dark:border-white/5 last:border-0"
              >
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200">
                    {item.company}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.role} | {item.task}
                  </p>
                </div>
                <span className="text-sm font-mono text-gray-400 dark:text-gray-500 mt-1 sm:mt-0">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

export default ResumeCard;
