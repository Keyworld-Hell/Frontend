import React, { useState, useEffect } from "react";

import container from "../assets/img/container.jpeg";
import product1 from "../assets/img/kiosk.jpg";
import train from "../assets/img/train.jpeg";
import auto from "../assets/img/auto.jpg";

const HomeEng = () => {
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
            <span className="color-orange">Keyworld</span> continues to embrace
            new challenges.
          </div>
        </div>
        <div className="home-product-container m-0">
          <div className="home-products-title color-orange cap f-40 ">
            our products
          </div>
          <div className="home-products-subtitle  f-20">
            Discover Keyworld's products across various industries.
          </div>
          <div className="home-products-list flex">
            <div className="home-product">
              <img src={container} alt={container} />
              <div className="home-product-text ">
                <div className="home-product-text-sub">보관함</div>
                We supply sturdy components to our panel doors, which prioritize
                air-tightness and insulation, to enhance the overall product
                integrity and strengthen its sealing capabilities.
              </div>
            </div>
            <div className="home-product">
              <img src={auto} alt={auto} />
              <div className="home-product-text ">
                <div className="home-product-text-sub">
                  Automation equipment
                </div>
                We are enhancing the integrity of our panel doors, which
                prioritize air-tightness and insulation, by supplying robust
                components that enable strong sealing capabilities.
              </div>
            </div>
            <div className="home-product">
              <img src={train} alt={train} />
              <div className="home-product-text ">
                <div className="home-product-text-sub">
                  Train /Transportation{" "}
                </div>
                We supply sturdy components to our panel doors, which prioritize
                air-tightness and insulation, to enhance the product's overall
                sealing ability and completeness.
              </div>
            </div>
            <div className="home-product">
              <img src={product1} alt={product1} />
              <div className="home-product-text ">
                <div className="home-product-text-sub">Kiosk</div>
                We are increasing the completeness of our panel doors, which
                prioritize air-tightness and insulation, by supplying sturdy
                components that reinforce the product's strong sealing
                capability.
              </div>
            </div>
          </div>
        </div>
        <div className="home-bottom-img flex">
          <div className="home-bottom flex">
            <div className="home-bottom-text m-0 color-white">
              We strive for the highest level of customer satisfaction <br />
              <br />
              and will
              continuously challenge ourselves to grow and remain by our
              customers' side.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeEng;
