import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminNav from "../../components/layout/AdminNav";
import { INQUIRY_LIST } from "../../store/nav";

const AdminInquiry = () => {
  const [activeSubIndex, setActiveSubIndex] = useState(1);
  const [activeIndex, setActiveIndex] = useState(4);

  const subContent = (content) => {
    if (content.length > 15) {
      return content.substr(15) + "...";
    } else return content;
  };

  return (
    <div className="flex">
      <AdminNav
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        activeSubIndex={activeSubIndex}
        setActiveSubIndex={setActiveSubIndex}
      />
      <div className="admin-container container m-0">
        <div className="admin-notice-title flex f-24 fw-600 center">
          <div className="admin-inquiry-date">기간</div>
          <div className="admin-inquiry-name">상호명</div>
          <div className="admin-inquiry-content">내용</div>
          <div className="admin-inquiry-delete">삭제</div>
        </div>
        {INQUIRY_LIST.map((item, index) => (
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
