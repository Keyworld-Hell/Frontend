import React, { useRef, useState } from "react";
import AdminNav from "../../components/layout/AdminNav";

const AdminNotice = () => {
  const fileRef = useRef();

  const [activeSubIndex, setActiveSubIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

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
          <button className="admin-upload-btn color-white">새 공지</button>
        </div>
        <div className="admin-notice-title flex f-24 fw-600 center">
          <div className="admin-notice-date">기간</div>
          <div className="admin-notice-content">내용</div>
          <div className="admin-notice-delete">삭제</div>
        </div>
        <div className="admin-notice-box center flex">
          <div className="admin-notice-date">2023.03.16</div>
          <div className="admin-notice-content">안녕하세요 키월드입니다..</div>
          <div className="admin-notice-delete">삭제</div>
        </div>
        <div className="admin-notice-box center flex">
          <div className="admin-notice-date">2023.03.16</div>
          <div className="admin-notice-content">안녕하세요 키월드입니다..</div>
          <div className="admin-notice-delete">삭제</div>
        </div>
        <div className="admin-notice-box center flex">
          <div className="admin-notice-date">2023.03.16</div>
          <div className="admin-notice-content">안녕하세요 키월드입니다..</div>
          <div className="admin-notice-delete">삭제</div>
        </div>
        <div className="admin-notice-box center flex">
          <div className="admin-notice-date">2023.03.16</div>
          <div className="admin-notice-content">안녕하세요 키월드입니다..</div>
          <div className="admin-notice-delete">삭제</div>
        </div>
      </div>
    </div>
  );
};

export default AdminNotice;
