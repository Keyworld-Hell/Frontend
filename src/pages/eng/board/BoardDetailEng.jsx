import React from "react";
import { Link, useParams } from "react-router-dom";
import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";
import keymini from "../../../assets/img/keymini.png";

import { DUMMY_BOARD } from "../../../store/index";

const BoardDetailEng = () => {
  const params = useParams();

  const BOARD_DETAIL = DUMMY_BOARD.filter(
    (item) => item.id === Number(params.id)
  );

  return (
    <>
      <PageImage img={"board-img"} title="Board" />
      <PageTitle title={"Board"} />
      <div className="container m-0">
        <div className="board-subtitle flex f-20 fw-700">
          This is a bulletin board where free communication is possible.
          <div>
            <button className="board-btn f-20 fw-700 color-white">
              Update
            </button>
            <button className="board-delete-btn f-20 fw-700 color-white">
              Delete
            </button>
          </div>
        </div>
        <div className="board-container m-0">
          <div className="board-header flex f-20 fw-700 center">
            <div className="board-id  color-blue ">ID</div>
            <div className="board-name color-blue  ">Name</div>
            <div className="board-title color-blue ">Title</div>
            <div className="board-date  color-blue ">Date</div>
          </div>
          {BOARD_DETAIL.map((item, index) => (
            <>
              <div className="board-content f-18 flex center">
                <div className="board-id ">{item.id}</div>
                <div className="board-name ">{item.name}</div>
                <div className="board-title fw-500">{item.title}</div>
                <div className="board-date ">{item.created_date}</div>
              </div>
              <div className="board-detail-title flex f-20 fw-700">내용</div>
              <div className="board-detail-content">{item.content}</div>
            </>
          ))}
          <div className="board-comment-title flex f-20 fw-700 color-blue">
            Comment
          </div>
          <div className="board-comment">
            <div className="board-comment-subtitle flex fw-700 f-18">
              <img src={keymini} className="keymini" />
              KEYWORLD
              <div className="board-comment-date">2023.03.16</div>
            </div>
            <div className="board-comment-content f-16">연락 드렸습니다.</div>
          </div>
          <div className="board-comment-upload">
            <input
              className="board-comment-upload-name f-18"
              placeholder="Name"
            />
            <br />
            <textarea
              className="board-comment-upload-content f-18"
              placeholder="Contents"
            />
            <button className="board-comment-btn flex color-white f-20 center">
              Update
            </button>
          </div>
          <button className="board-list-btn flex color-white fw-700 f-20">
            <a href={`/board`} className="color-white">
              Menu
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default BoardDetailEng;
