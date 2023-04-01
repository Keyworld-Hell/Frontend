import React from "react";
import { Link } from "react-router-dom";

const HeaderMenuEng = ({ setIsHover }) => {
  return (
    <header className="header-menu flex color-white">
      <div className="flex header-container">
        <nav className="header-nav f-20 flex fw-600">
          <ul className="header-menu-ul center ">
            <li
              onMouseOver={() => setIsHover(true)}
              onMouseOut={() => setIsHover(false)}
            >
              <div>
                <a href={`/eng/intro`} className={"color-white"}>
                  Intro
                </a>
              </div>
              {/* <div>
                <a href={`/organization`} className={"color-white"}>
                  조직도
                </a>
              </div> */}
              {/* <div>
                <a href={`/future`} className={"color-white"}>
                  미래
                </a>
              </div> */}
              <div>
                <a href={`/eng/contact`} className={"color-white"}>
                  Contact
                </a>
              </div>
            </li>
            <li
              onMouseOver={() => setIsHover(true)}
              onMouseOut={() => setIsHover(false)}
            >
              <div>
                <a href={`/eng/certificate`} className={"color-white"}>
                  Certificate
                </a>
              </div>
              <div>
                <a href={`/eng/inspect`} className={"color-white"}>
                  Ispect facility
                </a>
              </div>
            </li>
            <li
              onMouseOver={() => setIsHover(true)}
              onMouseOut={() => setIsHover(false)}
            >
              <div>
                <a href={`/eng/product/circularlock`} className={"color-white"}>
                  원형 록
                </a>
              </div>
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
      </div>
    </header>
  );
};

export default HeaderMenuEng;
