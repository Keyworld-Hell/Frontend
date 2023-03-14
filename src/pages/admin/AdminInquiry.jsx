import React, { useRef, useState } from "react";
import AdminNav from "../../components/layout/AdminNav";

const AdminInquiry = () => {
  const fileRef = useRef();
  const [fileName, setFileName] = useState("");
  const [fileImg, setFileImg] = useState();
  const [activeSubIndex, setActiveSubIndex] = useState(1);
  const [activeIndex, setActiveIndex] = useState(4);

  const previewImg = () => {
    const file = fileRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFileImg(reader.result);
    };
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
        <div className="admin-notice-box center flex">
          <div className="admin-inquiry-date">2023.03.16</div>
          <div className="admin-inquiry-name">현진 하드웨어</div>
          <div className="admin-inquiry-content">
            여름휴가 안녕하세요 키월드
          </div>
          <div className="admin-inquiry-delete">삭제</div>
        </div>
        <div className="admin-notice-box center flex">
          <div className="admin-inquiry-date">2023.03.16</div>
          <div className="admin-inquiry-name">현진 하드웨어</div>
          <div className="admin-inquiry-content">
            여름휴가 안녕하세요 키월드
          </div>
          <div className="admin-inquiry-delete">삭제</div>
        </div>
        <div className="admin-notice-box center flex">
          <div className="admin-inquiry-date">2023.03.16</div>
          <div className="admin-inquiry-name">현진 하드웨어</div>
          <div className="admin-inquiry-content">
            여름휴가 안녕하세요 키월드
          </div>
          <div className="admin-inquiry-delete">삭제</div>
        </div>
        <div className="admin-notice-box center flex">
          <div className="admin-inquiry-date">2023.03.16</div>
          <div className="admin-inquiry-name">현진 하드웨어</div>
          <div className="admin-inquiry-content">
            여름휴가 안녕하세요 키월드
          </div>
          <div className="admin-inquiry-delete">삭제</div>
        </div>
      </div>
    </div>
  );
};

export default AdminInquiry;
