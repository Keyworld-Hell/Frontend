import React from "react";
import { Route, Routes } from "react-router-dom";

import Admin from "../pages/admin/Admin";
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

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="notice/register" element={<Admin />} />
      <Route path="certificate" element={<AdminCertificate />} />
      <Route path="inspect" element={<AdminInspect />} />
      <Route path="product/:lock" element={<AdminProduct />} />
      <Route path="inquiry" element={<AdminInquiry />} />
      <Route path="inquiry/:id" element={<AdminInquiryDetail />} />
      <Route path="board" element={<AdminBoard />} />
      <Route path="board/:id" element={<AdminBoardDetail />} />
      <Route path=":title/upload" element={<AdminTechUpload />} />
      <Route path="notice" element={<AdminNotice />} />
    </Routes>
  );
};

export default AdminRoutes;
