import React from "react";
// css
import "../../assets/css/footer.css";
// image
import logo from "../../assets/img/keyworld.png";

const FooterEng = () => {
  return (
    <div className="footer flex">
      <div className="footerContainer">
        <div className="footerContainer-1">
          <div>
            <img className="header-logo" src={logo} alt="logo" />
          </div>
          <div className="footerInfo">
            <div>CEO : Daekyu Kim</div>
            {/* <div>
              사업자등록번호 : 130-16-99805
            </div> */}
            <div>Address : 50-14, Gajeong-ro 77beon-gil, Seo-gu, Incheon</div>
            <div>TEL : 032-681-8156</div>
            <div>FAX : 032-681-8157</div>
            <div>Emali : nnayomi@naver.com</div>
          </div>
        </div>
        <div className="footerBottom">
          Copyright ⓒ 2020 KEYWORLD Co., Ltd, All Rights Reserved
        </div>
      </div>
    </div>
  );
};
export default FooterEng;
