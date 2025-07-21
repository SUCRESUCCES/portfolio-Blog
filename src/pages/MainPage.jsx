import React from "react";

function MainPage() {
  return (
    <section className="main-section">
      <img src="/profile.jpg" alt="profile" className="main-profile-img" />
      <h1 className="main-title">
        안녕하세요!
        <br />
        신입 풀스택 개발자 조민주입니다.
      </h1>
      <p className="main-desc">
        책임감과 실행력으로 사용자 중심의 서비스를 만듭니다.
        <br />
        저의 포트폴리오 블로그에 방문해주셔서 감사합니다.
      </p>
      <div style={{ marginTop: 40 }}>
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=SUCRESUCCES&layout=compact&theme=default"
          alt="github top languages"
          style={{
            maxWidth: "100%",
            borderRadius: 12,
            boxShadow: "0 2px 8px #e0e0e0",
          }}
        />
      </div>
    </section>
  );
}

export default MainPage;
