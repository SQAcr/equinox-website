import React from 'react';

export default function Hero() {
  return (
    <header className="relative overflow-hidden py-24 px-6 text-center lg:py-32">
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px]"></div>
        <div className="w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          ✨ البوت الأطراف والأقوى لسيرفرات الديسكورد
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          ارفع مستوى سيرفرك مع <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Equinox Bot
          </span>
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
          نظام حماية متطور، أدوات تفاعلية، وأداء فائق السرعة يدير مجتمعك بكل احترافية وسهولة.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="https://discord.com"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition shadow-xl shadow-indigo-600/30 text-center"
          >
            أضف البوت الآن 🚀
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-300 font-semibold border border-gray-800 transition text-center"
          >
            استكشف المميزات
          </a>
        </div>

        {/* Banner Preview */}
        <div className="pt-10">
          <img src="/banner.png" alt="Equinox Banner" className="rounded-2xl border border-gray-800 shadow-2xl mx-auto max-h-[400px] object-cover" />
        </div>
      </div>
    </header>
  );
}