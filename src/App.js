import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import ScrollToTop from "./components/layout/ScrollTop";
import Header from "./components/layout/Header";
import { useState } from "react";

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
import AdminLogin from "./pages/admin/AdminLogin";

import TopButton from "./components/layout/TopButton";
import EngRoutes from "./routes/EngRoutes";
import KorRoutes from "./routes/MainRoutes";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  return (
    <>
      <Routes>
        <Route
          path="/admin/*"
          element={<AdminHeader setIsNavOpen={setIsNavOpen} />}
        />
      </Routes>
      <Routes>
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/*"
          element={<AdminRoutes isNavOpen={isNavOpen} />}
        />
        <Route path="/eng/*" element={<EngRoutes />} />
        <Route path="/*" element={<KorRoutes />} />
      </Routes>
    </>
  );
}

export default App;
