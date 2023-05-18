import React from "react";

const HeaderMenuNav = ({ isNavClick }) => {
  return (
    <div
      className={"header-menu-box " + (isNavClick ? "slide-in" : "slide-out")}
    >
      <ul className="header-menu-nav f-20 fw-600">
        <li>
          <a href={`/intro`} className={"color-black"}>
            {" "}
            기업 정보
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/intro`} className={"color-black"}>
            회사 소개
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/contact`} className={"color-black"}>
            오시는 길
          </a>
        </li>
        <li>
          <a href={`/certificate`} className={"color-black"}>
            기술소개
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/certificate`} className={"color-black"}>
            인증서
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/inspect`} className={"color-black"}>
            검사설비
          </a>
        </li>
        <li>
          <a href={`/product/circularlock`} className={"color-black"}>
            제품 소개
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/product/circularlock`} className={"color-black"}>
            원형 록
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/product/dimplelock`} className={"color-black"}>
            딤플 록
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/product/disclock`} className={"color-black"}>
            디스크 록
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/product/switchlock`} className={"color-black"}>
            스위치 록
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/product/camlock`} className={"color-black"}>
            캠 록
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/product/saunalock`} className={"color-black"}>
            사우나 록
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/product/steellock`} className={"color-black"}>
            철재 록
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/product/digitallock`} className={"color-black"}>
            디지털 록
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/product/hinge`} className={"color-black"}>
            경 첩
          </a>
        </li>
        <li className="header-menu-small-nav">
          {" "}
          <a href={`/product/handle`} className={"color-black"}>
            핸 들
          </a>
        </li>
        <li className="header-menu-small-nav">
          {" "}
          <a href={`/product/special`} className={"color-black"}>
            스페셜
          </a>
        </li>
        <li className="header-menu-small-nav">
          {" "}
          <a href={`/product/etclock`} className={"color-black"}>
            기 타
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/product/customlock`} className={"color-black"}>
            주문 제작
          </a>
        </li>
        <li className="header-menu-small-nav">
          <a href={`/product/npartlock`} className={"color-black"}>
            개발
          </a>
        </li>
        <li>
          <a href={`/inquiry`} className={"color-black"}>
            문의 하기
          </a>
        </li>
        <li>
          <a href={`/board`} className={"color-black"}>
            게시판
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenuNav;
