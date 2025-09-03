import React from "react";

// 아이콘을 포함한 데이터 구조로 만들기
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
    <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 w-full max-w-4xl">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">
        About Me
      </h2>

      <div className="space-y-6">
        {personalInfo.map((info) => (
          <div key={info.label} className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-32 font-semibold text-gray-500 mb-1 sm:mb-0">
              {info.label}
            </div>

            <div className="flex-1 text-gray-800">
              {info.link ? (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                info.value
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutCard;
