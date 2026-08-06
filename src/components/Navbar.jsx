import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800/60 backdrop-blur-md sticky top-0 z-50 bg-[#0b0c10]/80">
      
      {/* قسم اللوقو والاسم */}
      <div className="flex items-center gap-3">
        <img 
          src="/logo.png" 
          alt="Equinox Logo" 
          className="w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] max-w-[2.5rem] max-h-[2.5rem] rounded-xl object-cover shrink-0 shadow-lg shadow-indigo-500/30" 
        />
        <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-white via-gray-200 to-indigo-400 bg-clip-text text-transparent select-none">
          EQUINOX
        </span>
      </div>

      {/* روابط التنقل */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <a href="#features" className="hover:text-indigo-400 transition">المميزات</a>
        <a href="#stats" className="hover:text-indigo-400 transition">الإحصائيات</a>
        <a href="#dashboard" className="hover:text-indigo-400 transition">لوحة التحكم</a>
      </div>

      {/* زر إضافة البوت */}
      <div>
        <a
          href="https://discord.com"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition shadow-lg shadow-indigo-600/30 inline-block"
        >
          إضافة البوت
        </a>
      </div>

    </nav>
  );
}