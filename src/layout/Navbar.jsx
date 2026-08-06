import React from "react";
import Container from "./Container";
import Button from "../ui/Button";
import { useLanguage } from "../context/LanguageContext"; // استيراد سياق اللغة

export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800/60 bg-[#0b0c10]/80 backdrop-blur-xl">
      <Container className="flex items-center justify-between h-20">
        
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/logo2.png"
            alt="Equinox"
            className="w-11 h-11 rounded-xl"
          />
          <div>
            <h1 className="text-white font-black text-xl">
              EQUINOX
            </h1>
            <p className="text-xs text-gray-500">
              {lang === 'ar' ? 'بوت ديسكورد' : 'Discord Bot'}
            </p>
          </div>
        </div>

        {/* Links */}
        <nav className="hidden lg:flex gap-10 text-gray-400 font-medium">
          <a
            href="#features"
            className="hover:text-white transition"
          >
            {t.nav?.features || "Features"}
          </a>
          <a
            href="#commands"
            className="hover:text-white transition"
          >
            {t.nav?.commands || "Commands"}
          </a>
          <a
            href="#stats"
            className="hover:text-white transition"
          >
            {t.nav?.statistics || "Statistics"}
          </a>
          <a
            href="#faq"
            className="hover:text-white transition"
          >
            {t.nav?.faq || "FAQ"}
          </a>
        </nav>

        {/* Actions (Language Switcher & Add Bot Button) */}
        <div className="flex items-center gap-4">
          {/* زر تبديل اللغة */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-2 rounded-xl bg-gray-800/80 border border-gray-700 hover:bg-gray-700 transition text-xs font-bold text-white"
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