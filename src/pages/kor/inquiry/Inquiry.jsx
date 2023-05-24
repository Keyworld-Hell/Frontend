import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";
import client from "../../../client";

const Inquiry = () => {
  const [name, setName] = useState("");
  const [manager, setManager] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [content, setContent] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !manager || !email || !phone || !content || !isChecked) {
      window.alert("모든 필수 항목을 입력해주세요.");
      return;
    }

    const formdata = new FormData();

    formdata.append("name", name);
    formdata.append("title", manager);
    formdata.append("email", email);
    formdata.append("phone", phone);
    formdata.append("content", content.replace(/\n/g, "<br />"));

    const response = await axios.post("/inquiry/new", formdata);
    console.log(response.data);
    window.alert("문의를 보내시겠습니까?");
    navigate("/inquiry");
  };

  const text =
    "키월드(은)는 개인정보 보호법 제30조에 따라 정보주체(고객)의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립․공개합니다.\n1. 개인정보의 처리목적 키월드은(는) 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다. \n- 고객 가입의사 확인, 고객에 대한서비스 제공에 따른 본인 식별․인증, 회원자격 유지․관리, 물품또는 서비스 공급에 따른 금액 결제, 물품 또는 서비스의공급․배송 등 \n2. 개인정보의 처리 및 보유기간 \n- 1. 키월드은(는) 정보주체로부터 개인정보를 수집할 때 동의받은 개인정보보유․이용기간 또는 법령에 따른 개인정보 보유․이용기간내에서 개인정보를 처리․보유합니다. \n- 2. 구체적인 개인정보 처리 및 보유기간은 다음과 같습니다. \n- 고객 가입 및 관리 : 서비스 이용계약또는 회원가입 해지시까지, 다만 채권․채무관계 잔존시에는 해당채권․채무관계 정산시까지 \n- 전자 상거래에서의 계약․청약철회,대금결제, 재화 등 공급기록 : 5년 \n3. 개인정보의 제3자 제공키월드은(는) 정보주체의 별도 동의, 법률의 특별한 규정 등개인정보 보호법 제17조에 해당하는 경우 외에는 개인정보를제3자에게 제공하지 않습니다. \n4. 정보주체와 법정대리인의 권리․의무 및행사방법 정보주체는 키월드에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다. \n- 1. 개인정보 열람요구 \n- 2. 개인정보에 오류 등이 있을 경우 정정 요구 \n- 3. 삭제요구 \n- 4. 처리정지 요구 \n5. 처리하는 개인정보 항목 키월드은(는) 다음의 개인정보 항목을 처리하고 있습니다. \n- 성명,생년월일, 주소, 전화번호, 휴대전화번호, 성별, 이메일주소, 신용카드번호, 은행계좌번호 등 결제정보 \n6. 개인정보의 파기 \n- 1. 키월드은(는) 개인정보 보유기간의 경과, 처리목적 달성 등개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다. \n- 2. 키월드은(는) 다음의 방법으로 개인정보를파기합니다. - 전자적 파일 : 파일 삭제 및 디스크 등 저장매체포맷 - 수기(手記) 문서 : 분쇄하거나 소각 \n7. 개인정보의 안전성확보조치 키월드은(는) 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다. \n- 관리적 조치 : 내부관리계획수립․시행, 직원․종업원 등에 대한 정기적 교육 \n- 기술적 조치 :개인 정보 처리 시스템(또는 개인정보가 저장된 컴퓨터)의 비밀번호설정 등 접근권한 관리, 백신 소프트웨어 등 보안 프로그램 설치, 개인정보가 저장된 파일의 암호화 \n- 물리적 조치 : 개인 정보가 저장․보관된 장소의 시건, 출입통제 등 \n8. 개인정보 자동 수집장치의 설치∙운영 및 거부에 관한 사항 \n- 1. 키월드은(는) 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠기(cookie)’를 사용합니다.\n- 2. 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다. \n가. 쿠키의 사용목적: 이용자가 방문한 각서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어,보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을위해 사용됩니다.\n나. 쿠키의 설치∙운영 및 거부 : 웹 브라우저 상단의 도구 > 인터넷 옵션 > 개인정보 메뉴의 옵션 설정을 통해쿠키 저장을 거부 할 수 있습니다. 다. 쿠키 저장을 거부할 경우맞춤형 서비스 이용에 어려움이 발생할 수 있습니다. \n9. 개인정보보호책임자 키월드은(는) 개인정보 처리에 관한업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보 주체의 불만처리 및 피해구제를 처리하기 위하여 아래와 같이 개인 정보 보호책임자를 지정하고 있습니다. \n▶ 개인정보 보호책임자 (사업주또는 대표자) 성명 : 김진수 직책 : 팀장 연락처 : 032-681-8156 팩스번호 : 032-681-8157 이메일 : nnayomi@naver.com \n10. 개인정보 처리방침 변경 이 개인정보 처리방침은 2023.02.01부터 적용됩니다.";

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
              <input
                type="checkbox"
                id="check"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
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

// 키월드(은)는 개인정보 보호법 제30조에 따라 정보주체(고객)의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립․공개합니다.\n1. 개인정보의 처리목적 키월드은(는) 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다. \n- 고객 가입의사 확인, 고객에 대한서비스 제공에 따른 본인 식별․인증, 회원자격 유지․관리, 물품또는 서비스 공급에 따른 금액 결제, 물품 또는 서비스의공급․배송 등 \n2. 개인정보의 처리 및 보유기간 \n- 1. 키월드은(는) 정보주체로부터 개인정보를 수집할 때 동의받은 개인정보보유․이용기간 또는 법령에 따른 개인정보 보유․이용기간내에서 개인정보를 처리․보유합니다. \n- 2. 구체적인 개인정보 처리 및 보유기간은 다음과 같습니다. \n- 고객 가입 및 관리 : 서비스 이용계약또는 회원가입 해지시까지, 다만 채권․채무관계 잔존시에는 해당채권․채무관계 정산시까지 \n- 전자 상거래에서의 계약․청약철회,대금결제, 재화 등 공급기록 : 5년 \n3. 개인정보의 제3자 제공키월드은(는) 정보주체의 별도 동의, 법률의 특별한 규정 등개인정보 보호법 제17조에 해당하는 경우 외에는 개인정보를제3자에게 제공하지 않습니다. \n4. 정보주체와 법정대리인의 권리․의무 및행사방법 정보주체는 키월드에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다. \n- 1. 개인정보 열람요구 \n- 2. 개인정보에 오류 등이 있을 경우 정정 요구 \n- 3. 삭제요구 \n- 4. 처리정지 요구 \n5. 처리하는 개인정보 항목 키월드은(는) 다음의 개인정보 항목을 처리하고 있습니다. \n- 성명,생년월일, 주소, 전화번호, 휴대전화번호, 성별, 이메일주소, 신용카드번호, 은행계좌번호 등 결제정보 \n6. 개인정보의 파기 \n- 1. 키월드은(는) 개인정보 보유기간의 경과, 처리목적 달성 등개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다. \n- 2. 키월드은(는) 다음의 방법으로 개인정보를파기합니다. - 전자적 파일 : 파일 삭제 및 디스크 등 저장매체포맷 - 수기(手記) 문서 : 분쇄하거나 소각 \n7. 개인정보의 안전성확보조치 키월드은(는) 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다. \n- 관리적 조치 : 내부관리계획수립․시행, 직원․종업원 등에 대한 정기적 교육 \n- 기술적 조치 :개인 정보 처리 시스템(또는 개인정보가 저장된 컴퓨터)의 비밀번호설정 등 접근권한 관리, 백신 소프트웨어 등 보안 프로그램 설치, 개인정보가 저장된 파일의 암호화 \n- 물리적 조치 : 개인 정보가 저장․보관된 장소의 시건, 출입통제 등 \n8. 개인정보 자동 수집장치의 설치∙운영 및 거부에 관한 사항 \n- 1. 키월드은(는) 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠기(cookie)’를 사용합니다.\n- 2. 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다. \n가. 쿠키의 사용목적: 이용자가 방문한 각서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어,보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을위해 사용됩니다.\n나. 쿠키의 설치∙운영 및 거부 : 웹 브라우저 상단의 도구 > 인터넷 옵션 > 개인정보 메뉴의 옵션 설정을 통해쿠키 저장을 거부 할 수 있습니다. 다. 쿠키 저장을 거부할 경우맞춤형 서비스 이용에 어려움이 발생할 수 있습니다. \n9. 개인정보보호책임자 키월드은(는) 개인정보 처리에 관한업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보 주체의 불만처리 및 피해구제를 처리하기 위하여 아래와 같이 개인 정보 보호책임자를 지정하고 있습니다. \n▶ 개인정보 보호책임자 (사업주또는 대표자) 성명 : 김진수 직책 : 팀장 연락처 : 032-681-8156 팩스번호 : 032-681-8157 이메일 : nnayomi@naver.com \n10. 개인정보 처리방침 변경 이 개인정보 처리방침은 2023.02.01부터 적용됩니다.
