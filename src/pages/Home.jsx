import React, { useState, useEffect } from "react";

import container from "../assets/img/container.jpeg";
import product1 from "../assets/img/kiosk.jpg";
import train from "../assets/img/train.jpeg";
import auto from "../assets/img/auto.jpg";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);
  return (
    <>
      <div className="color-background pt-70">
        <div className="home-img center">
          <div className="home-text  color-blue">Quality & Trust</div>
          <div className="home-sub-text  color-white">
            <span className="color-orange">키월드</span>의 도전은 계속됩니다
          </div>
        </div>
        <div className="home-product-container m-0">
          <div className="home-products-title color-orange cap f-40 ">
            our products
          </div>
          <div className="home-products-subtitle  f-20">
            다양한 산업에서 키월드의 제품을 만나보세요
          </div>
          <div className="home-products-list flex">
            <div className="home-product">
              <a href={`/product/circularlock`} className={"color-white"}>
                <img src={container} alt={container} />
                <div className="home-product-text ">
                  <div className="home-product-text-sub">보관함</div>
                  밀폐성 및 단열성을 최우선으로 하는 판넬도어에 견고한 부속품을
                  공급하여 강력한 밀페능력의 제품에 완성도를 높이고 있습니다.
                </div>
              </a>
            </div>
            <div className="home-product">
              <a href={`/product/circularlock`} className={"color-white"}>
                <img src={auto} alt={auto} />
                <div className="home-product-text ">
                  <div className="home-product-text-sub">자동화 기기</div>
                  밀폐성 및 단열성을 최우선으로 하는 판넬도어에 견고한 부속품을
                  공급하여 강력한 밀페능력의 제품에 완성도를 높이고 있습니다.
                </div>
              </a>
            </div>
            <div className="home-product">
              <a href={`/product/circularlock`} className={"color-white"}>
                <img src={train} alt={train} />
                <div className="home-product-text ">
                  <div className="home-product-text-sub">기차 / 운송</div>
                  밀폐성 및 단열성을 최우선으로 하는 판넬도어에 견고한 부속품을
                  공급하여 강력한 밀페능력의 제품에 완성도를 높이고 있습니다.
                </div>
              </a>
            </div>
            <div className="home-product">
              <a href={`/product/circularlock`} className={"color-white"}>
                <img src={product1} alt={product1} />
                <div className="home-product-text ">
                  <div className="home-product-text-sub">키오스크</div>
                  밀폐성 및 단열성을 최우선으로 하는 판넬도어에 견고한 부속품을
                  공급하여 강력한 밀페능력의 제품에 완성도를 높이고 있습니다.
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="home-bottom-img flex">
          <div className="home-bottom flex">
            <div className="home-bottom-text m-0 color-white">
              고객 만족도를 최선으로 하며 <br />
              <br />
              끊임 없는 도전과 발전으로 고객님들 곁에 머무르겠습니다.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
