import React, { useState } from "react";

import logo from "../../assets/img/logo.png";
import us from "../../assets/img/us.png";
import hamMenu from "../../assets/img/menu.svg";
import HeaderMenu from "./HeaderMenu";
import HeaderMenuNav from "./HeaderMenuNav";

const Header = () => {
  const [isHover, setIsHover] = useState(false);
  const [isNavClick, setIsNavClick] = useState(false);

  return (
    <>
      <header className="flex">
        <div className="flex header-container">
          <div className="header-logo">
            <a href="/">
              <img src={logo} alt={logo} />
            </a>
          </div>
          <nav className="header-nav f-20 flex fw-700">
            <ul className="header-ul center">
              <a href={`/intro`} className={"color-black"}>
                <li
                  onMouseOut={() => setIsHover(false)}
                  onMouseOver={() => setIsHover(true)}
                >
                  기업정보
                </li>
              </a>
              <a href="/certificate" className={"color-black"}>
                <li
                  onMouseOut={() => setIsHover(false)}
                  onMouseOver={() => setIsHover(true)}
                >
                  기술소개
                </li>
              </a>
              <li
                onMouseOut={() => setIsHover(false)}
                onMouseOver={() => setIsHover(true)}
              >
                제품소개
              </li>
              <a href="/inquiry" className="color-black">
                <li>문의하기</li>
              </a>
              <a href="/board" className="color-black">
                <li>게시판</li>
              </a>
              <a href="/eng">
                <li>
                  <img src={us} alt={us} />
                </li>
              </a>
            </ul>
          </nav>
        </div>
        <div
          className="header-hamburger cursor"
          onClick={() => {
            setIsNavClick((isNavClick) => !isNavClick);
          }}
        >
          <img src={hamMenu} className="header-menu-icon m-0" alt="error" />
        </div>
      </header>
      {isHover && <HeaderMenu setIsHover={setIsHover} />}
      <HeaderMenuNav isNavClick={isNavClick} />
    </>
  );
};

export default Header;
