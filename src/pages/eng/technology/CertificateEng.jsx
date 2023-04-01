import React, { useState } from "react";
import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";

import img from "../../../assets/img/iso-9001.png";
import Modal from "../../../components/layout/Modal";

const CertificateEng = () => {
  const [isHover, setIsHover] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const hoverHandler = (isHover) => {
    setIsHover(isHover);
  };

  return (
    <>
      <PageImage img={"technology-img"} title="Technology" />
      <PageTitle title={"인증서"} />
      <div className="container m-0">
        <div className="tech-box flex">
          <div className="tech-img">
            <div className="tech-img-detail">
              <div
                className="tech-img-text flex color-white"
                onClick={() => setIsModal(true)}
              >
                상세보기
              </div>
              <img className="tech-imgs" src={img} alt={img} />
              {isModal && <Modal setIsModal={setIsModal} img={img} />}
            </div>
            <div className="tech-text ">ISO-9001</div>
          </div>
          <div className="tech-img">
            <div className="tech-img-detail">
              <div
                className="tech-img-text flex color-white"
                onClick={() => setIsModal(true)}
              >
                상세보기
              </div>
              <img className="tech-imgs" src={img} alt={img} />
              {isModal && <Modal setIsModal={setIsModal} img={img} />}
            </div>
            <div className="tech-text ">ISO-9001</div>
          </div>
          <div className="tech-img">
            <div className="tech-img-detail">
              <div
                className="tech-img-text flex color-white"
                onClick={() => setIsModal(true)}
              >
                상세보기
              </div>
              <img className="tech-imgs" src={img} alt={img} />
              {isModal && <Modal setIsModal={setIsModal} img={img} />}
            </div>
            <div className="tech-text ">ISO-9001</div>
          </div>
          <div className="tech-img">
            <div className="tech-img-detail">
              <div
                className="tech-img-text flex color-white"
                onClick={() => setIsModal(true)}
              >
                상세보기
              </div>
              <img className="tech-imgs" src={img} alt={img} />
              {isModal && <Modal setIsModal={setIsModal} img={img} />}
            </div>
            <div className="tech-text ">ISO-9001</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateEng;
