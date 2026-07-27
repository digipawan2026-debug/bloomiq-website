import {
  BriefcaseBusiness,
  Crown,
  Gift,
  Heart,
  Sparkles,
  Sun,
} from "lucide-react";

const highlights = [
  {
    title: "Daily Wear",
    text: "A refined fragrance that complements your everyday confidence.",
    icon: Sun,
  },
  {
    title: "Office Ready",
    text: "Elegant and balanced for professional environments.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Party Nights",
    text: "Warm, rich notes that stand out at celebrations and evening events.",
    icon: Sparkles,
  },
  {
    title: "Date Nights",
    text: "Crafted to leave a memorable impression on special evenings.",
    icon: Heart,
  },
  {
    title: "Perfect Gift",
    text: "An elegant choice for birthdays, anniversaries and festive occasions.",
    icon: Gift,
  },
  {
    title: "Luxury Feel",
    text: "Premium presentation created for a refined fragrance experience.",
    icon: Crown,
  },
];

export default function ProductHighlights() {
  return (
    <section className="relative overflow-hidden bg-[#080706] px-6 py-24 sm:px-8 lg:px-20 lg:py-32">
      {/* Background effects */}

      <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-[#7a1830]/15 blur-[140px]" />

      <div className="absolute bottom-0 right-[-100px] h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[7px] text-[#D4AF37] sm:text-sm">
            Made For Every Occasion
          </p>

          <h2 className="mt-6 text-4xl font-light leading-tight text-white sm:text-5xl lg:text-7xl">
            One Fragrance.
            <br />
            Endless Moments.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            From everyday confidence to unforgettable celebrations, Velvet Oud
            Royal is designed to complement every meaningful moment.
          </p>
        </div>

        {/* Highlight cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-[0_24px_80px_rgba(212,175,55,0.12)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_55%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] transition-all duration-500 group-hover:scale-110 group-hover:border-[#D4AF37]/60 group-hover:shadow-[0_0_35px_rgba(212,175,55,0.2)]">
                    <Icon size={25} strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 text-2xl font-light text-white">
                    {item.title}
                  </h3>

                  <div className="mt-4 h-px w-12 bg-[#D4AF37]/60 transition-all duration-500 group-hover:w-24" />

                  <p className="mt-5 leading-8 text-gray-400">{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom statement */}

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-xl font-light leading-9 text-gray-300 sm:text-2xl">
            Wear it to work. Wear it to celebrate.
            <br />
            Wear it whenever you want to be remembered.
          </p>

          <a
            href="#collection"
            className="mt-9 inline-flex rounded-full bg-[#D4AF37] px-9 py-4 text-sm font-bold uppercase tracking-[2px] text-black transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#E8C866] hover:shadow-[0_0_35px_rgba(212,175,55,0.4)]"
          >
            Choose Your Bottle
          </a>
        </div>
      </div>
    </section>
  );
}