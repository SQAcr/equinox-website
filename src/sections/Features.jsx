import React from "react";
import Card from "../ui/Card";
import { useLanguage } from "../context/LanguageProvider";

export default function Features() {
  const { t } = useLanguage();

  // جلب المميزات من الترجمة الحالية أو استخدام مصفوفة افتراضية
  const features = t.features?.items || [
    {
      icon: "🛡️",
      title: "Advanced Protection",
      description: "Powerful anti-spam and security systems with integrated management tools."
    },
    {
      icon: "💰",
      title: "Integrated Economy",
      description: "Currency system, transfers, daily rewards, and leaderboards."
    },
    {
      icon: "🎮",
      title: "Interactive Games",
      description: "A set of games to boost server activity and keep the community engaged."
    },
    {
      icon: "💬",
      title: "Auto Responses",
      description: "Create and manage custom automated replies with ease."
    },
    {
      icon: "📿",
      title: "Islamic Features",
      description: "Daily Azkar reminders with flexible server configurations."
    },
    {
      icon: "⚡",
      title: "High Performance",
      description: "Lightning-fast response and high stability even for large servers."
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white">
            {t.features?.title || "Why Equinox?"}
          </h2>
          <p className="text-gray-400 mt-4">
            {t.features?.subtitle || "All the tools you need to manage your community in one place."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="text-start md:text-center">
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