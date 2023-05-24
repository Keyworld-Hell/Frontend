import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";
import axios from "axios";

const InquiryEng = () => {
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
      window.alert("Please enter all required items.");
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
    window.alert("Would you like to send an inquiry?");
    navigate("/inquiry");
  };
  const text =
    "In accordance with Article 30 of the Personal Information Protection Act, Keyworld establishes and discloses the following guidelines for personal information processing to protect the personal information of the data subject (customer) and to handle complaints quickly and smoothly.\n1. Purpose of processing personal information Keyworld processes personal information for the following purposes and is not used for any purpose other than the following. \n- Confirmation of customer intention, self-identification and certification of customer service, maintenance and management of membership, payment of goods or services, supply and delivery of goods or services, etc. \n- 1. Keyworld processes personal information within the period of personal information retention and use or law. \n- 2. The specific personal information processing and retention period is as follows. \n- Customer subscription and management: Until the termination of the service use contract or membership, but until the settlement of the bond and debt relationship, \n- 5 years \n3. Provision of personal information Keyworld does not provide personal information except Article 17 of the Personal Information Protection Act. \n4. The rights, obligations, and methods of exercise of the information subject and legal representative The information subject may exercise the following personal information protection-related rights against Keyworld at any time. \n- 1. Request for personal information access \n- 2. Request for correction if there is an error in personal information \n- 3. Request for deletion \n- 4. Request for suspension of processing \n5. The processed personal information item Keyworld handles the following personal information items. \n- Payment information such as name, date of birth, address, phone number, mobile phone number, gender, e-mail address, credit card number, bank account number, etc. \n6. Personal information destruction \n-1. Keyworld destroys personal information without delay. \n- 2. Keyworld destroys personal information in the following ways. - Electronic files: File deletion and disk storage media format - Handwritten documents: Crushing or incineration \n7. Measures to ensure the safety of personal information Keyworld is taking the following measures to ensure the safety of personal information. \n- Management Measures: Establish and implement internal management plans, regular training for employees, etc. \n- Technical Measures: Set passwords for personal information processing systems (or computers where personal information is stored), install security programs such as vaccine software, and physical measures.\n-2. Cookies are small amounts of information sent by the server (http) used to run the website to the user's computer browser and are also stored on the user's hard disk in the user's PC computer. \nA. Purpose of use of cookies: It is used to provide optimized information to users by identifying the type of visit and use of each service and website visited by users, popular search terms, security access, etc.\nB. Installation, operation, and rejection of cookies: You can refuse to save cookies by setting options on the Tools > Internet Options > Privacy menu at the top of your web browser. C. Refusing to save cookies may cause difficulties in using customized services. \n9. Keyworld, the head of personal information protection, is in charge of personal information processing and designates a personal information protection manager as follows to handle complaints and damage relief of the information subject related to personal information processing. \n▶ Personal Information Protection Manager (Business Owner or Representative) Name: Kim Jin-soo Position: Team Leader Contact: 032-681-8156 Fax Number: 032-681-8157 Email: nnayomi@naver.com \n10. Change of Personal Information Processing Policy will be applied from 2023.02.01.";

  const formattedText = text.replace(/\n/g, "\n");
  return (
    <>
      <PageImage img={"inquiry-img"} title="Inquiry" />
      <PageTitle title={"Inquiry"} />
      <div className="container m-0">
        <div className="inquiry-text ">
          We will be a Keyword that listens to the voice of our customers.
          <br />
          If you leave your inquiry, we will respond as soon as possible.
        </div>{" "}
        <form className="inquiry-form">
          <div className="inquiry-container m-0">
            <div className="inquiry-privacy">
              <div className="inquiry-subtitle ">Privacy Policy</div>
              <textarea readOnly>{text}</textarea>
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle  ">-Company Name-</div>
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle  ">
                -Name of the person in charge-
              </div>
              <input
                value={manager}
                onChange={(e) => setManager(e.target.value)}
              />
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle  ">-Email-</div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle  ">-Tel-</div>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="inquiry-input">
              <div className="inquiry-subtitle  ">-Inquiry details-</div>
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
              I agree to the privacy policy.
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

export default InquiryEng;
