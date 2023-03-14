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
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
