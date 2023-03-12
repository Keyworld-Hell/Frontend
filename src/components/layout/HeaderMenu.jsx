import React from "react";
import { Link } from "react-router-dom";

const HeaderMenu = ({ setIsHover }) => {
  return (
    <header className="header-menu flex color-white">
      <nav className="header-nav f-20 flex fw-600">
        <ul className="header-menu-ul center">
          <li
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
          >
            <div>
              <a href={`/greeting`} className={"color-white"}>
                CEO인사말
              </a>
            </div>
            <div>
              <a href={`/organization`} className={"color-white"}>
                조직도
              </a>
            </div>
            <div>
              <a href={`/future`} className={"color-white"}>
                미래
              </a>
            </div>
            <div>
              <a href={`/contact`} className={"color-white"}>
                오시는 길
              </a>
            </div>
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
