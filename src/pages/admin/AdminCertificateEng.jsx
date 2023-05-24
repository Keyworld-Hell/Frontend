import React, { useEffect, useState } from "react";
import AdminNav from "../../components/layout/AdminNav";

import img from "../../assets/img/inspect.png";
import { Link } from "react-router-dom";

import axios from "axios";
import client from "../../client";
import Pagination from "../../components/pagination/Pagination";
import AdminCompanyBox from "../../components/admin/AdminCompanyBox";

const AdminCertificateEng = ({ isNavOpen }) => {
  const [activeSubIndex, setActiveSubIndex] = useState(1);
  const [activeIndex, setActiveIndex] = useState(1);
  const [certificationList, setCertificationList] = useState([]);
  const [pageNumber, setPageNumber] = useState(7);
  const [cur, setCur] = useState(1);

  const pageList = [];

  if (pageList.length === 0) {
    for (let i = 1; i <= pageNumber; i++) {
      pageList.push(i);
    }
  }

  const fetchCertificate = async () => {
    await client.get(`/1/certification`).then((res) => {
      setCertificationList(res.data);
      setPageNumber(res.data.length / 12 + 1);
    });
  };

  const deleteClick = (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      axios
        .delete(`/adm/certification/delete/${id}`)
        .then((res) => {
          setCertificationList(
            certificationList.filter((item) => item.id !== id)
          );
          alert("삭제 완료!");
        })
        .catch((err) => console.log(err));
    }
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
            <input className="admin-search-input f-20" placeholder="Keyword" />
            <button className="admin-search-btn color-white">search</button>
          </div>
          <Link
            to={`/admin/certification/upload/eng`}
            className="color-white flex"
          >
            <button className="admin-upload-btn  color-white">Upload</button>
          </Link>
        </div>
        <div className="admin-tech-container flex">
          {certificationList.map((item) => (
            <AdminCompanyBox
              id={item.id}
              img={item.img}
              title={item.title}
              deleteClick={deleteClick}
            />
          ))}
        </div>
        {certificationList.length !== 0 && (
          <Pagination cur={cur} setCur={setCur} pageList={pageList} />
        )}
      </div>
    </div>
  );
};

export default AdminCertificateEng;
