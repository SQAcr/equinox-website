import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
import Premium from "./sections/Premium";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          {/* الصفحة الرئيسية */}
          <Route path="/" element={<Home />} />

          {/* صفحة البريميوم */}
          <Route path="/premium" element={<Premium />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}