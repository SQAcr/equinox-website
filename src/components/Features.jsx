import React from 'react';

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold">لماذا تختـار <span className="text-indigo-400">Equinox</span>؟</h2>
        <p className="text-gray-400 max-w-xl mx-auto">مواصفات وتقنيات حديثة صُممت خصيصاً لتمنح سيرفرك تجربة استثنائية.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-2xl bg-gray-900/40 border border-gray-800/80 hover:border-indigo-500/50 transition">
          <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center text-xl font-bold mb-4">🛡️</div>
          <h3 className="text-xl font-bold mb-2">حماية متقدمة</h3>
          <p className="text-gray-400 text-sm">نظام حماية ضد السبام والهجمات الوهمية لضمان أمان تام لمجتمعك.</p>
        </div>
        <div className="p-8 rounded-2xl bg-gray-900/40 border border-gray-800/80 hover:border-purple-500/50 transition">
          <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center text-xl font-bold mb-4">⚡</div>
          <h3 className="text-xl font-bold mb-2">سرعة فائقة</h3>
          <p className="text-gray-400 text-sm">استجابة فورية للأوامر دون أي تأخير بفضل البنية التحتية القوية.</p>
        </div>
        <div className="p-8 rounded-2xl bg-gray-900/40 border border-gray-800/80 hover:border-pink-500/50 transition">
          <div className="w-12 h-12 rounded-xl bg-pink-600/20 text-pink-400 flex items-center justify-center text-xl font-bold mb-4">📊</div>
          <h3 className="text-xl font-bold mb-2">لوحة تحكم ذكية</h3>
          <p className="text-gray-400 text-sm">تحكم كامل بإعدادات السيرفر والبوت بكل مرونة وسهولة من مكان واحد.</p>
        </div>
      </div>
    </section>
  );
}