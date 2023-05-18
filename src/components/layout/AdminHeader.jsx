import React from "react";
import { useState } from "react";
import AdminNav from "./AdminNav";

import logo from "../../assets/img/keyworldLogo.png";
import { useLocation } from "react-router-dom";

const AdminHeader = ({ setIsNavOpen }) => {
  const location = useLocation();
  const isSpecialPage = location.pathname === "/admin";

  return (
    <header className={"admin-header flex " + (isSpecialPage && "hidden")}>
      <div className="admin-header-logo flex">
        <img src={logo} alt={logo} />
        <span className="f-20 fw-600">Dashboard</span>
      </div>
      <div className="admin-header-toggle">
        <button
          onClick={() => {
            setIsNavOpen((isNavOpen) => !isNavOpen);
          }}
        >
          Toggle close
        </button>
        <button>Toggle close</button>
      </div>
    </header>
  );
};

export default AdminHeader;
