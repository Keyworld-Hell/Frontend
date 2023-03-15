import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";

import "./assets/css/admin.css";
import "./assets/css/index.css";
import "./assets/css/home.css";
import "./assets/css/layout.css";

import Footer from "./components/layout/Footer";
import Admin from "./pages/admin/Admin";
import AdminHeader from "./components/layout/AdminHeader";
import AdminNotice from "./pages/admin/AdminNotice";
import AdminCertificate from "./pages/admin/AdminCertificate";
import AdminInspect from "./pages/admin/AdminInspect";
import AdminTechUpload from "./pages/admin/AdminTechUpload";
import AdminProduct from "./pages/admin/AdminProduct";
import AdminInquiry from "./pages/admin/AdminInquiry";
import AdminBoard from "./pages/admin/AdminBoard";
import AdminInquiryDetail from "./pages/admin/AdminInquiryDetail";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <AdminHeader />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/notice" element={<AdminNotice />} />
        <Route path="/admin/notice/register" element={<Admin />} />
        <Route path="/admin/certificate" element={<AdminCertificate />} />
        <Route path="/admin/inspect" element={<AdminInspect />} />
        <Route path="/admin/product/:lock" element={<AdminProduct />} />
        <Route path="/admin/inquiry" element={<AdminInquiry />} />
        <Route path="/admin/inquiry/:id" element={<AdminInquiryDetail />} />
        <Route path="/admin/board" element={<AdminBoard />} />
        <Route path="/admin/:title/upload" element={<AdminTechUpload />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
