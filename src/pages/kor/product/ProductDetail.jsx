import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";

import img from "../../../assets/img/key.png";
import drawing from "../../../assets/img/drawing.png";

import { PRODUCT_LIST } from "../../../store";

const ProductDetail = () => {
  const [isModal, setIsModal] = useState(false);

  const clickHandler = () => {
    setIsModal((isModal) => !isModal);
  };

  return (
    <>
      <PageImage img={"product-img"} title="Product" />
      <PageTitle title={"제품소개"} />
      <div className="product-detail-container m-0">
        <button className="board-list-btn flex f-24 fw-600 color-white">
          목록
        </button>
        <div className="product-detail-box flex">
          <div className="product-detail-left">
            <div className="product-detail-thumb">
              <img src={img} alt={img} />
            </div>
            <div
              className="product-detail-download cursor"
              onClick={clickHandler}
            >
              <div className="product-download-title flex color-white f-24 fw-700">
                도면 다운로드
              </div>
              {isModal && (
                <>
                  <div className="product-download-list flex fw-600 color-white f-20">
                    example.pdf
                  </div>
                  <div className="product-download-list flex fw-600 color-white f-20">
                    example.dwg
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="product-detail-content">
            <div className="product-detail-title flex color-white f-30 fw-600">
              WD-401
            </div>
            <div className="f-20">
              <div className="product-detail-feat ">
                <b>주요재질</b> 아연 크롬
              </div>
              <div className="product-detail-feat">
                <b>표면처리</b> 크롬 도금
              </div>
              <div className="product-detail-feat">
                <b>
                  <span>용 도</span>
                </b>
                통신장비
              </div>
              <div className="product-detail-feat">
                <b>
                  <span>특 징</span>
                </b>
                <div className="product-detail-feature">
                  내구성 우수내구성 우수내구성 우수내구성 우수내구성 우수내구성
                  우수내구성 우수내구성 우수내구성 우수내구성 우수내구성
                  우수내구성 우수내구성 우수내구성 우수
                </div>
              </div>
              <div className="product-detail-feat">
                <b>상세설명</b>
              </div>
              <div className="product-detail-detail">개쩖ㅋㅋ</div>
            </div>
          </div>
        </div>
        <div className="product-detail-drawing center">
          <img src={drawing} alt={drawing} />
        </div>
        <div className="product-detail-drawing center">
          <img src={drawing} alt={drawing} />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
