import React, { useRef, useState } from "react";
import AdminNav from "../../components/layout/AdminNav";

const AdminInspect = () => {
  const fileRef = useRef();

  const [activeIndex, setActiveIndex] = useState(1);
  const [activeSubIndex, setActiveSubIndex] = useState(0);

  return (
    <div className="flex">
      <AdminNav
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        activeSubIndex={activeSubIndex}
        setActiveSubIndex={setActiveSubIndex}
      />
      <div className="admin-container container m-0">inspcet</div>
    </div>
  );
};

export default AdminInspect;
