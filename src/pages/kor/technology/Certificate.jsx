import React, { useEffect, useState } from "react";
import axios from "axios";
import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";

import Modal from "../../../components/layout/Modal";

const Certificate = () => {
  const [data, setData] = useState([]);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("/0/certification").then((res) => {
        if (Array.isArray(res.data)) {
          setData(res.data);
          console.log(res.data);
        }
      });
    };
    fetchData();
  }, []);

  return (
    <>
      <PageImage img={"technology-img"} title="Technology" />
      <PageTitle title={"인증서"} />
      <div className="container m-0">
        <div className="tech-box flex">
          {data.map(
            (item, index) =>
              item && (
                <div className="tech-img flex">
                  <div className="tech-img-detail" key={index}>
                    {/* <div
                      className="tech-img-text flex color-white"
                      onClick={() => setIsModal(true)}
                    >
                      상세보기
                    </div> */}
                    <img
                      className="tech-imgs"
                      src={`${item.img}`}
                      alt={item.title}
                    />
                    {/* {isModal && (
                      <Modal setIsModal={setIsModal} img={item.img} />
                    )} */}
                  </div>
                  <div className="tech-text ">{item.title}</div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default Certificate;
