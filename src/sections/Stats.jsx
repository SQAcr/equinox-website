import React from "react";
import StatCard from "../ui/StatCard";
import { useLanguage } from "../context/LanguageContext"; // استيراد سياق اللغة

export default function Stats() {
  const { t } = useLanguage();

  // جلب النصوص والإحصائيات من ملف الترجمة أو استخدام قيم افتراضية
  const statsData = t.stats || {
    title: "Equinox in Numbers",
    subtitle: "High performance and stability at the highest level.",
    items: [
      { icon: "🤖", value: "50+", title: "Commands" },
      { icon: "⚡", value: "99.9%", title: "Uptime" },
      { icon: "🛡️", value: "24/7", title: "Protection" },
      { icon: "🌍", value: "1000+", title: "Servers" },
    ]
  };

  return (
    <section id="stats" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white">
            {statsData.title}
          </h2>
          <p className="text-gray-400 mt-4">
            {statsData.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.items.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              title={stat.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}