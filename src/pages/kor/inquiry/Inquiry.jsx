import React from "react";
import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";

const Inquiry = () => {
  return (
    <>
      <PageImage img={"inquiry-img"} title="Inquiry" />

      <PageTitle title={"고객문의"} />
      <div className="container m-0">
        <div className="inquiry-text ">
          고객의 소리에 귀를 기울이는 키월드가 되겠습니다. <br />
          문의 사항을 남겨주시면 빠른 시일 내에 답변 드리겠습니다.
        </div>
        <form action="" className="inquiry-form">
          <div className="inquiry-container m-0">
            <div className="inquiry-privacy">
              <div className="inquiry-subtitle  ">
                개인정보 처리 방침
              </div>
              <textarea readOnly>hi</textarea>
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle  ">-상호명-</div>
              <input />
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle  ">-담당자 이름-</div>
              <input />
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle  ">-이메일-</div>
              <input type="email" />
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle  ">-연락처-</div>
              <input />
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle  ">-문의 내용-</div>
              <textarea className="inquiry-content " />
            </div>
            <div className="inquiry-check f-18 ">
              <input type="checkbox" id="check" />
              개인 정보 처리 방침에 동의합니다.
            </div>
          </div>
          <div className="container center">
            <button className="inquiry-btn  color-white">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Inquiry;
