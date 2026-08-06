import React from 'react';

export default function Hero() {
  return (
    <header className="relative overflow-hidden pt-20 pb-12 px-6 text-center lg:pt-24 lg:pb-16 bg-[#0b0c10]">
      {/* الخلفية المتدرجة */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-40">
        <div className="w-[600px] h-[600px] bg-indigo-950/30 rounded-full blur-[150px]"></div>
        <div className="w-[500px] h-[500px] bg-purple-950/30 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* شارة الإشعارات */}
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 shadow-inner">
          ✨ البوت الأقوى لإدارة وسيرفرات الديسكورد
        </span>

        {/* العنوان الرئيسي */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight text-white">
          ارفع مستوى سيرفرك مع <br />
          <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Equinox Bot
          </span>
        </h1>

        {/* الوصف */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          نظام حماية متطور، أدوات تفاعلية، وأداء فائق السرعة يدير مجتمعك بكل احترافية وسهولة.
        </p>

        {/* أزرار الإجراء */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition shadow-2xl shadow-indigo-600/40 text-center transform hover:-translate-y-0.5"
          >
            أضف البوت الآن 🚀
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium border border-gray-700 transition text-center transform hover:-translate-y-0.5"
          >
            استكشف المميزات
          </a>
        </div>

        {/* معاينة البانر بحجم مضغوط ومتناسق */}
        <div className="pt-12 flex justify-center">
          <img
            src="/banner.png"
            alt="Equinox Bot Dashboard Preview"
            className="rounded-2xl border border-gray-800 shadow-2xl w-full max-w-2xl object-cover"
          />
        </div>
      </div>
    </header>
  );
}