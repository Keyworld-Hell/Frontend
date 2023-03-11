import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";

import "./assets/css/index.css";
import "./assets/css/home.css";
import "./assets/css/layout.css";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greetings" element={<Home />} />
        <Route path="/organization" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
