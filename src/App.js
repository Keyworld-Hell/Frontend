import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";

import "./assets/css/index.css";
import "./assets/css/home.css";
import "./assets/css/layout.css";
import "./assets/css/company.css";
import "./assets/css/technology.css";
import "./assets/css/inquiry.css";
import "./assets/css/board.css";

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

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/future" element={<Future />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/certificate" element={<Certificate />} />
        <Route path="/inspect" element={<Inspect />} />

        <Route path="/inquiry" element={<Inquiry />} />

        <Route path="/board" element={<Board />} />
        <Route path="/board/:id" element={<BoardDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
