import React, { useState } from "react";
import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";

import img from "../../../assets/img/iso-9001.png";
import Modal from "../../../components/layout/Modal";

const Certificate = () => {
  const [isHover, setIsHover] = useState(false);
  const [isModal, setIsModal] = useState(true);

  const hoverHandler = (isHover) => {
    setIsHover(isHover);
  };

  return (
    <>
      <PageImage img={"technology-img"} title="Technology" />
      <PageTitle title={"인증서"} />
      <div className="tech-box container m-0 flex">
        <div className="tech-img">
          <div className="tech-img-detail">
            <div
              className="tech-img-text flex f-30 color-white"
              onClick={() => setIsModal(true)}
            >
              상세보기
            </div>
            <img className="tech-imgs" src={img} alt={img} />
            {isModal && <Modal setIsModal={setIsModal} img={img} />}
          </div>
          <div className="tech-text f-24 fw-600">ISO-9001</div>
        </div>
        <div className="tech-img">
          <div className="tech-img-detail">
            <div
              className="tech-img-text flex f-30 color-white"
              onClick={() => setIsModal(true)}
            >
              상세보기
            </div>
            <img className="tech-imgs" src={img} alt={img} />
            {isModal && <Modal setIsModal={setIsModal} img={img} />}
          </div>
          <div className="tech-text f-24 fw-600">ISO-9001</div>
        </div>
        <div className="tech-img">
          <div className="tech-img-detail">
            <div
              className="tech-img-text flex f-30 color-white"
              onClick={() => setIsModal(true)}
            >
              상세보기
            </div>
            <img className="tech-imgs" src={img} alt={img} />
            {isModal && <Modal setIsModal={setIsModal} img={img} />}
          </div>
          <div className="tech-text f-24 fw-600">ISO-9001</div>
        </div>
        <div className="tech-img">
          <div className="tech-img-detail">
            <div
              className="tech-img-text flex f-30 color-white"
              onClick={() => setIsModal(true)}
            >
              상세보기
            </div>
            <img className="tech-imgs" src={img} alt={img} />
            {isModal && <Modal setIsModal={setIsModal} img={img} />}
          </div>
          <div className="tech-text f-24 fw-600">ISO-9001</div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
