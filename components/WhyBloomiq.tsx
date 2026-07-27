export default function WhyBloomiq() {
  const features = [
    {
      title: "Long Lasting",
      text: "Crafted to stay with you from morning meetings to evening celebrations.",
      icon: "⏳",
    },
    {
      title: "Premium Ingredients",
      text: "Carefully selected fragrance oils for a luxurious scent experience.",
      icon: "✨",
    },
    {
      title: "Affordable Luxury",
      text: "Experience premium perfumery without the premium price tag.",
      icon: "💎",
    },
    {
      title: "Unisex Fragrance",
      text: "A sophisticated scent created for both men and women.",
      icon: "🌿",
    },
  ];

  return (
    <section className="bg-[#050505] py-28 px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-[#D4AF37]">
            WHY BLOOMIQ
          </p>

          <h2 className="mt-6 text-6xl font-light text-white">
            Luxury Without Compromise
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
            Every bottle is designed to deliver elegance, confidence,
            and a memorable fragrance experience.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[#D4AF37]/20 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#D4AF37]"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="mt-6 text-2xl text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}