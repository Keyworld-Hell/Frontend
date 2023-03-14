import React, { useRef, useState } from "react";
import AdminNav from "../../components/layout/AdminNav";

const Admin = () => {
  const fileRef = useRef();
  const [fileName, setFileName] = useState("");
  const [fileImg, setFileImg] = useState();

  const previewImg = () => {
    const file = fileRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFileImg(reader.result);
    };
  };

  return (
    <div className="flex">
      <AdminNav />
      <div className="admin-container container m-0">
        <div className="admin-title flex f-20 fw-600">
          IMAGE
          <button className="admin-upload-btn color-white">등록</button>
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
        <span className="f-20 fw-600">기간 설정</span>
        <div className="admin-upload-date">
          <input type="date" />
        </div>
        <div className="admin-upload-subtitle">
          <span className="f-20 fw-600">내용</span>
        </div>
        <textarea className="admin-upload-content" />
      </div>
    </div>
  );
};

export default Admin;
