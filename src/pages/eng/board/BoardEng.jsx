import React from "react";
import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";

import { Link } from "react-router-dom";

import { DUMMY_BOARD } from "../../../store/index";

const BoardEng = () => {
  return (
    <>
      <PageImage img={"board-img"} title="Board" />
      <PageTitle title={"게시판"} />
      <div className="container m-0">
        <div className="board-subtitle flex f-20 fw-700">
          이 곳은 자유롭게 소통이 가능한 게시판입니다.
          <button className="board-btn f-20 fw-700 color-white">글쓰기</button>
        </div>
        <div className="board-container m-0">
          <div className="board-header flex f-20 fw-700 center">
            <div className="board-id ">ID</div>
            <div className="board-name ">이름</div>
            <div className="board-title">제목</div>
            <div className="board-date ">날짜</div>
          </div>
          {DUMMY_BOARD.map((item, index) => (
            <Link to={`${item.id}`} key={index} className="color-black">
              <div className="board-content f-18 flex center">
                <div className="board-id ">{item.id}</div>
                <div className="board-name ">{item.name}</div>
                <div className="board-title center">{item.title}</div>
                <div className="board-date right ">{item.created_date}</div>
              </div>
            </Link>
          ))}
          <div className="board-pagination center">pagination</div>
        </div>
      </div>
    </>
  );
};

export default BoardEng;
