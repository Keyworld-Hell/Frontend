import React from "react";

import product1 from "../assets/img/kiosk.jpg";

const Home = () => {
  return (
    <>
      <div className="home-img center">
        <div className="home-text fw-600 color-blue">Quality & Trust</div>
        <div className="home-sub-text fw-600 color-white">
          <span className="color-orange">키월드</span>의 도전은 계속됩니다
        </div>
      </div>
      <div className="container m-0">
        <div className="home-products-title color-orange cap f-40 fw-600">
          our products
        </div>
        <div className="home-products-subtitle fw-600 f-20">
          다양한 산업에서 키월드의 제품을 만나보세요
        </div>
        <div className="home-products-list flex">
          <div className="home-product">
            <img src={product1} alt={product1} />
            <div className="home-product-text fw-600">
              보관함
              <br />
              About Detail
            </div>
          </div>
          <div className="home-product">
            <img src={product1} alt={product1} />
            <div className="home-product-text fw-600">
              자동화 기기
              <br />
              About Detail
            </div>
          </div>
          <div className="home-product">
            <img src={product1} alt={product1} />
            <div className="home-product-text fw-600">
              기차 / 운송
              <br />
              About Detail
            </div>
          </div>
          <div className="home-product">
            <img src={product1} alt={product1} />
            <div className="home-product-text fw-600">
              키오스크
              <br />
              About Detail
            </div>
          </div>
        </div>
      </div>
      <div className="home-bottom ">
        <div className="home-bottom-text m-0 color-white f-30 fw-600">
          고객 만족도를 최선으로 하며 <br />
          <br />
          끊임 없는 도전과 발전으로 고객님들 곁에 머무르겠습니다.
        </div>
      </div>
    </>
  );
};

export default Home;
