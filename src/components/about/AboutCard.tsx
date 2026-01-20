import React from "react";
import SectionCard from "../common/SectionCard";

const personalInfo = [
  { label: "이름", value: "조민주" },
  { label: "연락처", value: "010-8551-8924" },
  { label: "이메일", value: "sucresucces@icloud.com" },
  { label: "주소", value: "경기도 파주시" },
  {
    label: "깃허브",
    value: "github.com/SUCRESUCCES",
    link: "https://github.com/SUCRESUCCES",
  },
];

function AboutCard() {
  return (
    <SectionCard title="About" titleHighlight="Me">
      <div className="space-y-8">
        {personalInfo.map((info) => (
          <div
            key={info.label}
            className="flex flex-col sm:flex-row items-start sm:items-center"
          >
            <div className="w-full sm:w-32 font-semibold text-gray-500 dark:text-gray-400 mb-2 sm:mb-0 text-sm uppercase tracking-wider">
              {info.label}
            </div>
            <div className="flex-1 text-gray-800 dark:text-gray-200 font-medium text-lg">
              {info.link ? (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 underline-offset-4 hover:underline transition-all inline-flex items-center gap-1"
                >
                  {info.value}
                  <span className="text-xs">↗</span>
                </a>
              ) : (
                info.value
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

export default AboutCard;
