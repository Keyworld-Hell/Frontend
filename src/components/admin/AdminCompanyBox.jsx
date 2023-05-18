import React from "react";

const AdminCompanyBox = ({ img, name }) => {
  return (
    <div className="admin-tech-contents flex">
      <div className="admin-tech-box">
        <div className="admin-tech-img">
          <img src={img} alt={img} />
        </div>
        <div className="admin-tech-name flex f-20 fw-700">{name}</div>
        <button className="admin-tech-btn color-white">X</button>
      </div>
    </div>
  );
};

export default AdminCompanyBox;
