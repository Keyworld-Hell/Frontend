import React, { useState } from "react";
import { NAV_LIST, NAV_SUB_LIST } from "../../store/nav";

const AdminNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSubIndex, setActiveSubIndex] = useState(-1);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handleSubClick = (index) => {
    setActiveSubIndex(index);
  };

  return (
    <div className="flex">
      <nav className="admin-nav">
        <ul>
          {NAV_LIST.map((item, index) => (
            <li
              className={activeIndex === index ? "nav-clicked" : ""}
              onClick={() => {
                handleClick(index);
                handleSubClick(0);
              }}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
      <nav className="admin-nav-sub">
        <ul>
          {NAV_SUB_LIST.map(
            (item, index) =>
              index === activeIndex &&
              item.contents.map((item, index) => (
                <li
                  className={activeSubIndex === index ? "nav-sub-clicked" : ""}
                  onClick={() => handleSubClick(index)}
                >
                  {item.title}
                </li>
              ))
          )}
        </ul>
      </nav>
    </div>
  );
};
export default AdminNav;
