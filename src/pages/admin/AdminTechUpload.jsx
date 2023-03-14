import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import AdminNav from "../../components/layout/AdminNav";

const AdminTechUpload = () => {
  const fileRef = useRef();
  const [fileName, setFileName] = useState("파일을 선택하세요.");
  const [fileImg, setFileImg] = useState();
  const [activeSubIndex, setActiveSubIndex] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  const params = useParams();

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
      <AdminNav
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        activeSubIndex={activeSubIndex}
        setActiveSubIndex={setActiveSubIndex}
      />
      <div className="admin-container container m-0">
        <div className="admin-title flex f-20 fw-600 cap">
          {params.title}
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

        <div className="admin-upload-subtitle">
          <span className="f-20 fw-600">이름</span>
        </div>
        <input className="admin-upload-tech-name f-20" placeholder="이름" />
      </div>
    </div>
  );
};

export default AdminTechUpload;
