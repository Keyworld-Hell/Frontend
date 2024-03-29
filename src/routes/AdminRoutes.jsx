import React from "react";
import { Route, Routes } from "react-router-dom";

import Admin from "../pages/admin/AdminNoticeUpload";
import AdminNotice from "../pages/admin/AdminNotice";
import AdminCertificate from "../pages/admin/AdminCertificate";
import AdminInspect from "../pages/admin/AdminInspect";
import AdminTechUpload from "../pages/admin/AdminTechUpload";
import AdminProduct from "../pages/admin/AdminProduct";
import AdminInquiry from "../pages/admin/AdminInquiry";
import AdminBoard from "../pages/admin/AdminBoard";
import AdminInquiryDetail from "../pages/admin/AdminInquiryDetail";
import AdminBoardDetail from "../pages/admin/AdminBoardDetail";
import Header from "../components/layout/Header";
import AdminHeader from "../components/layout/AdminHeader";
import AdminCertificateEng from "../pages/admin/AdminCertificateEng";
import AdminInspectEng from "../pages/admin/AdminInspectEng";
import AdminProductEng from "../pages/admin/AdminProductEng";
import AdminUpload from "../pages/admin/AdminNoticeUpload";
import AdminProductUpload from "../pages/admin/AdminProductUpload";

const AdminRoutes = ({ isNavOpen }) => {
  return (
    <Routes>
      <Route
        path="notice/register"
        element={<AdminUpload isNavOpen={isNavOpen} />}
      />
      <Route
        path="certificate"
        element={<AdminCertificate isNavOpen={isNavOpen} />}
      />
      <Route
        path="certificate/eng"
        element={<AdminCertificateEng isNavOpen={isNavOpen} />}
      />
      <Route path="inspect" element={<AdminInspect isNavOpen={isNavOpen} />} />
      <Route
        path="inspect/eng"
        element={<AdminInspectEng isNavOpen={isNavOpen} />}
      />

      <Route
        path="product/:lock"
        element={<AdminProduct isNavOpen={isNavOpen} />}
      />
      <Route
        path="product/:lock/eng"
        element={<AdminProductEng isNavOpen={isNavOpen} />}
      />
      <Route
        path="product/upload"
        element={<AdminProductUpload isNavOpen={isNavOpen} />}
      />
      <Route
        path="product/upload/eng"
        element={<AdminProductUpload isNavOpen={isNavOpen} />}
      />
      <Route path="inquiry" element={<AdminInquiry isNavOpen={isNavOpen} />} />
      <Route
        path="inquiry/:id"
        element={<AdminInquiryDetail isNavOpen={isNavOpen} />}
      />
      <Route path="board" element={<AdminBoard isNavOpen={isNavOpen} />} />
      <Route
        path="board/:id"
        element={<AdminBoardDetail isNavOpen={isNavOpen} />}
      />
      <Route
        path=":title/upload/*"
        element={<AdminTechUpload isNavOpen={isNavOpen} />}
      />
      <Route path="notice" element={<AdminNotice isNavOpen={isNavOpen} />} />
    </Routes>
  );
};

export default AdminRoutes;
