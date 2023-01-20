import React from "react";

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoanPage from "./pages/LoanPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="bg-[#f5f4ff] h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="loan" element={<LoanPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
