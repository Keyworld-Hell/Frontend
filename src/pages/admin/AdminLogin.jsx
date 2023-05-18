import React from "react";

const AdminLogin = () => {
  return (
    <div className="admin-login-box m-0">
      <div className="admin-login-title color-white center flex f-20 fw-600">
        KEYWORLD MAIN
      </div>
      <div className="admin-login-id m-0 f-20 fw-600">
        ID
        <div className="admin-login-input">
          <input />
        </div>
      </div>
      <div className="admin-login-pw m-0 f-20 fw-600">
        PW
        <div className="admin-login-input">
          <input type="password" />
        </div>
      </div>
      <div className="admin-login-btnbox m-0">
        <button className="admin-login-btn color-white fw-600 cursor">
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
