import React from "react";

const HeaderMenuNavEng = ({ isNavClick }) => {
  return (
    <div
      className={"header-menu-box " + (isNavClick ? "slide-in" : "slide-out")}
    >
      <ul className="header-menu-nav f-20 fw-600">
        <li>
          <a href={`/eng/intro`} className={"color-black"}>
            {" "}
            Company
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/eng/intro`} className={"color-black"}>
            Intro
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/eng/contact`} className={"color-black"}>
            Contact
          </a>
        </li>
        <li>
          <a href={`/eng/certificate`} className={"color-black"}>
            Technology
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/eng/certificate`} className={"color-black"}>
            Certificate
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/eng/inspect`} className={"color-black"}>
            Inspect facility
          </a>
        </li>
        <li>
          <a href={`/eng/product/circularlock`} className={"color-black"}>
            Product
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/eng/product/circularlock`} className={"color-black"}>
            Circular Lock
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/eng/product/dimplelock`} className={"color-black"}>
            Dimple Lock
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/eng/product/disclock`} className={"color-black"}>
            Disc Lock
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/eng/product/switchlock`} className={"color-black"}>
            Switch Lock
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/eng/product/camlock`} className={"color-black"}>
            Cam Lock
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/eng/product/saunalock`} className={"color-black"}>
            Sauna Lock
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/eng/product/steellock`} className={"color-black"}>
            Steel Lock
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/eng/product/digitallock`} className={"color-black"}>
            Digital Lock
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/eng/product/hinge`} className={"color-black"}>
            Hinge
          </a>
        </li>
        <li className="header-menu-small-nav">
          {" "}
          <a href={`/eng/product/handle`} className={"color-black"}>
            Handle
          </a>
        </li>
        <li className="header-menu-small-nav">
          {" "}
          <a href={`/eng/product/special`} className={"color-black"}>
            Special
          </a>
        </li>
        <li className="header-menu-small-nav">
          {" "}
          <a href={`/eng/product/etclock`} className={"color-black"}>
            Etc
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/eng/product/customlock`} className={"color-black"}>
            Custom Lock
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/eng/product/npartlock`} className={"color-black"}>
            N-part
          </a>
        </li>
        <li>
          <a href={`/eng/inquiry`} className={"color-black"}>
            Inquiry
          </a>
        </li>
        <li>
          <a href={`/eng/board`} className={"color-black"}>
            Board
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenuNavEng;
