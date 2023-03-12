import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <header className="border-box flex">
        <div className="header-logo">
          <a href="/">
            <img src={logo} alt={logo} />
          </a>
        </div>
        <nav className="header-nav f-20 flex fw-700">
          <ul className="header-ul center">
            <a href={`/greeting`} className={"color-black"}>
              <li
                onMouseOut={() => setIsHover(false)}
                onMouseOver={() => setIsHover(true)}
              >
                기업정보
              </li>
            </a>
            <Link to={`/certificate`} className={"color-black"}>
              <li
                onMouseOut={() => setIsHover(false)}
                onMouseOver={() => setIsHover(true)}
              >
                기술소개
              </li>
            </Link>
            <li
              onMouseOut={() => setIsHover(false)}
              onMouseOver={() => setIsHover(true)}
            >
              제품소개
            </li>
            <li>문의하기</li>
            <li>게시판</li>
            <li>영어</li>
          </ul>
        </nav>
      </header>
      {isHover && <HeaderMenu setIsHover={setIsHover} />}
    </>
  );
};

export default Header;
