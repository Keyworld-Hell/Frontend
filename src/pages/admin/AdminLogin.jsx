import React, { useState } from "react";
import axios from "axios";
import client from "../../client";

const AdminLogin = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    const data = {
      id: id,
      password: password,
    };

    axios
      .post("/adm", data)
      .then((response) => {
        // 로그인 성공 시 리디렉션
        if (response.data.success) {
          window.location.href = "/admin/notice"; // 리디렉션할 경로 설정
        } else {
          // 로그인 실패 처리
          console.log("로그인 실패");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="admin-login-box m-0">
      <div className="admin-login-title color-white center flex f-20 fw-600">
        KEYWORLD MAIN
      </div>
      <div className="admin-login-id m-0 f-20 fw-600">
        ID
        <div className="admin-login-input">
          <input
            value={id}
            onChange={handleIdChange}
            onKeyUp={handleKeyPress}
          />
        </div>
      </div>
      <div className="admin-login-pw m-0 f-20 fw-600">
        PW
        <div className="admin-login-input">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onKeyUp={handleKeyPress}
          />
        </div>
      </div>
      <div className="admin-login-btnbox m-0">
        <button
          className="admin-login-btn color-white fw-600 cursor"
          onClick={handleLogin}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
