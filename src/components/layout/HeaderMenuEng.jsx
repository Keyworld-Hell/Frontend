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
                  Circular Lock
                </a>
              </div>
              <div>
                <a href={`/eng/product/dimplelock`} className={"color-white"}>
                  Dimple Lock
                </a>
              </div>
              <div>
                <a href={`/eng/product/disclock`} className={"color-white"}>
                  Disc Lock
                </a>
              </div>
              <div>
                <a href={`/eng/product/switchlock`} className={"color-white"}>
                  Switch Lock
                </a>
              </div>
              <div>
                <a href={`/eng/product/camlock`} className={"color-white"}>
                  Cam Lock
                </a>
              </div>
              <div>
                <a href={`/eng/product/saunalock`} className={"color-white"}>
                  Sauna Lock
                </a>
              </div>
              <div>
                <a href={`/eng/product/steellock`} className={"color-white"}>
                  Steel Lock
                </a>
              </div>
              <div>
                <a href={`/eng/product/digitallock`} className={"color-white"}>
                  Digital Lock
                </a>
              </div>
              <div>
                <a href={`/eng/product/hinge`} className={"color-white"}>
                  Hinge
                </a>
              </div>
              <div>
                <a href={`/eng/product/handle`} className={"color-white"}>
                  Handle
                </a>
              </div>
              <div>
                <a href={`/eng/product/special`} className={"color-white"}>
                  Special
                </a>
              </div>
              <div>
                <a href={`/eng/product/etclock`} className={"color-white"}>
                  Etc
                </a>
              </div>
              <div>
                <a href={`/eng/product/customlock`} className={"color-white"}>
                  Custom Lock
                </a>
              </div>
              <div>
                <a href={`/eng/product/npartlock`} className={"color-white"}>
                  N-part
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

export default HeaderMenuEng;
