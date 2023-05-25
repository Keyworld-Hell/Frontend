import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminNav from "../../components/layout/AdminNav";
import axios from "axios";
import client from "../../client";
import Pagination from "../../components/pagination/Pagination";


const AdminBoard = ({ isNavOpen }) => {
  const [activeSubIndex, setActiveSubIndex] = useState(1);
  const [activeIndex, setActiveIndex] = useState(5);
  const [boardList, setBoardList] = useState([]);
  const [pageNumber, setPageNumber] = useState(7);
  const [cur, setCur] = useState(1);

  const pageList = [];

  if (pageList.length === 0) {
    for (let i = 1; i <= pageNumber; i++) {
      pageList.push(i);
    }
  }

  const fetchBoard = async () => {
    await axios.get(`/board`).then((res) => {
      setBoardList(res.data.content);
      setPageNumber(res.data.content.length);
    });
  };

  useEffect(() => {
    fetchBoard();
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
      <div className="admin-container admin-board container m-0">
        <div className="board-container m-0">
          <div className="board-header flex f-24 fw-600 center">
            <div className="admin-board-id ">ID</div>
            <div className="admin-board-name ">이름</div>
            <div className="admin-board-title">제목</div>
            <div className="admin-board-date ">날짜</div>
            <div className="admin-board-delete"></div>
          </div>
          {/*
          !FEAT: DUMMY_BOARD를 boardList로 수정
           */}
          {boardList.map((item, index) => (
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
          {boardList.length !== 0 && (
            <Pagination cur={cur} setCur={setCur} pageList={pageList} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminBoard;
