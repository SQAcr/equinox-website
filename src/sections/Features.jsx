import React from "react";
import Card from "../ui/Card";

const features = [
  {
    icon: "🛡️",
    title: "حماية متقدمة",
    description:
      "أنظمة حماية قوية ضد السبام والهجمات مع أدوات إدارة متكاملة."
  },
  {
    icon: "💰",
    title: "اقتصاد متكامل",
    description:
      "نظام عملات، تحويلات، مكافآت يومية ولوحة للأغنى."
  },
  {
    icon: "🎮",
    title: "ألعاب تفاعلية",
    description:
      "مجموعة ألعاب تزيد تفاعل أعضاء السيرفر وتجعل المجتمع أكثر نشاطًا."
  },
  {
    icon: "💬",
    title: "ردود تلقائية",
    description:
      "إنشاء وإدارة ردود تلقائية بسهولة تامة."
  },
  {
    icon: "📿",
    title: "الأذكار",
    description:
      "إرسال الأذكار اليومية مع إعدادات مرنة لكل سيرفر."
  },
  {
    icon: "⚡",
    title: "أداء سريع",
    description:
      "استجابة سريعة واستقرار عالي حتى مع السيرفرات الكبيرة."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white">
            لماذا Equinox؟
          </h2>

          <p className="text-gray-400 mt-4">
            كل الأدوات التي تحتاجها لإدارة مجتمعك في مكان واحد.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (

            <Card key={feature.title} className="text-center">

              <div className="text-5xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400">
                {feature.description}
              </p>

            </Card>

          ))}

        </div>

      </div>
    </section>
  );
}