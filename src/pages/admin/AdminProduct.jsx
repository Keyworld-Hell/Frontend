import React, { useEffect, useRef, useState } from "react";
import AdminNav from "../../components/layout/AdminNav";

import { Link, useParams } from "react-router-dom";

import axios from "axios";

const SERVER_URL = "http://localhost:3000";

const AdminProduct = () => {
  const params = useParams();

  const [activeSubIndex, setActiveSubIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(3);
  const [productList, setProductList] = useState([]);

  const fetchProduct = async () => {
    await axios
      .get(`${SERVER_URL}/0/products/${params.lock}`)
      .then((res) => setProductList(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProduct();
  }, [productList]);

  return (
    <div className="flex">
      <AdminNav
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        activeSubIndex={activeSubIndex}
        setActiveSubIndex={setActiveSubIndex}
      />
      <div className="admin-container container m-0">
        <div className="admin-title admin-no-title flex f-20 fw-600">
          <div className="admin-search ">
            <input className="admin-search-input f-20" placeholder="검색" />
            <button className="admin-search-btn color-white">search</button>
          </div>
          <Link to={`/admin/certificate/upload`} className="color-white flex">
            <button className="admin-upload-btn  color-white">등록</button>
          </Link>
        </div>
        <div className="admin-product-container m-0">hi</div>
      </div>
    </div>
  );
};

export default AdminProduct;
