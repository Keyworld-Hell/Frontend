import React, { useRef, useState } from "react";
import AdminNav from "../../components/layout/AdminNav";

import img from "../../assets/img/inspect.png";

const AdminInspect = () => {
  const fileRef = useRef();

  const [activeIndex, setActiveIndex] = useState(2);
  const [activeSubIndex, setActiveSubIndex] = useState(0);

  return (
    <div className="flex">
      <AdminNav
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        activeSubIndex={activeSubIndex}
        setActiveSubIndex={setActiveSubIndex}
      />
      <div className="admin-container container m-0">
        <div className="admin-title admin-tech-search flex f-20 fw-600">
          <div className="admin-search ">
            <input className="admin-search-input f-20" placeholder="검색" />
            <button className="admin-search-btn color-white">search</button>
          </div>
          <button className="admin-upload-btn  color-white">등록</button>
        </div>
        <div className="admin-tech-container flex">
          <div className="admin-tech-contents flex">
            <div className="admin-tech-box">
              <div className="admin-tech-img">
                <img src={img} alt={img} />
              </div>
              <div className="admin-tech-name flex f-20 fw-700">ISO-9001</div>
              <button className="admin-tech-btn color-white">X</button>
            </div>
          </div>
          <div className="admin-tech-contents flex">
            <div className="admin-tech-box">
              <div className="admin-tech-img">
                <img src={img} alt={img} />
              </div>
              <div className="admin-tech-name flex f-20 fw-700">ISO-9001</div>
              <button className="admin-tech-btn color-white">X</button>
            </div>
          </div>
          <div className="admin-tech-contents flex">
            <div className="admin-tech-box">
              <div className="admin-tech-img">
                <img src={img} alt={img} />
              </div>
              <div className="admin-tech-name flex f-20 fw-700">ISO-9001</div>
              <button className="admin-tech-btn color-white">X</button>
            </div>
          </div>
          <div className="admin-tech-contents flex">
            <div className="admin-tech-box">
              <div className="admin-tech-img">
                <img src={img} alt={img} />
              </div>
              <div className="admin-tech-name flex f-20 fw-700">ISO-9001</div>
              <button className="admin-tech-btn color-white">X</button>
            </div>
          </div>
          <div className="admin-tech-contents flex">
            <div className="admin-tech-box">
              <div className="admin-tech-img">
                <img src={img} alt={img} />
              </div>
              <div className="admin-tech-name flex f-20 fw-700">ISO-9001</div>
              <button className="admin-tech-btn color-white">X</button>
            </div>
          </div>
          <div className="admin-tech-contents flex">
            <div className="admin-tech-box">
              <div className="admin-tech-img">
                <img src={img} alt={img} />
              </div>
              <div className="admin-tech-name flex f-20 fw-700">ISO-9001</div>
              <button className="admin-tech-btn color-white">X</button>
            </div>
          </div>
          <div className="admin-tech-contents flex">
            <div className="admin-tech-box">
              <div className="admin-tech-img">
                <img src={img} alt={img} />
              </div>
              <div className="admin-tech-name flex f-20 fw-700">ISO-9001</div>
              <button className="admin-tech-btn color-white">X</button>
            </div>
          </div>
          <div className="admin-tech-contents flex">
            <div className="admin-tech-box">
              <div className="admin-tech-img">
                <img src={img} alt={img} />
              </div>
              <div className="admin-tech-name flex f-20 fw-700">ISO-9001</div>
              <button className="admin-tech-btn color-white">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminInspect;
