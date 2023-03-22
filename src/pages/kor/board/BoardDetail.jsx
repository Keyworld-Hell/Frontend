import React from "react";
import { Link, useParams } from "react-router-dom";
import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";
import keymini from "../../../assets/img/keymini.png";

import { DUMMY_BOARD } from "../../../store/index";

const BoardDetail = () => {
  const params = useParams();

  const BOARD_DETAIL = DUMMY_BOARD.filter(
    (item) => item.id === Number(params.id)
  );

  return (
    <>
      <PageImage img={"board-img"} title="Board" />
      <PageTitle title={"게시판"} />
      <div className="container m-0">
        <div className="board-subtitle flex f-24 fw-600">
          이 곳은 자유롭게 소통이 가능한 게시판입니다.
          <div>
            <button className="board-btn f-24 fw-600 color-white">수정</button>
            <button className="board-delete-btn f-24 fw-600 color-white">
              삭제
            </button>
          </div>
        </div>
        <div className="board-container m-0">
          <div className="board-header flex f-24 fw-600 center">
            <div className="board-id  color-blue ">ID</div>
            <div className="board-name color-blue  ">이름</div>
            <div className="board-title color-blue ">제목</div>
            <div className="board-date  color-blue ">날짜</div>
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
          <div className="board-comment-title flex f-24 fw-600 color-blue">
            Comment
          </div>
          <div className="board-comment">
            <div className="board-comment-subtitle flex fw-700 f-18">
              <img src={keymini} className ="keymini"/>
              KEYWORLD
              <div className="board-comment-date">2023.03.16</div>
            </div>
            <div className="board-comment-content f-20 fw-600">
              연락 드렸습니다.
            </div>
          </div>
          <div className="board-comment-upload">
            <input
              className="board-comment-upload-name f-18"
              placeholder="이름"
            />
            <br />
            <textarea
              className="board-comment-upload-content f-18"
              placeholder="내용"
            />
            <button className="board-comment-btn flex color-white f-20 center">
              등록
            </button>
          </div>
          <button className="board-list-btn flex color-white fw-600 f-20">
            <a href={`/board`} className="color-white">
              목록
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default BoardDetail;
