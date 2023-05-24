import React, { useEffect, useState } from "react";
import AdminNav from "../../components/layout/AdminNav";
import "../../assets/css/adminProduct.css";
import key from "../../assets/img/key.png";

import { Link, useParams } from "react-router-dom";

import axios from "axios";
import client from "../../client";

const AdminProduct = ({ isNavOpen }) => {
  const params = useParams();

  const [activeSubIndex, setActiveSubIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(3);
  const [productList, setProductList] = useState([]);

  const fetchProduct = async () => {
    await client
      .get(`/0/products/${params.lock}`)
      .then((res) => {
        setProductList(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProduct();
  }, [params.lock]);

  return (
    <div className="admin-wrap flex">
      <AdminNav
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        activeSubIndex={activeSubIndex}
        setActiveSubIndex={setActiveSubIndex}
        isNavOpen={isNavOpen}
      />
      <div className="admin-product-container container m-0">
        <div className="admin-title admin-no-title flex f-20 fw-600">
          <div className="admin-search ">
            <input className="admin-search-input f-20" placeholder="검색" />
            <button className="admin-search-btn color-white">search</button>
          </div>
          <Link to={`/admin/product/upload`} className="color-white flex">
            <button className="admin-upload-btn  color-white">등록</button>
          </Link>
        </div>
        <div className="admin-product-list-container flex m-0">
          {productList.map((item) => (
            <Link>
              <div className="each-product flex">
                <div className="each-product-delete flex">
                  <button>Delete</button>
                </div>
                <div className="admin-product-img flex">
                  <img src={key} alt="key" />
                </div>
                <div className="admin-product-name flex">WD-901 {}</div>
              </div>
            </Link>
          ))}

          <div className="each-product flex">
            <div className="each-product-delete flex">
              <button>Delete</button>
            </div>
            <div className="admin-product-img flex">
              <img src={key} alt="key" />
            </div>
            <div className="admin-product-name flex">WD-901 {}</div>
          </div>
          <div className="each-product flex">
            <div className="each-product-delete flex">
              <button>Delete</button>
            </div>
            <div className="admin-product-img flex">
              <img src={key} alt="key" />
            </div>
            <div className="admin-product-name flex">WD-901 {}</div>
          </div>
          <div className="each-product flex">
            <div className="each-product-delete flex">
              <button>Delete</button>
            </div>
            <div className="admin-product-img flex">
              <img src={key} alt="key" />
            </div>
            <div className="admin-product-name flex">WD-901 {}</div>
          </div>
          <div className="each-product flex">
            <div className="each-product-delete flex">
              <button>Delete</button>
            </div>
            <div className="admin-product-img flex">
              <img src={key} alt="key" />
            </div>
            <div className="admin-product-name flex">WD-901 {}</div>
          </div>
          <div className="each-product flex">
            <div className="each-product-delete flex">
              <button>Delete</button>
            </div>
            <div className="admin-product-img flex">
              <img src={key} alt="key" />
            </div>
            <div className="admin-product-name flex">WD-901 {}</div>
          </div>

          <div className="each-product flex">
            <div className="each-product-delete flex">
              <button>Delete</button>
            </div>
            <div className="admin-product-img flex">
              <img src={key} alt="key" />
            </div>
            <div className="admin-product-name flex">WD-901 {}</div>
          </div>
          <div className="each-product flex">
            <div className="each-product-delete flex">
              <button>Delete</button>
            </div>
            <div className="admin-product-img flex">
              <img src={key} alt="key" />
            </div>
            <div className="admin-product-name flex">WD-901 {}</div>
          </div>
          <div className="each-product flex">
            <div className="each-product-delete flex">
              <button>Delete</button>
            </div>
            <div className="admin-product-img flex">
              <img src={key} alt="key" />
            </div>
            <div className="admin-product-name flex">WD-901 {}</div>
          </div>
          <div className="each-product flex">
            <div className="each-product-delete flex">
              <button>Delete</button>
            </div>
            <div className="admin-product-img flex">
              <img src={key} alt="key" />
            </div>
            <div className="admin-product-name flex">WD-901 {}</div>
          </div>
          <div className="each-product flex">
            <div className="each-product-delete flex">
              <button>Delete</button>
            </div>
            <div className="admin-product-img flex">
              <img src={key} alt="key" />
            </div>
            <div className="admin-product-name flex">WD-901 {}</div>
          </div>
          <div className="each-product flex">
            <div className="each-product-delete flex">
              <button>Delete</button>
            </div>
            <div className="admin-product-img flex">
              <img src={key} alt="key" />
            </div>
            <div className="admin-product-name flex">WD-901 {}</div>
          </div>
          <div className="each-product flex">
            <div className="each-product-delete flex">
              <button>Delete</button>
            </div>
            <div className="admin-product-img flex">
              <img src={key} alt="key" />
            </div>
            <div className="admin-product-name flex">WD-901 {}</div>
          </div>
          <div className="each-product flex">
            <div className="each-product-delete flex">
              <button>Delete</button>
            </div>
            <div className="admin-product-img flex">
              <img src={key} alt="key" />
            </div>
            <div className="admin-product-name flex">WD-901 {}</div>
          </div>

          <div className="each-product flex">
            <div className="each-product-delete flex">
              <button>Delete</button>
            </div>
            <div className="admin-product-img flex">
              <img src={key} alt="key" />
            </div>
            <div className="admin-product-name flex">WD-901 {}</div>
          </div>
          <div className="each-product flex">
            <div className="each-product-delete flex">
              <button>Delete</button>
            </div>
            <div className="admin-product-img flex">
              <img src={key} alt="key" />
            </div>
            <div className="admin-product-name flex">WD-901 {}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProduct;
