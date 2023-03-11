import React from "react";

const HeaderMenu = ({ setIsHover }) => {
  return (
    <header className="header-menu flex color-white">
      <nav className="header-nav f-20 flex fw-600">
        <ul className="header-menu-ul center">
          <li
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
          >
            <div>CEO인사말</div>
            <div>조직도</div>
            <div>미래</div>
            <div>오시는 길</div>
          </li>
          <li
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
          >
            <div>인증서</div>
            <div>검사설비</div>
          </li>
          <li
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
          >
            <div>원형 록</div>
            <div>딤플 록</div>
            <div>디스크 록</div>
            <div>스위치 록</div>
            <div>캠 록</div>
            <div>사우나 록</div>
            <div>스틸 록</div>
            <div>디지털 록</div>
            <div>경첩</div>
            <div>핸들</div>
            <div>스페셜 록</div>
            <div>기타</div>
            <div>주문제작</div>
            <div>개발</div>
          </li>
          <li></li>
          <li></li>
          <li> </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderMenu;
