import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import AdminNav from "../../components/layout/AdminNav";

import axios from "axios";

const AdminProductUpload = ({ isNavOpen }) => {
  const thumbFileRef = useRef();
  const floorFileRef = useRef();
  const downFileRef = useRef();
  const nameRef = useRef();
  const materialRef = useRef();
  const surfaceRef = useRef();
  const purposeRef = useRef();
  const featureRef = useRef();
  const descRef = useRef();

  const location = useLocation();

  const isEng = location.pathname.endsWith("/eng");
  const initialSubIndex = isEng ? 1 : 0;
  const initialFileName = isEng ? "Choose file" : "파일을 선택하세요.";

  const [thumbFileName, setThumbFileName] = useState(initialFileName);
  const [floorFileName, setFloorFileName] = useState(initialFileName);
  const [downFileName, setDownFileName] = useState(initialFileName);
  const [lock, setLock] = useState(-1);
  const [fileImg, setFileImg] = useState();
  const [activeSubIndex, setActiveSubIndex] = useState(initialSubIndex);
  const [activeIndex, setActiveIndex] = useState(3);

  const previewImg = () => {
    const file = thumbFileRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFileImg(reader.result);
    };
  };

  const postDataHandler = () => {
    if (
      !nameRef.current.value ||
      !thumbFileRef.current.files[0] ||
      !materialRef.current.value ||
      !surfaceRef.current.value ||
      !purposeRef.current.value ||
      !featureRef.current.value ||
      !descRef.current.value ||
      !floorFileRef.current.value ||
      !downFileRef.current.value ||
      lock === -1
    ) {
      alert("빈칸을 채워주세요.");
      return;
    }

    const formdata = new FormData();
    formdata.append("number", lock);
    formdata.append("title", nameRef.current.value);
    formdata.append("material", materialRef.current.value);
    formdata.append("surface", surfaceRef.current.value);
    formdata.append("purpose", purposeRef.current.value);
    formdata.append("feature", featureRef.current.value);
    formdata.append("description", descRef.current.value);
    // formdata.append("file1", thumbFileRef.current.files[0]);
    // formdata.append("file2", floorFileRef.current.files[0]);
    // formdata.append("files", downFileRef.current.files);
    formdata.append("language", isEng ? 1 : 0);

    axios
      .post(`/adm/products/upload`, formdata)
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
      <div className="admin-container container m-0 admin-product-upload">
        <div className="admin-title flex f-20 fw-600 cap">
          {isEng ? "Product" : "제품"}
          <button
            className="admin-upload-btn color-white"
            onClick={postDataHandler}
          >
            {isEng ? "Upload" : "등록"}
          </button>
        </div>
        <div className="admin-upload-img">
          {fileImg && <img src={fileImg} alt={fileImg} />}
        </div>
        {/**
         * !FEAT: Thumnail
         */}
        <span className="f-20 fw-600">{isEng ? "Thumbnail" : "썸네일"}</span>
        <div className="admin-upload-file">
          <input
            type="file"
            id="file1"
            ref={thumbFileRef}
            onChange={() => {
              setThumbFileName(thumbFileRef.current.files[0].name);
              previewImg();
            }}
          />
          <div className="admin-upload-file-box">
            {thumbFileName}
            <label htmlFor="file1" className="admin-upload-label color-white">
              {isEng ? "Upload" : "첨부파일"}
            </label>
          </div>
        </div>
        {/**
         * !FEAT: Floor
         */}
        <span className="f-20 fw-600">{isEng ? "Floor" : "도면"}</span>
        <div className="admin-upload-file">
          <input
            type="file"
            id="file2"
            ref={floorFileRef}
            onChange={() => {
              setFloorFileName(floorFileRef.current.files[0].name);
              previewImg();
            }}
          />
          <div className="admin-upload-file-box">
            {floorFileName}
            <label htmlFor="file2" className="admin-upload-label color-white">
              {isEng ? "Upload" : "첨부파일"}
            </label>
          </div>
        </div>
        {/**
         * !FEAT: Download File
         */}
        <span className="f-20 fw-600">
          {isEng ? "Download Floor" : "도면 다운로드"}
        </span>
        <div className="admin-upload-file">
          <input
            type="file"
            id="file3"
            ref={downFileRef}
            onChange={() => {
              setDownFileName(downFileRef.current.files[0].name);
              previewImg();
            }}
            multiple
          />
          <div className="admin-upload-file-box">
            {downFileName}
            <label htmlFor="file3" className="admin-upload-label color-white">
              {isEng ? "Upload" : "첨부파일"}
            </label>
          </div>
        </div>
        <div className="admin-upload-subtitle">
          <span className="f-20 fw-600">{isEng ? "Lock" : "록"}</span>
        </div>
        <select
          name="lock"
          id="lock"
          className="admin-upload-tech-name f-20"
          onChange={(e) => setLock(e.target.value)}
        >
          {!isEng ? (
            <>
              <option value="0">원형 록</option>
              <option value="1">딤플 록</option>
              <option value="2">디스크 록</option>
              <option value="3">스위치 록</option>
              <option value="4">캠 록</option>
              <option value="5">사우나 록</option>
              <option value="6">철재 록</option>
              <option value="7">디지털 록</option>
              <option value="8">경첩</option>
              <option value="9">핸들</option>
              <option value="10">스페셜</option>
              <option value="11">기타</option>
              <option value="12">주문제작</option>
              <option value="13">N-part</option>
            </>
          ) : (
            <>
              <option value="0">Circular Lock</option>
              <option value="1">Dimple Lock</option>
              <option value="2">Disc Lock</option>
              <option value="3">Switch Lock</option>
              <option value="4">Cam Lock</option>
              <option value="5">Sauna Lock</option>
              <option value="6">Steel Lock</option>
              <option value="7">Digital Lock</option>
              <option value="8">Hinge</option>
              <option value="9">Handle</option>
              <option value="10">Special</option>
              <option value="11">Others</option>
              <option value="12">Custom Lock</option>
              <option value="13">N-part</option>
            </>
          )}
        </select>
        <div className="admin-upload-subtitle">
          <span className="f-20 fw-600">{isEng ? "Name" : "이름"}</span>
        </div>
        <input
          className="admin-upload-tech-name f-20"
          placeholder={isEng ? "Name" : "이름"}
          ref={nameRef}
        />
        <div className="admin-upload-subtitle">
          <span className="f-20 fw-600">{isEng ? "Material" : "주요재질"}</span>
        </div>
        <input
          className="admin-upload-tech-name f-20"
          placeholder={isEng ? "Material" : "주요재질"}
          ref={materialRef}
        />
        <div className="admin-upload-subtitle">
          <span className="f-20 fw-600">{isEng ? "Surface" : "표면처리"}</span>
        </div>
        <input
          className="admin-upload-tech-name f-20"
          placeholder={isEng ? "Surface" : "표면처리"}
          ref={surfaceRef}
        />
        <div className="admin-upload-subtitle">
          <span className="f-20 fw-600">{isEng ? "purpose" : "용도"}</span>
        </div>
        <input
          className="admin-upload-tech-name f-20"
          placeholder={isEng ? "purpose" : "용도"}
          ref={purposeRef}
        />
        <div className="admin-upload-subtitle">
          <span className="f-20 fw-600">{isEng ? "feature" : "특징"}</span>
        </div>
        <input
          className="admin-upload-tech-name f-20"
          placeholder={isEng ? "feature" : "특징"}
          ref={featureRef}
        />
        <div className="admin-upload-subtitle">
          <span className="f-20 fw-600">{isEng ? "Description" : "설명"}</span>
        </div>
        <textarea className="admin-upload-content" ref={descRef} />
      </div>
    </div>
  );
};

export default AdminProductUpload;
