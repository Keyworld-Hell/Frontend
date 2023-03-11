import React, { useState } from "react";

import logo from "../../assets/img/logo.png";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <header className="border-box flex">
        <div className="header-logo">
          <img src={logo} alt={logo} />
        </div>
        <nav className="header-nav f-20 flex fw-700">
          <ul className="header-ul center">
            <li
              onMouseOut={() => setIsHover(false)}
              onMouseOver={() => setIsHover(true)}
            >
              기업정보
            </li>
            <li
              onMouseOut={() => setIsHover(false)}
              onMouseOver={() => setIsHover(true)}
            >
              기술소개
            </li>
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
