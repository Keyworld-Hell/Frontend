import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Greeting from "../pages/kor/company/Greetings";
import Organization from "../pages/kor/company/Organization";
import Future from "../pages/kor/company/Future";
import Contact from "../pages/kor/company/Contact";
import Certificate from "../pages/kor/technology/Certificate";
import Inspect from "../pages/kor/technology/Inspect";
import Inquiry from "../pages/kor/inquiry/Inquiry";
import Board from "../pages/kor/board/Board";
import BoardDetail from "../pages/kor/board/BoardDetail";
import Product from "../pages/kor/product/Product";
import ProductDetail from "../pages/kor/product/ProductDetail";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const MainRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Greeting />} />
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
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoutes;
