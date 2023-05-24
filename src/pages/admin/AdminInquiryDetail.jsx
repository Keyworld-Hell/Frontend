import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminNav from "../../components/layout/AdminNav";

import axios from "axios";
import client from "../../client";

const AdminInquiryDetail = ({ isNavOpen }) => {
  const params = useParams();

  const [inquiryDetail, setInquiryDetal] = useState({});

  const fetchInquiry = async () => {
    try {
      const response = await axios.get(`/inquiry/${params.id}`);
      setInquiryDetal(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInquiry();
  }, []);

  const [activeSubIndex, setActiveSubIndex] = useState(1);
  const [activeIndex, setActiveIndex] = useState(4);

  return (
    <>
      <div className="admin-wrap flex">
        <AdminNav
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          activeSubIndex={activeSubIndex}
          setActiveSubIndex={setActiveSubIndex}
          isNavOpen={isNavOpen}
        />
        <div className="admin-container container m-0">
          <div className="admin-title admin-no-title flex f-20 fw-600">
            <Link to={`/admin/inquiry`} className="color-white flex">
              <button className="admin-upload-btn  color-white">목록</button>
            </Link>
          </div>
          {/**
           * !TODO: inquiry를 inquiryDetail로 수정
           */}
          <div className="inquiry-container m-0">
            <div className="inquiry-input">
              <div className="inquiry-subtitle f-20 fw-700">상호명</div>
              <div className="f-20 admin-inquiry-text">
                {inquiryDetail.title}
              </div>
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle f-20 fw-700">담당자 이름</div>
              <div className="f-20 admin-inquiry-text">
                {inquiryDetail.name}
              </div>
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle f-20 fw-700">이메일</div>
              <div className="f-20 admin-inquiry-text">
                {inquiryDetail.email}
              </div>
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle f-20 fw-700">연락처</div>
              <div className="f-20 admin-inquiry-text">
                {inquiryDetail.phone}
              </div>
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle f-20 fw-700">문의 내용</div>
              <div className="inquiry-content f-20">
                {inquiryDetail.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminInquiryDetail;
