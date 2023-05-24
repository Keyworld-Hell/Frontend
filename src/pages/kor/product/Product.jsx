import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";

import img from "../../../assets/img/key.png";

import { PRODUCT_LIST } from "../../../store";
import Pagination from "../../../components/Pagination";
import { PRODUCT_NAV_LIST } from "../../../store/nav";

const Product = () => {
  const params = useParams();
  const [PRODUCT_KEY, setPRODUCT_KEY] = useState([]);
  const [pageNumber, setPageNumber] = useState(7);
  const [cur, setCur] = useState(1);

  const { lock } = useParams();
  const curLock = PRODUCT_NAV_LIST.filter((item) => item.engName === lock)[0]
    .number;

  const pageList = [];

  if (pageList.length === 0) {
    for (let i = 1; i <= pageNumber; i++) {
      pageList.push(i);
    }
  }

  useEffect(() => {
    axios
      .get(`/0/products/${curLock}`)
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
        <nav className="product-nav color-white f-18 fw-500">
          <ul>
            <li className="product-nav-title flex ">PRODUCT-LIST</li>
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
          {PRODUCT_KEY.map((item, index) => (
            <Link
              to={`/product/${params.lock}/${item.id}`}
              className="color-black"
            >
              <div className="product-box flex">
                <img className="product-content-img" src={item.img} alt={img} />
                <div className="product-sub">
                  <div className="product-title flex f-20 fw-600 color-white flex">
                    {item.title}
                  </div>
                  <div className="product-content flex">
                    <div className="product-feat flex">
                      <b>주요 재질</b> {item.texture}
                    </div>
                    <div className="product-feat flex">
                      <b>표면 처리</b> {item.surface}
                    </div>
                    <div className="product-feat flex">
                      <b>
                        용&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;도
                      </b>
                      {item.use}
                    </div>
                    <div className="product-feat flex">
                      <b>
                        특&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;징
                      </b>
                      {item.feature}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {PRODUCT_KEY.length !== 0 && (
            <Pagination cur={cur} setCur={setCur} pageList={pageList} />
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
