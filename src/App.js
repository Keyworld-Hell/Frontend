import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import ScrollToTop from "./components/layout/ScrollTop";
import Header from "./components/layout/Header";

import "./assets/css/admin.css";
import "./assets/css/index.css";
import "./assets/css/home.css";
import "./assets/css/layout.css";
import "./assets/css/company.css";
import "./assets/css/technology.css";
import "./assets/css/inquiry.css";
import "./assets/css/board.css";
import "./assets/css/product.css";

import AdminHeader from "./components/layout/AdminHeader";
import Footer from "./components/layout/Footer";
import AdminRoutes from "./routes/AdminRoutes";
import MainRoutes from "./routes/MainRoutes";
import TopButton from "./components/layout/TopButton";

function App() {
  return (
    <>
      <ScrollToTop />
        <Routes>
          <Route path="/*" element={<MainRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
    </>
  );
}

export default App;
