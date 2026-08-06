import React from "react";
import Button from "../ui/Button";
import { useLanguage } from "../context/LanguageProvider"; // تم تعديل اسم الملف ليكون صحيحاً

export default function Premium() {
    const { lang } = useLanguage();

    return (
        <section id="premium" className="py-28 px-6">
            <div className="max-w-6xl mx-auto rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 p-16 text-center">

                <h2 className="text-5xl font-black text-white">
                    {lang === 'ar' ? 'تجربة بريميوم' : 'Premium Experience'}
                </h2>

                <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                    {lang === 'ar'
                        ? 'قريبا...'
                        : 'Soon.'}
                </p>

                <div className="mt-10 flex justify-center gap-4 flex-wrap">
                    {/* زر التوجيه لرابط الدفع (مثل Stripe / Apple Pay) */}
                </div>

            </div>
        </section>
    );
}