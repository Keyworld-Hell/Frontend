import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import AdminNav from "../../components/layout/AdminNav";

import axios from "axios";

const SERVER_URL = "http://localhost:3000";

const AdminTechUpload = () => {
  const fileRef = useRef();
  const nameRef = useRef();

  const { title } = useParams();

  const initialActiveIndex = title === "certification" ? 1 : 2;

  const [fileName, setFileName] = useState("파일을 선택하세요.");
  const [fileImg, setFileImg] = useState();
  const [activeSubIndex, setActiveSubIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const previewImg = () => {
    const file = fileRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFileImg(reader.result);
    };
  };

  const postDataHandler = () => {
    if (!nameRef.current.value || !fileRef.current.files[0]) {
      alert("빈칸을 채워주세요.");
      return;
    }

    const formdata = new FormData();
    formdata.append("name", nameRef.current.value);
    formdata.append("file", fileRef.current.files[0]);

    axios
      .post(`${SERVER_URL}/adm/${title}/new`, formdata)
      .then((res) => alert("등록 완료!"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex">
      <AdminNav
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        activeSubIndex={activeSubIndex}
        setActiveSubIndex={setActiveSubIndex}
      />
      <div className="admin-container container m-0">
        <div className="admin-title flex f-20 fw-600 cap">
          {title}
          <button
            className="admin-upload-btn color-white"
            onClick={postDataHandler}
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

        <div className="admin-upload-subtitle">
          <span className="f-20 fw-600">이름</span>
        </div>
        <input
          className="admin-upload-tech-name f-20"
          placeholder="이름"
          ref={nameRef}
        />
      </div>
    </div>
  );
};

export default AdminTechUpload;
