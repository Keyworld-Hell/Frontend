import React from "react";

const PageImage = ({ img, title }) => {
  return (
    <>
      <div className={"center " + img}>
        <div className="greeting-title color-white fw-600">{title}</div>
      </div>
      <div className="page-line"></div>
    </>
  );
};
export default PageImage;
