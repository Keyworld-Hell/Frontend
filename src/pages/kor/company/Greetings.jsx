import React from "react";
import PageImage from "../../../components/layout/PageImage";
import PageTitle from "../../../components/layout/PageTitle";

const Greeting = () => {
  return (
    <>
      <PageImage img={"company-img"} title="About Us" />
      <PageTitle title={"CEO 인사말"} />
    </>
  );
};

export default Greeting;
