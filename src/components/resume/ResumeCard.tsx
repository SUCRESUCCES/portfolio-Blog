import React from "react";

const educationData = [
  {
    period: "2025.03 ~ 현재",
    name: "한국방송통신대학교 컴퓨터과학과",
    type: "4년제",
    status: "재학중",
  },
  {
    period: "2010.03 ~ 2013.02",
    name: "파주여자고등학교",
    type: "고등학교",
    status: "졸업",
  },
];

const trainingData = [
  {
    period: "2024.10.07 ~ 2025.03.27",
    institution: "KH 정보교육원",
    course: "디지털컨버전스 공공데이터 융합 자바개발자 양성과정",
    attendance: "99.1%",
  },
];

const certificationData = [
  { date: "2024.09", name: "컴퓨터활용능력 2급", issuer: "대한상공회의소" },
];

const experienceData = [
  {
    period: "2023.07 ~ 2024.07",
    company: "팥티오 운정",
    position: "사원",
    tasks: "제과, 제빵",
  },
  {
    period: "2023.04 ~ 2023.07",
    company: "정담에프엔비파주지점",
    position: "사원",
    tasks: "제과, 제빵",
  },
];

const ResumeSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-10">
    <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">
      {title}
    </h3>
    {children}
  </div>
);

const DataTable = ({
  headers,
  children,
}: {
  headers: string[];
  children: React.ReactNode;
}) => (
  <div className="overflow-x-auto">
    <div className="min-w-full text-sm text-left text-gray-700">
      <div className="sr-only">
        {headers.map((h) => (
          <div key={h}>{h}</div>
        ))}
      </div>

      <div className="space-y-3">{children}</div>
    </div>
  </div>
);

function ResumeCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 w-full max-w-5xl">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">
        Resume
      </h2>

      <ResumeSection title="학력">
        <DataTable headers={["재학기간", "학교명 및 전공", "구분", "졸업여부"]}>
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="grid grid-cols-4 gap-4 p-3 bg-gray-50 rounded-lg"
            >
              <div>{edu.period}</div>
              <div className="font-semibold text-gray-800">{edu.name}</div>
              <div>{edu.type}</div>
              <div>{edu.status}</div>
            </div>
          ))}
        </DataTable>
      </ResumeSection>

      <ResumeSection title="교육">
        <DataTable headers={["기간", "훈련기관", "훈련과정", "출석률"]}>
          {trainingData.map((train, index) => (
            <div
              key={index}
              className="grid grid-cols-4 gap-4 p-3 bg-gray-50 rounded-lg"
            >
              <div>{train.period}</div>
              <div className="col-span-2 font-semibold text-gray-800">
                {train.course}
              </div>
              <div>{train.attendance}</div>
            </div>
          ))}
        </DataTable>
      </ResumeSection>

      <ResumeSection title="자격증">
        <DataTable headers={["취득일", "자격명", "발급기관"]}>
          {certificationData.map((cert, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 p-3 bg-gray-50 rounded-lg"
            >
              <div>{cert.date}</div>
              <div className="font-semibold text-gray-800">{cert.name}</div>
              <div>{cert.issuer}</div>
            </div>
          ))}
        </DataTable>
      </ResumeSection>

      <ResumeSection title="사회경험">
        <DataTable headers={["기간", "회사명", "직급/직책", "주요업무"]}>
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="grid grid-cols-4 gap-4 p-3 bg-gray-50 rounded-lg"
            >
              <div>{exp.period}</div>
              <div className="font-semibold text-gray-800">{exp.company}</div>
              <div>{exp.position}</div>
              <div>{exp.tasks}</div>
            </div>
          ))}
        </DataTable>
      </ResumeSection>
    </div>
  );
}

export default ResumeCard;
