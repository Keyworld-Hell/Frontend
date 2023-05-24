import React, { useRef, useState } from "react";
import AdminNav from "../../components/layout/AdminNav";

import axios from "axios";
import client from "../../client";

const AdminUpload = ({ isNavOpen }) => {
  const fileRef = useRef();
  const dateRef = useRef();
  const contentRef = useRef();

  const [fileName, setFileName] = useState("");
  const [fileImg, setFileImg] = useState();
  const [activeSubIndex, setActiveSubIndex] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  const previewImg = () => {
    const file = fileRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFileImg(reader.result);
    };
  };

  const postNoticeHandler = () => {
    if (
      !dateRef.current.value ||
      !fileRef.current.files[0] ||
      !contentRef.current.value
    ) {
      alert("빈칸을 채워주세요.");
      return;
    }

    const formdata = new FormData();
    // formdata.append("file", fileRef.current.files[0]);
    formdata.append("title", "Title!");
    formdata.append("content", contentRef.current.value);
    formdata.append("year", dateRef.current.value.substr(0, 4));
    formdata.append("month", dateRef.current.value.substr(5, 2));
    formdata.append("day", dateRef.current.value.substr(8, 2));

    axios
      .post(`/adm/notice/new`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => alert("등록 완료!"))
      .catch((err) => console.log(err));
  };

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
        <div className="admin-title flex f-20 fw-600">
          IMAGE
          <button
            className="admin-upload-btn color-white"
            onClick={postNoticeHandler}
          >
            등록
          </button>
        </div>
        <div className="admin-upload-img">
          {fileImg && <img src={fileImg} alt={fileImg} />}
        </div>
        <span className="f-20 fw-600">첨부</span>
        <div className="admin-upload-file">
          <input
            type="file"
            id="file"
            ref={fileRef}
            onChange={() => {
              setFileName(fileRef.current.files[0].name);
              console.log(fileRef.current.files[0]);
              previewImg();
            }}
          />
          <div className="admin-upload-file-box">
            {fileName}
            <label htmlFor="file" className="admin-upload-label color-white">
              첨부파일
            </label>
          </div>
        </div>
        <span className="f-20 fw-600">공지 기간 설정</span>
        <div className="admin-upload-date">
          <input
            type="date"
            ref={dateRef}
            onChange={(res) =>
              console.log(
                res.target.value.substr(0, 4),
                res.target.value.substr(5, 2),
                res.target.value.substr(8, 2)
              )
            }
          />
        </div>
        <div className="admin-upload-subtitle">
          <span className="f-20 fw-600">내용</span>
        </div>
        <textarea className="admin-upload-content" ref={contentRef} />
      </div>
    </div>
  );
};

export default AdminUpload;
