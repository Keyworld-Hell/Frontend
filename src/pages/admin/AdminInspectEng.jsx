import React, { useEffect, useState } from "react";
import AdminNav from "../../components/layout/AdminNav";

import img from "../../assets/img/inspect.png";
import { Link } from "react-router-dom";

import axios from "axios";
import Pagination from "../../components/pagination/Pagination";
import AdminCompanyBox from "../../components/admin/AdminCompanyBox";

const AdminInspectEng = ({ isNavOpen }) => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [activeSubIndex, setActiveSubIndex] = useState(1);
  const [companyList, setCompanyList] = useState([]);
  const [pageNumber, setPageNumber] = useState(7);
  const [cur, setCur] = useState(1);

  const pageList = [];

  if (pageList.length === 0) {
    for (let i = 1; i <= pageNumber; i++) {
      pageList.push(i);
    }
  }

  const fetchCertificate = async () => {
    await axios.get(`/1/company`).then((res) => {
      setCompanyList(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    fetchCertificate();
  }, []);

  return (
    <div className="admin-wrap flex">
      <AdminNav
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        activeSubIndex={activeSubIndex}
        setActiveSubIndex={setActiveSubIndex}
        isNavOpen={isNavOpen}
      />
      <div className="admin-container container m-0">
        <div className="admin-title admin-tech-search flex f-20 fw-600">
          <div className="admin-search ">
            <input className="admin-search-input f-20" placeholder="검색" />
            <button className="admin-search-btn color-white">search</button>
          </div>
          <Link to={`/admin/company/upload`} className="color-white flex">
            <button className="admin-upload-btn  color-white">등록</button>
          </Link>
        </div>
        <div className="admin-tech-container flex">
          <div className="admin-tech-contents flex">
            <div className="admin-tech-box">
              <div className="admin-tech-img">
                <img src={img} alt={img} />
              </div>
              <div className="admin-tech-name flex f-20 fw-700">유압프레스</div>
              <button className="admin-tech-btn color-white">X</button>
            </div>
          </div>
          {companyList.map((item) => (
            <AdminCompanyBox img={item.img} name={item.name} />
          ))}
        </div>
        {companyList.length === 0 && (
          <Pagination cur={cur} setCur={setCur} pageList={pageList} />
        )}
      </div>
    </div>
  );
};

export default AdminInspectEng;