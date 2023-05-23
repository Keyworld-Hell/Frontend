import React, { useEffect, useState } from "react";
import AdminNav from "../../components/layout/AdminNav";

import axios from "axios";
import { Link } from "react-router-dom";

const AdminNotice = ({ isNavOpen }) => {
  const [activeSubIndex, setActiveSubIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const [noticeList, setNoticeList] = useState([]);

  const fetchNotice = async () => {
    await axios
      .get(`/adm/notice`)
      .then((res) => {
        setNoticeList(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteClick = (id) => {
    axios
      .delete(`/adm/notice/delete/${id}`)
      .then((res) => {
        setNoticeList(noticeList.filter((item) => item.id !== id));
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchNotice();
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
        <div className="admin-title admin-no-title flex f-20 fw-600">
          <Link to={`register`}>
            <button className="admin-upload-btn color-white">새 공지</button>
          </Link>
        </div>
        <div className="admin-notice-title flex f-24 fw-600 center">
          <div className="admin-notice-date">기간</div>
          <div className="admin-notice-content">내용</div>
          <div className="admin-notice-delete">삭제</div>
        </div>
        {noticeList.map((item) => (
          <div className="admin-notice-box center flex" key={item.id}>
            <div className="admin-notice-date">
              {item.createdAt.substr(0, 10)}
            </div>
            <div className="admin-notice-content">{item.content}</div>
            <div
              className="admin-notice-delete"
              onClick={() => {
                deleteClick(item.id);
              }}
            >
              삭제
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminNotice;
