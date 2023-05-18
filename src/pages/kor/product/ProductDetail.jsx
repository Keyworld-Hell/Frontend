import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";
import { useEffect } from "react";
import axios from "axios";
import img from "../../../assets/img/key.png";
import test from "../../../assets/img/iso-9001.png";
import drawing from "../../../assets/img/drawing.png";
import client from "../../../client";



const ProductDetail = () => {
  const [isModal, setIsModal] = useState(false);
  const [isArrow, setIsarrow] = useState();
  const [PRODUCT_KEY, setPRODUCT_KEY] = useState([]);
  const clickHandler = () => {
    setIsModal((isModal) => !isModal);
    setIsarrow((isArrow) => !isArrow);
  };
  useEffect(() => {
    client
      .get("/product/1")
      .then((response) => {
        setPRODUCT_KEY(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <PageImage img={"product-img"} title="Product" />
      <PageTitle title={"제품소개"} />
      <div className="container-only-product m-0 flex">
        <div className="product-detail-container m-0">
          <button className="product-list-btn flex f-20 fw-700  color-white">
            목록
          </button>
          <div className="product-detail-box flex">
            <div className="product-detail-left">
              <div className="product-detail-title-mobile flex color-white f-20 fw-700 ">
                WD-401{""}
              </div>
              <div className="product-detail-thumb">
                <img src={img} alt={img} />
              </div>
              <div
                className="product-detail-download cursor"
                onClick={clickHandler}
              >
                <div className="product-download-title flex color-white f-20 fw-700  ">
                  {isArrow ? "▼" : "▶︎"} DownLoad
                </div>
                {isModal && (
                  <>
                    <div className="product-download-list flex  color-white  f-20 fw-700">
                      example.pdf{""}
                    </div>
                    <div className="product-download-list flex  color-white f-20 fw-700">
                      example.dwg{""}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="product-detail-sub ">
              <div className="product-detail-title flex color-white f-20 fw-700 ">
                WD-401
              </div>
              <div className="product-detail-content flex  f-18">
                <div className="product-detail-feat ">
                  <b>주요 재질</b> 아연 크롬{" "}
                </div>
                <div className="product-detail-feat f-18 ">
                  <b>표면 처리</b> 크롬 도금{" "}
                </div>
                <div className="product-detail-feat ">
                  <b>용&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;도</b>{" "}
                  통신장비, 배전반, 제어반, 각종케이스, 각종 산업기기, 환경
                  실험기기{" "}
                </div>
                <div className="product-detail-feat f-18">
                  <b>특&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;징</b>
                  동일키, 개별키 / 보안성 높음, 12시와 6시에서 모두 열쇠 분리
                  가능, 회전각 360도{" "}
                </div>
                <div className="product-detail-feat f-18">
                  <b>상세설명</b>
                </div>
                <div className="product-detail-detail f-18">개쩖ㅋㅋ</div>
              </div>
            </div>
          </div>
          <div className="product-detail-drawing flex">
            {/* {PRODUCT_KEY.map((item) => (
              <img src={img}/>
          ))} */}
            <img src={test} />
            <img src={drawing} alt={drawing} />
            <img src={drawing} alt={drawing} />
            <img src={drawing} alt={drawing} />
            <img src={drawing} alt={drawing} />
            <img src={drawing} alt={drawing} />
            <img src={drawing} alt={drawing} />
            <img src={drawing} alt={drawing} />
            <img src={test} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
