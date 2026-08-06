import React, { useState } from "react";
import CommandCard from "../ui/CommandCard";
import Tabs from "../ui/Tabs";
import { useLanguage } from "../context/LanguageContext"; // استيراد سياق اللغة

export default function Commands() {
  const { t, lang } = useLanguage();

  // جلب بيانات الأوامر من الترجمة الحالية أو استخدام مصفوفة افتراضية
  const commandsData = t.commands?.categories || [
    {
      category: "General",
      commands: [
        { name: "/help", description: "Shows bot help menu" },
        { name: "/ping", description: "Check bot latency" }
      ]
    }
  ];

  const [active, setActive] = useState(commandsData[0].category);

  // تحديث القسم النشط تلقائياً عند تغيير اللغة إذا لزم الأمر
  const current = commandsData.find(c => c.category === active) || commandsData[0];

  return (
    <section id="commands" className="py-28 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black mb-4 text-white">
          {t.commands?.titlePrefix || "All Commands of"}
          <span className="text-indigo-400">
            {" "}Equinox
          </span>
        </h2>
        <p className="text-gray-400">
          {t.commands?.subtitle || "Over 40+ professional commands to manage your community."}
        </p>
      </div>

      <Tabs
        items={commandsData.map(c => c.category)}
        active={active}
        setActive={setActive}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {current.commands.map((cmd, index) => (
          <CommandCard
            key={index}
            command={cmd}
          />
        ))}
      </div>
    </section>
  );
}