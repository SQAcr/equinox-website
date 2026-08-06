import React from "react";
const faqs = [
  {
    q: "هل البوت مجاني؟",
    a: "نعم، معظم المميزات مجانية."
  },
  {
    q: "هل يوجد لوحة تحكم؟",
    a: "نعم، سيتم إطلاقها قريبًا."
  },
  {
    q: "هل يدعم اللغة العربية؟",
    a: "يدعم العربية والإنجليزية."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-center text-5xl font-black mb-16 text-white">
          الأسئلة الشائعة
        </h2>

        <div className="space-y-5">

          {faqs.map((faq) => (

            <div
              key={faq.q}
              className="rounded-2xl border border-gray-800 bg-[#151822] p-6"
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