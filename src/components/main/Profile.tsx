import React from "react";

function Profile() {
  return (
    <div className="w-full text-center mt-10 flex flex-col items-center">
      <img
        src="/profile.jpg"
        alt="profile"
        className="w-28 h-28 rounded-full mb-7 shadow-lg object-cover"
      />

      <h1 className="text-4xl font-extrabold mb-4 text-gray-800 tracking-tight leading-tight">
        안녕하세요!
        <br />
        신입 개발자 조민주입니다.
      </h1>

      <p className="text-lg text-gray-600 mb-10 leading-relaxed">
        책임감과 실행력으로 사용자 중심의 서비스를 만듭니다.
        <br />
        저의 포트폴리오 블로그에 방문해주셔서 감사합니다.
      </p>

      <div className="mt-10 w-full max-w-md">
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=SUCRESUCCES&layout=compact&theme=default&hide_border=true&bg_color=00000000"
          alt="github top languages"
          className="max-w-full rounded-xl shadow-md"
        />
      </div>
    </div>
  );
}

export default Profile;
