import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-gray-100 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}