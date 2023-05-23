import React from "react";

const AdminCompanyBox = ({ id, img, title, deleteClick }) => {
  return (
    <div className="admin-tech-contents flex" key={id}>
      <div className="admin-tech-box">
        <div className="admin-tech-img">
          <img src={img} alt={img} />
        </div>
        <div className="admin-tech-name flex f-20 fw-700">{title}</div>
        <button
          className="admin-tech-btn color-white"
          onClick={() => deleteClick(id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default AdminCompanyBox;
