import React from "react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { useLanguage } from "../context/LanguageProvider";

export default function Hero() {
    const { t } = useLanguage(); // جلب النصوص المترجمة بناءً على اللغة الحالية

    return (
        <section className="relative overflow-hidden py-28 px-6">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-indigo-600/10 blur-[180px]" />
                <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-purple-600/10 blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Text */}
                <div>
                    <Badge>
                        {t.hero.badge}
                    </Badge>

                    <h1 className="mt-6 text-4xl lg:text-5xl font-black leading-tight text-white">
                        {t.hero.title1}
                        <br />
                        <span className="text-indigo-400">
                            {t.hero.title2}
                        </span>
                        <br />
                        {t.hero.title3}
                    </h1>

                    <p className="mt-8 text-lg text-gray-400 leading-8">
                        {t.hero.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-10">
                        <Button href="https://discord.com/oauth2/authorize?client_id=1516730797196054678&permissions=1101936257278&integration_type=0&scope=bot+applications.commands">
                            {t.hero.addToDiscord}
                        </Button>

                    <Button
                        href="#commands"
                        variant="secondary"
                    >
                        {t.hero.viewCommands}
                    </Button>
                </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
                <img
                    src="/about.png"
                    alt="Equinox Dashboard"
                    className="w-full max-w-2xl rounded-3xl border border-gray-800 shadow-2xl"
                />
            </div>
        </div>
    </section >
  );
}