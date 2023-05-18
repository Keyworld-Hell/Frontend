import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminNav from "../../components/layout/AdminNav";

import axios from "axios";

const SERVER_URL = "http://localhost:3000";

const AdminInquiry = ({ isNavOpen }) => {
  const [activeSubIndex, setActiveSubIndex] = useState(1);
  const [activeIndex, setActiveIndex] = useState(4);
  const [inquiryList, setInquiryList] = useState([]);

  const fetchInquiry = async () => {
    await axios
      .get(`${SERVER_URL}/inquiry`)
      .then((res) => setInquiryList(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchInquiry();
  }, [inquiryList]);

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
              <div className="admin-inquiry-date">{item.created_date}</div>
              <div className="admin-inquiry-name">{item.company}</div>
              <div className="admin-inquiry-content">
                {subContent(item.content)}
              </div>
              <div className="admin-inquiry-delete">삭제</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminInquiry;
