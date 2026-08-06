import React from "react";
import { Link } from "react-router-dom"; // استيراد Link للعودة السلسة
import Button from "../ui/Button";
import Container from "../components/Container";
import { useLanguage } from "../context/LanguageProvider"; // تم تصحيح المسار واسم الملف

export default function PremiumPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white py-20">
      <Container>
        <div className="max-w-4xl mx-auto rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 p-12 text-center">
          
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            {lang === 'ar' ? 'خطط إيكوينوكس بريميوم' : 'Equinox Premium Plans'}
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
            {lang === 'ar'
              ? 'احصل على صلاحيات غير محدودة، أدوات تحكم متقدمة، ودعم فني خاص لسيرفرك.'
              : 'Unlock unlimited features, advanced moderation tools, and priority support for your server.'}
          </p>

          {/* صندوق السعر والاشتراك */}
          <div className="bg-gray-900/60 border border-gray-800 p-8 rounded-2xl max-w-md mx-auto mb-10 text-right">
            <div className="flex justify-between items-center mb-4">
              <span className="text-indigo-400 font-bold">الاشتراك الشهري</span>
              <span className="text-2xl font-black">$4.99 / مو</span>
            </div>
            <ul className="text-gray-400 text-sm space-y-3 mb-8">
              <li>✔️ جميع مميزات البوت المتقدمة</li>
              <li>✔️ لوحة تحكم خاصة وسريعة</li>
              <li>✔️ دعم فني على مدار الساعة</li>
            </ul>

            {/* زر الدفع المباشر */}
            <div className="text-center">
              {/* <Button href="https://buy.stripe.com/test_fZu9AV6DL41L7G5droeZ200">
                {lang === 'ar' ? 'الدفع السريع (stripe)' : 'Fast Checkout (stripe)'}
              </Button> */}
            </div>
          </div>

          {/* استبدال a بـ Link لضمان عدم حدوث ريفريش */}
          <Link to="/" className="text-gray-500 hover:text-white transition text-sm">
            {lang === 'ar' ? '← العودة إلى الصفحة الرئيسية' : '← Back to Home'}
          </Link>

        </div>
      </Container>
    </div>
  );
}