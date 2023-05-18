import React from "react";
import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";

const InquiryEng = () => {
  return (
    <>
      <PageImage img={"inquiry-img"} title="Inquiry" />

      <PageTitle title={"Inquiry"} />
      <div className="container m-0">
        <div className="inquiry-text ">
          We will be a Keyword that listens to the voice of our customers.{" "}
          <br />
          If you leave your inquiry, we will respond as soon as possible.
        </div>
        <form action="" className="inquiry-form">
          <div className="inquiry-container m-0">
            <div className="inquiry-privacy">
              <div className="inquiry-subtitle  ">Privacy Policy</div>
              <textarea readOnly>hi</textarea>
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle  ">-Company Name-</div>
              <input />
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle  ">
                -Name of the person in charge-
              </div>
              <input />
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle  ">-Email-</div>
              <input type="email" />
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle  ">-Tel-</div>
              <input />
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle  ">-Inquiry details-</div>
              <textarea className="inquiry-content " />
            </div>
            <div className="inquiry-check f-18 ">
              <input type="checkbox" id="check" />I agree to the privacy policy.
            </div>
          </div>
          <div className="container center">
            <button className="inquiry-btn  color-white">SUBMIT</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default InquiryEng;
