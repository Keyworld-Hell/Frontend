import React from "react";
import { Link, useParams } from "react-router-dom";
import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";

import img from "../../../assets/img/key.png";

import { PRODUCT_LIST } from "../../../store";

const Product = () => {
  const params = useParams();

  return (
    <>
      <PageImage img={"product-img"} title="Product" />
      <PageTitle title={"제품소개"} />
      <div className="container m-0 flex">
        <nav className="product-nav color-white f-18 fw-700">
          <ul>
            <li className="product-nav-title flex ">Product</li>
            {PRODUCT_LIST.map((item, index) => (
              <Link
                to={`/product/${item.engName}`}
                className="color-white"
                key={index}
              >
                <li className="cursor">
                  <div className="product-nav-id center flex">{item.id}</div>
                  <div className="product-nav-name center flex cap">
                    {item.eng} / {item.korName}
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        <div className="product-container">
          <div className="product-search ">
            <input className="f-20" placeholder="검색" />
            <button className="color-white f-20">search</button>
          </div>
          <Link to={`/product/${params.lock}/1`} className="color-black">
            <div className="product-box flex">
              <img className="product-content-img" src={img} alt={img} />
              <div>
                <div className="product-title f-20 fw-600 color-white flex">
                  WD-401
                </div>
                <div className="product-content flex">
                  <div className="product-feat">
                    <b>주요 재질 :</b> 아연 합금
                  </div>
                  <div className="product-feat">
                    <b>표면 처리 :</b> 크롬 도금
                  </div>
                  <div className="product-feat">
                    <b>
                      <span>용 도</span> :
                    </b>{" "}
                    통신 장비, 배전반, 제어반, 각종 케이스, 각종 산업 기기, 환경
                    설비
                  </div>
                  <div className="product-feat">
                    <b>
                      <span>특 징</span> :
                    </b>{" "}
                    내구성 우수
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <div className="product-box flex">
            <img className="product-content-img" src={img} alt={img} />
            <div>
              <div className="product-title f-20 fw-600 color-white flex">
                WD-401
              </div>
              <div className="product-content flex">
                <div className="product-feat">
                  <b>주요 재질 :</b> 아연 합금
                </div>
                <div className="product-feat">
                  <b>표면 처리 :</b> 크롬 도금
                </div>
                <div className="product-feat">
                  <b>
                    <span>용 도</span> :
                  </b>{" "}
                  통신 장비, 배전반, 제어반, 각종 케이스, 각종 산업 기기, 환경
                  설비
                </div>
                <div className="product-feat">
                  <b>
                    <span>특 징</span> :
                  </b>{" "}
                  내구성 우수
                </div>
              </div>
            </div>
          </div>
          <div className="product-box flex">
            <img className="product-content-img" src={img} alt={img} />
            <div>
              <div className="product-title f-20 fw-600 color-white flex">
                WD-401
              </div>
              <div className="product-content flex">
                <div className="product-feat">
                  <b>주요 재질 :</b> 아연 합금
                </div>
                <div className="product-feat">
                  <b>표면 처리 :</b> 크롬 도금
                </div>
                <div className="product-feat">
                  <b>
                    <span>용 도</span> :
                  </b>{" "}
                  통신 장비, 배전반, 제어반, 각종 케이스, 각종 산업 기기, 환경
                  설비
                </div>
                <div className="product-feat">
                  <b>
                    <span>특 징</span> :
                  </b>{" "}
                  내구성 우수
                </div>
              </div>
            </div>
          </div>
          <div className="product-box flex">
            <img className="product-content-img" src={img} alt={img} />
            <div>
              <div className="product-title f-20 fw-600 color-white flex">
                WD-401
              </div>
              <div className="product-content flex">
                <div className="product-feat">
                  <b>주요 재질 :</b> 아연 합금
                </div>
                <div className="product-feat">
                  <b>표면 처리 :</b> 크롬 도금
                </div>
                <div className="product-feat">
                  <b>
                    <span>용 도</span> :
                  </b>{" "}
                  통신 장비, 배전반, 제어반, 각종 케이스, 각종 산업 기기, 환경
                  설비
                </div>
                <div className="product-feat">
                  <b>
                    <span>특 징</span> :
                  </b>{" "}
                  내구성 우수
                </div>
              </div>
            </div>
          </div>
          <div className="product-box flex">
            <img className="product-content-img" src={img} alt={img} />
            <div>
              <div className="product-title f-20 fw-600 color-white flex">
                WD-401
              </div>
              <div className="product-content flex">
                <div className="product-feat">
                  <b>주요 재질 :</b> 아연 합금
                </div>
                <div className="product-feat">
                  <b>표면 처리 :</b> 크롬 도금
                </div>
                <div className="product-feat">
                  <b>
                    <span>용 도</span> :
                  </b>{" "}
                  통신 장비, 배전반, 제어반, 각종 케이스, 각종 산업 기기, 환경
                  설비
                </div>
                <div className="product-feat">
                  <b>
                    <span>특 징</span> :
                  </b>{" "}
                  내구성 우수
                </div>
              </div>
            </div>
          </div>
          <div className="product-pagination center">pagination</div>
        </div>
      </div>
    </>
  );
};

export default Product;
