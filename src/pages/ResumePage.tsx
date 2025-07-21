import React from "react";

function ResumePage() {
  return (
    <section className="resume-section">
      <div className="resume-card">
        <h2 className="resume-title">이력</h2>
        <h3 className="resume-subtitle">학력</h3>
        <table className="resume-table">
          <thead>
            <tr>
              <th>재학기간</th>
              <th>학교명 및 전공</th>
              <th>구분</th>
              <th>졸업여부</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025.03 ~ 현재</td>
              <td>한국방송통신대학교 컴퓨터과학과</td>
              <td>4년제</td>
              <td>재학중</td>
            </tr>
            <tr>
              <td>2010.03 ~ 2013.02</td>
              <td>파주여자고등학교</td>
              <td>고등학교</td>
              <td>졸업</td>
            </tr>
          </tbody>
        </table>
        <h3 className="resume-subtitle">교육</h3>
        <table className="resume-table">
          <thead>
            <tr>
              <th>기간</th>
              <th>훈련기관</th>
              <th>훈련과정</th>
              <th>출석률</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024.10.07 ~ 2025.03.27</td>
              <td>KH 정보교육원</td>
              <td>디지털컨버전스 공공데이터 융합 자바개발자 양성과정</td>
              <td>99.1%</td>
            </tr>
          </tbody>
        </table>
        <h3 className="resume-subtitle">자격증</h3>
        <table className="resume-table">
          <thead>
            <tr>
              <th>취득일</th>
              <th>자격명</th>
              <th>발급기관</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024.09</td>
              <td>컴퓨터활용능력 2급</td>
              <td>대한상공회의소</td>
            </tr>
          </tbody>
        </table>
        <h3 className="resume-subtitle">사회경험</h3>
        <table className="resume-table">
          <thead>
            <tr>
              <th>기간</th>
              <th>회사명</th>
              <th>직급/직책</th>
              <th>주요업무</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2023.07 ~ 2024.07</td>
              <td>팥티오 운정</td>
              <td>사원</td>
              <td>제과, 제빵</td>
            </tr>
            <tr>
              <td>2023.04 ~ 2023.07</td>
              <td>정담에프엔비파주지점</td>
              <td>사원</td>
              <td>제과, 제빵</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ResumePage;
