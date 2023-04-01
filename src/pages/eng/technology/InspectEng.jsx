import React from "react";
import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";

import img from "../../../assets/img/inspect.png";

const InspectEng = () => {
  return (
    <>
      <PageImage img={"technology-img"} title="Technology" />
      <PageTitle title={"검사설비"} />
      <div className="tech-box container m-0 flex">
        <div className="tech-img ">
          <img src={img} alt={img} className="tech-inspect" />
          <div className="tech-text f-24 fw-600">내전압 시험기</div>
        </div>
        <div className="tech-img ">
          <img src={img} alt={img} className="tech-inspect" />
          <div className="tech-text f-24 fw-600">내전압 시험기</div>
        </div>
        <div className="tech-img ">
          <img src={img} alt={img} className="tech-inspect" />
          <div className="tech-text f-24 fw-600">내전압 시험기</div>
        </div>
        <div className="tech-img ">
          <img src={img} alt={img} className="tech-inspect" />
          <div className="tech-text f-24 fw-600">내전압 시험기</div>
        </div>
        <div className="tech-img ">
          <img src={img} alt={img} className="tech-inspect" />
          <div className="tech-text f-24 fw-600">내전압 시험기</div>
        </div>
      </div>
    </>
  );
};

export default InspectEng;
