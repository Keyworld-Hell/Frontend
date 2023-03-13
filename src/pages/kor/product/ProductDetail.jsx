import React from "react";
import { Link } from "react-router-dom";
import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";

import img from "../../../assets/img/key.png";

import { PRODUCT_LIST } from "../../../store";

const ProductDetail = () => {
  return (
    <>
      <PageImage img={"product-img"} title="Product" />
      <PageTitle title={"제품소개"} />
      <div className="container m-0">
        <button className="board-list-btn flex f-24 fw-600 color-white">
          목록
        </button>
        <div className="product-detail-container flex">
          <div className="product-detail-thumb">
            <img src={img} alt={img} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
