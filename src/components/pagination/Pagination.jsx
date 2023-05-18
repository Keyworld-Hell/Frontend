import React from "react";

const Pagination = (props) => {
  const { pageList, cur, setCur } = props;

  return (
    <div className="page-box flex">
      {pageList.map((number, index) => (
        <div
          className={"page-number " + (cur === index + 1 && "page-clicked")}
          onClick={() => {
            setCur(number);
          }}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
