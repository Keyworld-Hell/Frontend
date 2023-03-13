import React from "react";
import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";

import { DUMMY_BOARD } from "../../../store/index";

const BoardDetail = () => {
  return (
    <>
      <PageImage img={"board-img"} title="Board" />
      <PageTitle title={"게시판"} />
      <div className="container m-0">
        <div className="board-subtitle f-24 fw-600">
          이 곳은 자유롭게 소통이 가능한 게시판입니다.
          <button className="board-btn f-24 fw-600 color-white">삭제</button>
          <button className="board-btn f-24 fw-600 color-white">수정</button>
        </div>
        <div className="board-container m-0">
          <div className="board-header flex f-24 fw-600 center">
            <div className="board-id ">ID</div>
            <div className="board-name ">이름</div>
            <div className="board-title">제목</div>
            <div className="board-date ">날짜</div>
          </div>
          {DUMMY_BOARD.map((item, index) => (
            <div className="board-content f-18 flex center" key={index}>
              <div className="board-id ">{item.id}</div>
              <div className="board-name ">{item.name}</div>
              <div className="board-title">{item.title}</div>
              <div className="board-date ">{item.created_date}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BoardDetail;
