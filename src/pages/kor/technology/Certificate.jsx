import React from "react";
import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";

import img from "../../../assets/img/iso-9001.png";

const Certificate = () => {
  return (
    <>
      <PageImage img={"technology-img"} title="Technology" />
      <PageTitle title={"인증서"} />
      <div className="tech-box container m-0 flex">
        <div className="tech-img">
          <img src={img} alt={img} />
          <div className="tech-text f-20 fw-600">ISO-9001</div>
        </div>
        <div className="tech-img">
          <img src={img} alt={img} />
          <div className="tech-text f-20 fw-600">ISO-9001</div>
        </div>
        <div className="tech-img">
          <img src={img} alt={img} />
          <div className="tech-text f-20 fw-600">ISO-9001</div>
        </div>
        <div className="tech-img">
          <img src={img} alt={img} />
          <div className="tech-text f-20 fw-600">ISO-9001</div>
        </div>
        <div className="tech-img">
          <img src={img} alt={img} />
          <div className="tech-text f-20 fw-600">ISO-9001</div>
        </div>
        <div className="tech-img">
          <img src={img} alt={img} />
          <div className="tech-text f-20 fw-600">ISO-9001</div>
        </div>
        <div className="tech-img">
          <img src={img} alt={img} />
          <div className="tech-text f-20 fw-600">ISO-9001</div>
        </div>
        <div className="tech-img">
          <img src={img} alt={img} />
          <div className="tech-text f-20 fw-600">ISO-9001</div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
