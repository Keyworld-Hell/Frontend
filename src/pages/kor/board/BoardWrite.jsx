import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";
import Pagination from "../../../components/Pagination";

const BoardWrite = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [isError, setIsError] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(generateCaptcha());
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleCaptchaChange = (e) => {
    setCaptcha(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 필수 항목 누락 확인
    if (!title || !name || !content) {
        setIsError(true);
        window.alert("필수 항목을 모두 입력해주세요")
      return;
    }

    // CAPTCHA 검증
    if (captcha !== captchaValue) {
      window.alert("자동 등록 방지 기능을 통과해야 합니다.");
      return;
    }
    
    const confirmed = window.confirm("게시글을 등록하시겠습니까?");

    if (confirmed) {
      try {
        const response = await axios.post("/board/write", {
          title,
          name,
          content,
        });
        console.log(response.data);
        navigate("/board"); // 리디렉션
      } catch (error) {
        // POST 요청 실패 처리
        console.error(error);
      }
    }
  };

  // 랜덤한 문자열 생성 함수
  function generateCaptcha() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  return (
    <>
      <PageImage img={"board-img"} title="Board" />
      <PageTitle title={"게시판"} />
      <div className="container m-0">
        <div className="board-subtitle flex f-20 fw-700">
          자유롭게 게시글을 남겨주세요.
          <Link to={"/board"}>
            <button className="board-btn f-20 fw-700 color-white">목록</button>
          </Link>
        </div>
        <div className="board-container m-0">
          <form onSubmit={handleSubmit}>
            <div className="inquiry-input">
              <div className="inquiry-subtitle">-제목-</div>
              <input
                type="text"
                className="board-input"
                placeholder="제목"
                value={title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle">-이름-</div>
              <input
                type="text"
                className="board-input"
                placeholder="이름"
                value={name}
                onChange={handleNameChange}
              />
            </div>

            <div className="inquiry-input">
              <div className="inquiry-subtitle">-내용-</div>
              <textarea
                className="inquiry-content"
                placeholder="내용"
                value={content}
                onChange={handleContentChange}
              ></textarea>
            </div>

            <div className="inquiry-input">
              <div className="inquiry-subtitle">-자동 등록 방지-</div>
              <div className="captcha">{captchaValue}</div>
              <input
                type="text"
                className="board-input"
                placeholder="위에 보이는 문자를 입력하세요"
                value={captcha}
                onChange={handleCaptchaChange}
              />
            </div>



            <div className="center">
              <button className="inquiry-btn color-white" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BoardWrite;
