import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminNav from "../../components/layout/AdminNav";
import { INQUIRY_LIST } from "../../store/nav";

const AdminInquiryDetail = () => {
  const params = useParams();
  const inquiry = INQUIRY_LIST.filter(
    (item) => item.id === Number(params.id)
  )[0];

  const [activeSubIndex, setActiveSubIndex] = useState(1);
  const [activeIndex, setActiveIndex] = useState(4);

  return (
    <>
      <div className="flex">
        <AdminNav
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          activeSubIndex={activeSubIndex}
          setActiveSubIndex={setActiveSubIndex}
        />
        <div className="admin-container container m-0">
          <div className="admin-title admin-no-title flex f-20 fw-600">
            <Link to={`/admin/inquiry`} className="color-white flex">
              <button className="admin-upload-btn  color-white">목록</button>
            </Link>
          </div>
          <div className="inquiry-container m-0">
            <div className="inquiry-input">
              <div className="inquiry-subtitle f-20 fw-700">상호명</div>
              <div className="f-20 admin-inquiry-text">{inquiry.company}</div>
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle f-20 fw-700">담당자 이름</div>
              <div className="f-20 admin-inquiry-text">{inquiry.name}</div>
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle f-20 fw-700">이메일</div>
              <div className="f-20 admin-inquiry-text">{inquiry.email}</div>
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle f-20 fw-700">연락처</div>
              <div className="f-20 admin-inquiry-text">{inquiry.phone}</div>
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle f-20 fw-700">문의 내용</div>
              <div className="inquiry-content f-20">{inquiry.content}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminInquiryDetail;