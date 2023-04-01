import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import us from "../../assets/img/us.png";
import HeaderMenuEng from "./HeaderMenuEng";

const HeaderEng = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <header className="flex">
        <div className="flex header-container">
          <div className="header-logo">
            <a href="/eng/">
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
              <a href="/certificate" className={"color-black"}>
                <li
                  onMouseOut={() => setIsHover(false)}
                  onMouseOver={() => setIsHover(true)}
                >
                  Technology
                </li>
              </a>
              <li
                onMouseOut={() => setIsHover(false)}
                onMouseOver={() => setIsHover(true)}
              >
                Product
              </li>
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
      </header>
      {isHover && <HeaderMenuEng setIsHover={setIsHover} />}
    </>
  );
};

export default HeaderEng;
