"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const questions = [
  {
    question: "Is BLOOMIQ Velvet Oud Royal for men or women?",
    answer:
      "Velvet Oud Royal is a unisex fragrance with a rich, elegant character designed to be worn confidently by both men and women.",
  },
  {
    question: "Which bottle size should I choose?",
    answer:
      "Choose the 30 ml bottle for travel, gifting or your first BLOOMIQ experience. Choose the 50 ml bottle for regular use and better overall value.",
  },
  {
    question: "How can I place an order?",
    answer:
      "Select your preferred bottle and tap the WhatsApp order button. Our team will confirm availability, delivery details and payment information.",
  },
  {
    question: "When can I wear Velvet Oud Royal?",
    answer:
      "Velvet Oud Royal is suited to everyday wear, office occasions, celebrations, evening outings and memorable date nights.",
  },
  {
    question: "Is Velvet Oud Royal suitable for gifting?",
    answer:
      "Yes. Its unisex appeal, elegant bottle and premium presentation make it a thoughtful fragrance gift for birthdays, anniversaries and special occasions.",
  },
];

export default function FAQ() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">

      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#7A1830]/10 blur-[170px]" />
      <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[170px]" />

      <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div className="relative mx-auto max-w-4xl">

        <motion.div
          initial={{opacity:0,y:25}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.7}}
          className="text-center"
        >

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#D4AF37]">
            <HelpCircle size={24}/>
          </div>

          <p className="mt-5 text-[10px] uppercase tracking-[5px] text-[#D4AF37]">
            Need To Know
          </p>

          <h2 className="mt-4 font-heading text-3xl font-light text-white sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto mt-5 h-px w-28 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"/>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400">
            Helpful answers before choosing your BLOOMIQ fragrance.
          </p>

        </motion.div>

        <div className="mt-12 space-y-4">

          {questions.map((item,index)=>(

            <motion.details
              key={item.question}
              initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:index*0.06}}
              className="group overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 open:border-[#D4AF37]/35 open:bg-[#D4AF37]/[0.04]"
            >

              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5">

                <div className="flex items-center gap-4">

                  <span className="text-[10px] tracking-[3px] text-[#D4AF37]">
                    {String(index+1).padStart(2,"0")}
                  </span>

                  <span className="text-left text-sm font-medium leading-6 text-white sm:text-base">
                    {item.question}
                  </span>

                </div>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D4AF37]/25 text-xl text-[#D4AF37] transition-all duration-300 group-open:rotate-45 group-open:bg-[#D4AF37] group-open:text-black">
                  +
                </span>

              </summary>

              <div className="border-t border-white/10 px-6 pb-6 pt-5">
                <p className="text-sm leading-7 text-gray-400">
                  {item.answer}
                </p>
              </div>

            </motion.details>

          ))}

        </div>

        <motion.div
          initial={{opacity:0,y:25}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.7}}
          className="mt-8 rounded-[24px] border border-[#D4AF37]/20 bg-gradient-to-r from-[#15110A] via-[#0B0B0B] to-[#170A0F] px-6 py-5 text-center"
        >

          <p className="text-sm text-gray-400">

            Still have a question?{" "}

            <a
              href="https://wa.me/916232132163?text=Hello%20BLOOMIQ%2C%20I%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#D4AF37] transition hover:text-[#F0D37A]"
            >
              Chat with the BLOOMIQ Team
            </a>

          </p>

        </motion.div>

      </div>

    </section>
  );
}