function AboutPage() {
  return (
    <section className="about-section">
      <div className="about-card">
        <h2 className="about-title">소개</h2>
        <table className="about-table">
          <tbody>
            <tr>
              <td className="about-label">이름</td>
              <td>조민주</td>
            </tr>
            <tr>
              <td className="about-label">연락처</td>
              <td>010-8551-8924</td>
            </tr>
            <tr>
              <td className="about-label">이메일</td>
              <td>sucresucces@icloud.com</td>
            </tr>
            <tr>
              <td className="about-label">주소</td>
              <td>경기도 파주시 정담길 123, 103-1002(경신아파트)</td>
            </tr>
            <tr>
              <td className="about-label">깃허브</td>
              <td>
                <a
                  href="https://github.com/SUCRESUCCES"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/SUCRESUCCES
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AboutPage;
