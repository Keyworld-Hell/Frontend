import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { NAV_LIST, NAV_SUB_LIST, PRODUCT_NAV_LIST } from "../../store/nav";

const AdminNav = ({
  activeIndex,
  setActiveIndex,
  activeSubIndex,
  setActiveSubIndex,
  isNavOpen,
}) => {
  const { lock } = useParams();
  const initialProductIndex = lock === undefined ? -1 : lock;
  const [activeProductIndex, setActiveProductIndex] = useState(
    Number(initialProductIndex)
  );

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handleSubClick = (index) => {
    setActiveSubIndex(index);
  };

  return (
    <div className={"flex" + (isNavOpen ? "" : " hidden")}>
      <nav className="admin-nav">
        <ul>
          {NAV_LIST.map((item, index) => (
            <Link key={index} to={item.addr} className="color-black">
              <li
                key={index}
                className={activeIndex === index ? "nav-clicked" : ""}
                onClick={() => {
                  handleClick(index);
                  handleSubClick(0);
                }}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      {NAV_SUB_LIST.length > activeIndex && (
        <nav className="admin-nav-sub">
          <ul>
            {NAV_SUB_LIST.map(
              (item, index) =>
                index === activeIndex &&
                item.contents.map((item, index) => (
                  <Link key={index} to={item.addr} className="color-black">
                    <li
                      className={
                        activeSubIndex === index ? "nav-sub-clicked" : ""
                      }
                      onClick={() => handleSubClick(index)}
                    >
                      {item.title}
                    </li>
                  </Link>
                ))
            )}
          </ul>
        </nav>
      )}
      {activeIndex === 3 &&
        (activeSubIndex === 0 ? (
          <nav className="admin-nav-sub">
            <ul>
              {PRODUCT_NAV_LIST.map((item, index) => (
                <Link
                  key={index}
                  to={
                    activeSubIndex === 0
                      ? `/admin/product/${item.number}`
                      : `/admin/product/${item.number}/eng`
                  }
                  className="color-black"
                >
                  <li
                    className={
                      activeProductIndex === index ? "nav-sub-clicked" : ""
                    }
                    onClick={() => setActiveProductIndex(index)}
                  >
                    {item.korName}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        ) : (
          <nav className="admin-nav-sub">
            <ul>
              {PRODUCT_NAV_LIST.map((item, index) => (
                <Link
                  key={index}
                  to={
                    activeSubIndex === 0
                      ? `/admin/product/${item.number}`
                      : `/admin/product/${item.number}/eng`
                  }
                  className="color-black"
                >
                  <li
                    className={
                      activeProductIndex === index ? "nav-sub-clicked" : ""
                    }
                    onClick={() => setActiveProductIndex(index)}
                  >
                    {item.engName}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        ))}
    </div>
  );
};
export default AdminNav;
