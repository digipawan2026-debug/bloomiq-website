const questions = [
  {
    question: "Is BLOOMIQ Velvet Oud for men or women?",
    answer:
      "Velvet Oud is designed as a unisex fragrance. Its rich, elegant character can be worn confidently by both men and women.",
  },
  {
    question: "Which size should I choose?",
    answer:
      "The 30 ml bottle is ideal for first-time buyers, gifting and travel. The 50 ml bottle offers better overall value for regular use.",
  },
  {
    question: "How can I place an order?",
    answer:
      "Select your preferred bottle and tap the WhatsApp order button. The BLOOMIQ team can confirm availability, delivery information and payment details.",
  },
  {
  question: "When can I wear Velvet Oud Royal?",
  answer:
    "BLOOMIQ Velvet Oud Royal is ideal for daily wear, office days, parties and unforgettable date nights. It is also a thoughtful luxury gift for someone you love.",
},
];

export default function FAQ() {
  return (
    <section className="bg-[#050505] px-6 py-24 sm:px-8 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[7px] text-[#D4AF37]">
            Need To Know
          </p>

          <h2 className="mt-6 text-4xl font-light text-white sm:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-500">
            Everything you need to know before choosing your BLOOMIQ fragrance.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {questions.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 open:border-[#D4AF37]/40 sm:px-8"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg text-white">
                <span>{item.question}</span>

                <span className="text-2xl font-light text-[#D4AF37] transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="max-w-3xl pb-2 pt-5 leading-8 text-gray-400">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}