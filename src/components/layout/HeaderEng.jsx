import React, { useState } from "react";

import logo from "../../assets/img/logo.png";
import us from "../../assets/img/us.png";
import hamMenu from "../../assets/img/menu.svg";
import HeaderMenuEng from "./HeaderMenuEng";
import HeaderMenuNavEng from "./HeaderMenuNavEng";

const HeaderEng = () => {
  const [isHover, setIsHover] = useState(false);
  const [isNavClick, setIsNavClick] = useState(false);

  return (
    <>
      <header className="flex">
        <div className="flex header-container">
          <div className="header-logo">
            <a href="/eng">
              <img src={logo} alt={logo} />
            </a>
          </div>
          <nav className="header-nav f-20 flex fw-700">
            <ul className="header-ul center">
              <a href={`/eng/intro`} className={"color-black"}>
                <li
                  onMouseOut={() => setIsHover(false)}
                  onMouseOver={() => setIsHover(true)}
                >
                  Company
                </li>
              </a>
              <a href="/eng/certificate" className={"color-black"}>
                <li
                  onMouseOut={() => setIsHover(false)}
                  onMouseOver={() => setIsHover(true)}
                >
                  Technology
                </li>
              </a>
              <a href="/eng/product/circularlock" className="color-black">
                <li
                  onMouseOut={() => setIsHover(false)}
                  onMouseOver={() => setIsHover(true)}
                >
                  Product
                </li>
              </a>
              <a href="/eng/inquiry" className="color-black">
                <li>Inquiry</li>
              </a>
              <a href="/eng/board" className="color-black">
                <li>Board</li>
              </a>
              <a href="/">
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
      {isHover && <HeaderMenuEng setIsHover={setIsHover} />}
      <HeaderMenuNavEng isNavClick={isNavClick} />
    </>
  );
};

export default HeaderEng;
