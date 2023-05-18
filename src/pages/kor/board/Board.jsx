import React, { useState, useEffect } from "react";
import axios from "axios";
import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";
import { Link } from "react-router-dom";
import Pagination from "../../../components/Pagination";
import client from "../../../client";

const ITEMS_PER_PAGE = 10;

const Board = () => {
  const [boardData, setBoardData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    client
      .get("/board", {
        params: {
          _page: currentPage,
          _limit: ITEMS_PER_PAGE,
        },
      })
      .then((response) => {
        setBoardData(response.data);
        setTotalPages(
          Math.ceil(response.headers["x-total-count"] / ITEMS_PER_PAGE)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <PageImage img={"board-img"} title="Board" />
      <PageTitle title={"게시판"} />
      <div className="container m-0">
        <div className="board-subtitle flex f-20 fw-700">
          이 곳은 자유롭게 소통이 가능한 게시판입니다.
          <Link to={"/board/write"}>
            <button className="board-btn f-20 fw-700 color-white">
              글쓰기
            </button>
          </Link>
        </div>
        <div className="board-container m-0">
          <div className="board-header flex f-20 fw-700 center">
            <div className="board-id ">ID</div>
            <div className="board-name ">이름</div>
            <div className="board-title">제목</div>
            <div className="board-date ">날짜</div>
          </div>
          {boardData.map((item) => (
            <Link to={`${item.id}`} key={item.id} className="color-black">
              <div className="board-content f-18 flex center">
                <div className="board-id ">{item.id}</div>
                <div className="board-name ">{item.name}</div>
                <div className="board-title center">{item.title}</div>
                <div className="board-date right ">{item.created_date}</div>
              </div>
            </Link>
          ))}
          <div className="board-pagination center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
