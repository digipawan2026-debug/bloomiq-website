const promises = [
  "Premium Luxury Experience",
  "Elegant Gift Presentation",
  "Responsive Customer Support",
  "Secure Product Packaging",
  "Designed for Everyday Confidence",
  "Affordable Luxury Pricing",
];

export default function BrandPromise() {
  return (
    <section className="bg-[#050505] py-24 px-6 lg:px-20">

      <div className="max-w-5xl mx-auto">

        <div className="text-center">

          <p className="uppercase tracking-[7px] text-[#D4AF37] text-sm">
            Our Promise
          </p>

          <h2 className="mt-6 text-5xl font-light text-white">
            Why Choose BLOOMIQ
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-16">

          {promises.map((item) => (

            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-[#D4AF37]/40 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">

                <div className="h-10 w-10 rounded-full bg-[#D4AF37] text-black flex items-center justify-center font-bold">
                  ✓
                </div>

                <p className="text-lg text-white">
                  {item}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}