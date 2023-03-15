import React from "react";

import logo from "../../assets/img/keyworldLogo.png";

const AdminHeader = () => {
  return (
    <header className="admin-header flex">
      <div className="admin-header-logo flex">
        <img src={logo} alt={logo} />
        <span className="f-20 fw-600">Dashboard</span>
      </div>
      <div className="admin-header-toggle">
        <button>Toggle close</button>
      </div>
    </header>
  );
};

export default AdminHeader;
