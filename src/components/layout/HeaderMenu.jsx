import React from "react";
import { Link } from "react-router-dom";

const HeaderMenu = ({ setIsHover }) => {
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
                <a href={`/intro`} className={"color-white"}>
                  회사 소개
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
                <a href={`/contact`} className={"color-white"}>
                  오시는 길
                </a>
              </div>
            </li>
            <li
              onMouseOver={() => setIsHover(true)}
              onMouseOut={() => setIsHover(false)}
            >
              <div>
                <a href={`/certificate`} className={"color-white"}>
                  인증서
                </a>
              </div>
              <div>
                <a href={`/inspect`} className={"color-white"}>
                  검사설비
                </a>
              </div>
            </li>
            <li
              onMouseOver={() => setIsHover(true)}
              onMouseOut={() => setIsHover(false)}
            >
              <div>
                <a href={`/product/circularlock`} className={"color-white"}>
                  원형 록
                </a>
              </div>
              <div>
                <a href={`/eng/product/circularlock`} className={"color-white"}>
                  딤플 록
                </a>
              </div>
              <div>
                <a href={`/eng/product/circularlock`} className={"color-white"}>
                  디스크 록
                </a>
              </div>
              <div>
                <a href={`/eng/product/circularlock`} className={"color-white"}>
                  스위치 록
                </a>
              </div>
              <div>
                <a href={`/eng/product/circularlock`} className={"color-white"}>
                  캠 럭
                </a>
              </div>
              <div>
                <a href={`/eng/product/circularlock`} className={"color-white"}>
                  사우나 록
                </a>
              </div>
              <div>
                <a href={`/eng/product/circularlock`} className={"color-white"}>
                  철재 록
                </a>
              </div>
              <div>
                <a href={`/eng/product/circularlock`} className={"color-white"}>
                  디지털 록
                </a>
              </div>
              <div>
                <a href={`/eng/product/circularlock`} className={"color-white"}>
                  경 첩
                </a>
              </div>
              <div>
                <a href={`/eng/product/circularlock`} className={"color-white"}>
                  핸 들
                </a>
              </div>
              <div>
                <a href={`/eng/product/circularlock`} className={"color-white"}>
                  스페셜
                </a>
              </div>
              <div>
                <a href={`/eng/product/circularlock`} className={"color-white"}>
                  기 타
                </a>
              </div>
              <div>
                <a href={`/eng/product/circularlock`} className={"color-white"}>
                  주문 제작
                </a>
              </div>
              <div>
                <a href={`/eng/product/circularlock`} className={"color-white"}>
                  개발
                </a>
              </div>
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

export default HeaderMenu;
