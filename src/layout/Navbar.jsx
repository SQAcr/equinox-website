import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Container from "./Container";
import Button from "../ui/Button";
import { useLanguage } from "../context/LanguageProvider";

export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  // دالة للتعامل مع الانتقال للأقسام في الصفحة الرئيسية أو العودة لها أولاً
  const handleScrollTo = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800/60 bg-[#0b0c10]/80 backdrop-blur-xl">
      <Container className="flex items-center justify-between h-20">
        
        {/* Logo */}
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate("/")}>
          <img
            src="/logo2.png"
            alt="Equinox"
            className="w-11 h-11 rounded-xl"
          />
          <div>
            <h1 className="text-white font-black text-xl">
              Equinox
            </h1>
            <p className="text-xs text-gray-500">
              {lang === 'ar' ? 'بوت ديسكورد' : 'Discord Bot'}
            </p>
          </div>
        </div>

        {/* Links */}
        <nav className="hidden lg:flex gap-10 text-gray-400 font-medium items-center">
          <button
            onClick={() => handleScrollTo("features")}
            className="hover:text-white transition bg-transparent border-none cursor-pointer"
          >
            {t.nav?.features || "Features"}
          </button>
          <button
            onClick={() => handleScrollTo("commands")}
            className="hover:text-white transition bg-transparent border-none cursor-pointer"
          >
            {t.nav?.commands || "Commands"}
          </button>
          {/* <button
            onClick={() => handleScrollTo("stats")}
            className="hover:text-white transition bg-transparent border-none cursor-pointer"
          >
            {t.nav?.statistics || "Statistics"}
          </button> */}
          
          {/* رابط البريميوم */}
          <Link
            to="/premium"
            className="hover:text-amber-400 transition text-amber-500 font-semibold flex items-center gap-1"
          >
            ✨ {t.nav?.premium || "Premium"}
          </Link>

          <button
            onClick={() => handleScrollTo("faq")}
            className="hover:text-white transition bg-transparent border-none cursor-pointer"
          >
            {t.nav?.faq || "FAQ"}
          </button>
        </nav>

        {/* Actions (Language Switcher & Add Bot Button) */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="px-3 py-2 rounded-xl bg-gray-800/80 border border-gray-700 hover:bg-gray-700 transition text-xs font-bold text-white cursor-pointer"
          >
            {lang === 'en' ? 'العربية 🇸🇦' : 'English 🇺🇸'}
          </button>

          <Button href="https://discord.com/oauth2/authorize?client_id=1516730797196054678&permissions=1101936257278&integration_type=0&scope=bot+applications.commands">
            {t.nav?.addBot || "Add Bot"}
          </Button>
        </div>

      </Container>
    </header>
  );
}