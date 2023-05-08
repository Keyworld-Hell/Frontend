import React, { useState } from "react";
import axios from "axios";

import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";

const Inquiry = () => {
  const [name, setName] = useState("");
  const [manager, setManager] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("/admin/inquiry", {
      name: name,
      manager: manager,
      email: email,
      phone: phone,
      content: content.replace(/\n/g, "<br />"),
    });
    console.log(response.data);
    alert("문의를 보내시겠습니까");
  };

  const text = "";

  const formattedText = text.replace(/\n/g, "\n");
  return (
    <>
      <PageImage img={"inquiry-img"} title="Inquiry" />

      <PageTitle title={"고객문의"} />
      <div className="container m-0">
        <div className="inquiry-text ">
          고객의 소리에 귀를 기울이는 키워드가 되겠습니다. <br />
          문의 사항을 남겨주시면 빠른 시일 내에 답변 드리겠습니다.
        </div>
        <form className="inquiry-form">
          <div className="inquiry-container m-0">
            <div className="inquiry-privacy">
              <div className="inquiry-subtitle ">개인정보 처리 방침</div>
              <textarea readOnly>{text}</textarea>
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle  ">-상호명-</div>
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle  ">-담당자 이름-</div>
              <input
                value={manager}
                onChange={(e) => setManager(e.target.value)}
              />
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle  ">-이메일-</div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle  ">-연락처-</div>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle  ">-문의 내용-</div>
              <textarea
                className="inquiry-content "
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div className="inquiry-check f-18 ">
              <input type="checkbox" id="check" />
              개인 정보 처리 방침에 동의합니다.
            </div>
          </div>

          <div className="container center">
            <button className="inquiry-btn  color-white" onClick={handleSubmit}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Inquiry;
