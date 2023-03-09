import React from "react";

import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <header className="border-box flex">
      <div className="header-logo">
        <img src={logo} alt={logo} />
      </div>
      <nav className="header-nav f-20 flex fw-700">
        <ul className="header-ul">
          <li>기업정보</li>
          <li>기술소개</li>
          <li>제품소개</li>
          <li>문의하기</li>
          <li>게시판</li>
          <li>영어</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
