import React, { useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import AdminNav from "../../components/layout/AdminNav";

import axios from "axios";

const SERVER_URL = "http://localhost:3000";

const AdminTechUpload = ({ isNavOpen }) => {
  const fileRef = useRef();
  const nameRef = useRef();

  const { title } = useParams();

  const location = useLocation();

  const isEng = location.pathname.endsWith("/eng");
  const initialActiveIndex = title === "certification" ? 1 : 2;
  const initialSubIndex = isEng ? 1 : 0;
  const initialFileName = isEng ? "Choose file" : "파일을 선택하세요.";

  const [fileName, setFileName] = useState(initialFileName);
  const [fileImg, setFileImg] = useState();
  const [activeSubIndex, setActiveSubIndex] = useState(initialSubIndex);
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
    formdata.append("title", nameRef.current.value);
    // formdata.append("file", fileRef.current.files[0]);
    formdata.append("language", String(false));

    axios
      .post(`/adm/${title}/new`, formdata)
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
        <span className="f-20 fw-600">{isEng ? "File" : "첨부"}</span>
        <div className="admin-upload-file">
          <input
            type="file"
            id="file"
            ref={fileRef}
            onChange={() => {
              setFileName(fileRef.current.files[0].name);
              previewImg();
            }}
          />
          <div className="admin-upload-file-box">
            {fileName}
            <label htmlFor="file" className="admin-upload-label color-white">
              {isEng ? "Upload" : "첨부파일"}
            </label>
          </div>
        </div>

        <div className="admin-upload-subtitle">
          <span className="f-20 fw-600">{isEng ? "Name" : "이름"}</span>
        </div>
        <input
          className="admin-upload-tech-name f-20"
          placeholder={isEng ? "Name" : "이름"}
          ref={nameRef}
        />
      </div>
    </div>
  );
};

export default AdminTechUpload;
