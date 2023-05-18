import React from "react";
// css
import "../../assets/css/footer.css";
// image
import logo from "../../assets/img/keyworld.png";

const Footer = () => {
  return (
    <div className="footer flex">
      <div className="footerContainer">
        <div className="footerContainer-1">
          <div>
            <img className="header-logo" src={logo} alt="logo" />
          </div>
          <div className="footerInfo">
            <div>대표 : 김대규</div>
            <div>사업자등록번호 : 130-16-99805</div>
            <div>주소 : 인천광역시 서구 가정로77번길 50-14</div>
            <div>TEL : 032-681-8156</div>
            <div>FAX : 032-681-8157</div>
            <div>개인정보관리책임자 : 김진수(nnayomi@naver.com)</div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        Copyright ⓒ 2020 KEYWORLD Co., Ltd, All Rights Reserved
      </div>
    </div>
  );
};
export default Footer;

//대표 : 김대규   사업자등록번호 : 130-16-99805   주소 : 인천광역시 서구 가정로77번길 50-14   TEL : 032-681-8156 | FAX : 032-681-8157   개인정보관리책임자 : 김진수(nnayomi@naver.com)