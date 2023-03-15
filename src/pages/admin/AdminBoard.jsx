import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminNav from "../../components/layout/AdminNav";
import { DUMMY_BOARD } from "../../store/nav";

const AdminBoard = () => {
  const [activeSubIndex, setActiveSubIndex] = useState(1);
  const [activeIndex, setActiveIndex] = useState(5);

  return (
    <div className="flex">
      <AdminNav
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        activeSubIndex={activeSubIndex}
        setActiveSubIndex={setActiveSubIndex}
      />
      <div className="admin-container admin-board container m-0">
        <div className="board-container m-0">
          <div className="board-header flex f-24 fw-600 center">
            <div className="admin-board-id ">ID</div>
            <div className="admin-board-name ">이름</div>
            <div className="admin-board-title">제목</div>
            <div className="admin-board-date ">날짜</div>
            <div className="admin-board-delete"></div>
          </div>
          {DUMMY_BOARD.map((item, index) => (
            <Link to={`${item.id}`} key={index} className="color-black">
              <div className="board-content f-18 flex center">
                <div className="admin-board-id ">{item.id}</div>
                <div className="admin-board-name ">{item.name}</div>
                <div className="admin-board-title">{item.title}</div>
                <div className="admin-board-date ">{item.created_date}</div>
                <div className="admin-board-delete">삭제</div>
              </div>
            </Link>
          ))}
          <div className="board-pagination center">pagination</div>
        </div>
      </div>
    </div>
  );
};

export default AdminBoard;
