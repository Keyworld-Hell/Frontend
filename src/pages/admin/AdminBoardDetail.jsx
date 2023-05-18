import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminNav from "../../components/layout/AdminNav";
import { DUMMY_BOARD } from "../../store/nav";

import axios from "axios";

const SERVER_URL = "http://localhost:3000";

const AdminBoardDetail = ({ isNavOpen }) => {
  const [activeSubIndex, setActiveSubIndex] = useState(1);
  const [activeIndex, setActiveIndex] = useState(5);
  const [boardDetail, setBoardDetail] = useState([]);
  const [commentList, setCommentList] = useState([]);

  const params = useParams();

  const fetchBoard = async () => {
    await axios.get(`${SERVER_URL}/board/${params.id}`).then((res) => {
      setBoardDetail(res.data);
    });
  };

  //!TODO: 댓글 조회를 어떻게 하는지 모르겠음
  const fetchComment = async () => {
    await axios.get(`${SERVER_URL}/board`).then((res) => {
      setBoardDetail(res.data);
    });
  };

  useEffect(() => {
    fetchBoard();
  }, [boardDetail]);

  const BOARD_DETAIL = DUMMY_BOARD.filter(
    (item) => item.id === Number(params.id)
  );

  return (
    <div className="flex">
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
            !TODO: BOARD_DETAIL을 boardDetail로 수정
          */}
          {BOARD_DETAIL.map((item, index) => (
            <>
              <div className="board-content f-18 flex center">
                <div className="admin-board-id ">{item.id}</div>
                <div className="admin-board-name ">{item.name}</div>
                <div className="admin-board-title">{item.title}</div>
                <div className="admin-board-date ">{item.created_date}</div>
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
              키월드{" "}
              <div className="board-comment-date">
                2023.03.16{" "}
                <button className="admin-board-delete-btn">삭제</button>
              </div>
            </div>
            <div className="board-comment-content f-20 fw-600">
              연락 드렸습니다.
            </div>
          </div>
          <div className="board-comment-upload">
            <input
              className="board-comment-upload-name f-18"
              placeholder="이름"
              value={"키월드"}
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
          <Link to={`/admin/board`}>
            <button className="board-list-btn flex color-white fw-600 f-20">
              목록
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminBoardDetail;
