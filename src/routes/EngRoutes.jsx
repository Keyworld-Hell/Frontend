import React from "react";
import { Route, Routes } from "react-router-dom";

import HomeEng from "../pages/HomeEng";
import GreetingEng from "../pages/eng/company/GreetingsEng";
import OrganizationEng from "../pages/eng/company/OrganizationEng";
import FutureEng from "../pages/eng/company/FutureEng";
import ContactEng from "../pages/eng/company/ContactEng";
import CertificateEng from "../pages/eng/technology/CertificateEng"
import InspectEng from "../pages/eng/technology/InspectEng";
import ProductEng from "../pages/eng/product/ProductEng";
import ProductDetailEng from "../pages/eng/product/ProductDetailEng";
import InquiryEng from "../pages/eng/inquiry/InquiryEng";
import BoardEng from "../pages/eng/board/BoardEng";
import BoardDetailEng from "../pages/eng/board/BoardDetailEng";
import HeaderEng from "../components/layout/HeaderEng";
import Footer from "../components/layout/Footer";


const EngRoutes = () => {
  return (
    <>
      <HeaderEng />
      <Routes>
        <Route path="/" element={<HomeEng />} />
        <Route path="/intro" element={<GreetingEng />} />
        <Route path="/organization" element={<OrganizationEng />} />
        <Route path="/future" element={<FutureEng />} />
        <Route path="/contact" element={<ContactEng />} />
        <Route path="/certificate" element={<CertificateEng/>} />
        <Route path="/inspect" element={<InspectEng />} />
        <Route path="/product/:lock" element={<ProductEng/>} />
        <Route path="/product/:lock/:id" element={<ProductDetailEng/>} />
        <Route path="/inquiry" element={<InquiryEng />} />
        <Route path="/board" element={<BoardEng />} />
        <Route path="/board/:id" element={<BoardDetailEng/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default EngRoutes;
