import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";

import "./assets/css/admin.css";
import "./assets/css/index.css";
import "./assets/css/home.css";
import "./assets/css/layout.css";
import "./assets/css/company.css";
import "./assets/css/technology.css";
import "./assets/css/inquiry.css";
import "./assets/css/board.css";
import "./assets/css/product.css";

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
import AdminBoardDetail from "./pages/admin/AdminBoardDetail";

import Footer from "./components/layout/Footer";
import Greeting from "./pages/kor/company/Greetings";
import Organization from "./pages/kor/company/Organization";
import Future from "./pages/kor/company/Future";
import Contact from "./pages/kor/company/Contact";
import Certificate from "./pages/kor/technology/Certificate";
import Inspect from "./pages/kor/technology/Inspect";
import Inquiry from "./pages/kor/inquiry/Inquiry";
import Board from "./pages/kor/board/Board";
import BoardDetail from "./pages/kor/board/BoardDetail";
import Product from "./pages/kor/product/Product";
import ProductDetail from "./pages/kor/product/ProductDetail";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <AdminHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/future" element={<Future />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/inspect" element={<Inspect />} />
        <Route path="/product/:lock" element={<Product />} />
        <Route path="/product/:lock/:id" element={<ProductDetail />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:id" element={<BoardDetail />} />
        //admin
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/notice" element={<AdminNotice />} />
        <Route path="/admin/notice/register" element={<Admin />} />
        <Route path="/admin/certificate" element={<AdminCertificate />} />
        <Route path="/admin/inspect" element={<AdminInspect />} />
        <Route path="/admin/product/:lock" element={<AdminProduct />} />
        <Route path="/admin/inquiry" element={<AdminInquiry />} />
        <Route path="/admin/inquiry/:id" element={<AdminInquiryDetail />} />
        <Route path="/admin/board" element={<AdminBoard />} />
        <Route path="/admin/board/:id" element={<AdminBoardDetail />} />
        <Route path="/admin/:title/upload" element={<AdminTechUpload />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
