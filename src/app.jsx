import React from "react";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Footer from "./layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}