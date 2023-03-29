import React from "react";
import { useState } from "react";
import AdminNav from "./AdminNav";

import logo from "../../assets/img/keyworldLogo.png";

const AdminHeader = () => {

  return (
    <div className="admin-header flex">
      <div className="admin-header-logo flex">
        <img src={logo} alt={logo} />
        <span className="f-20 fw-600">Dashboard</span>
      </div>
      <div className="admin-header-toggle">
        <button >Toggle close</button>
      </div>
    </div>
  );
};

export default AdminHeader;
