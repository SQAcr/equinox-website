import React from "react";
import { useLanguage } from "../context/LanguageProvider";

export default function FAQ() {
  const { t } = useLanguage();

  // جلب الأسئلة بناءً على اللغة الحالية، أو استخدام مصفوفة افتراضية
  const faqs = t.faq?.items || [
    {
      q: "Is the bot free?",
      a: "Yes, most features are free."
    },
    {
      q: "Is there a dashboard?",
      a: "Yes, it will be launched soon."
    },
    {
      q: "Does it support Arabic?",
      a: "It supports both Arabic and English."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-5xl font-black mb-16 text-white">
          {t.faq?.title || "Frequently Asked Questions"}
        </h2>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-800 bg-[#151822] p-6 text-start"
            >
              <h3 className="text-xl font-bold text-white">
                {faq.q}
              </h3>
              <p className="text-gray-400 mt-3">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}