import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminNav from "../../components/layout/AdminNav";

import axios from "axios";

import Pagination from "../../components/pagination/Pagination";

const AdminInquiry = ({ isNavOpen }) => {
  const [activeSubIndex, setActiveSubIndex] = useState(1);
  const [activeIndex, setActiveIndex] = useState(4);
  const [inquiryList, setInquiryList] = useState([]);
  const [pageNumber, setPageNumber] = useState(7);
  const [cur, setCur] = useState(1);

  const pageList = [];

  if (pageList.length === 0) {
    for (let i = 1; i <= pageNumber; i++) {
      pageList.push(i);
    }
  }

  const fetchInquiry = async () => {
    await axios
      .get(`/inquiry`)
      .then((res) => {
        setInquiryList(res.data.content);
        setPageNumber(res.data.content.length / 12 + 1);
      })
      .catch((err) => console.log(err));
  };

  const deleteClick = (id, e) => {
    e.stopPropagation();
    if (window.confirm("삭제하시겠습니까?")) {
      axios
        .delete(`/adm/inquiry/delete/${id}`)
        .then((res) => {
          setInquiryList(inquiryList.filter((item) => item.id !== id));
          alert("삭제 완료!");
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    fetchInquiry();
  }, []);

  const subContent = (content) => {
    if (content.length > 15) {
      return content.substr(15) + "...";
    } else return content;
  };

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
        <div className="admin-notice-title flex f-24 fw-600 center">
          <div className="admin-inquiry-date">기간</div>
          <div className="admin-inquiry-name">상호명</div>
          <div className="admin-inquiry-content">내용</div>
          <div className="admin-inquiry-delete">삭제</div>
        </div>
        {inquiryList.map((item, index) => (
          <Link to={`${item.id}`} className="color-black" key={index}>
            <div className="admin-notice-box center flex">
              <div className="admin-inquiry-date">
                {item.createdAt.substr(0, 10)}
              </div>
              <div className="admin-inquiry-name">{item.name}</div>
              <div className="admin-inquiry-content">
                {subContent(item.content)}
              </div>
              <div
                className="admin-inquiry-delete"
                onClick={(e) => deleteClick(item.id, e)}
              >
                삭제
              </div>
            </div>
          </Link>
        ))}
        <div className="mg-t-50">
          {inquiryList.length !== 0 && (
            <Pagination cur={cur} setCur={setCur} pageList={pageList} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminInquiry;
