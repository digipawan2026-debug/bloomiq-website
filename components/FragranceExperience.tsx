const notes = [
  {
    label: "Top Notes",
    notes: "Citrus • Bergamot • Saffron",
    description:
      "A bright and confident opening that immediately feels refined and memorable.",
    width: "max-w-md",
  },
  {
    label: "Heart Notes",
    notes: "Rose • Jasmine • Warm Spices",
    description:
      "A rich floral heart with elegant warmth, depth and sophisticated character.",
    width: "max-w-xl",
  },
  {
    label: "Base Notes",
    notes: "Oud • Amber • Musk • Vanilla",
    description:
      "A smooth, luxurious finish designed to leave a deep and lasting impression.",
    width: "max-w-2xl",
  },
];

export default function FragranceExperience() {
  return (
    <section
      id="fragrance"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 text-white sm:px-8 lg:px-20 lg:py-32"
    >
      {/* Background glow */}

      <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[190px]" />

      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-[#78162d]/15 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[7px] text-[#D4AF37] sm:text-sm">
            The Fragrance Journey
          </p>

          <h2 className="mt-6 text-4xl font-light leading-tight sm:text-5xl lg:text-7xl">
            Discover Velvet Oud Royal
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            A layered fragrance experience that evolves beautifully from a
            vibrant opening to a warm, unforgettable finish.
          </p>
        </div>

        {/* Pyramid */}

        <div className="mt-20 flex flex-col items-center gap-6">
          {notes.map((item, index) => (
            <div
              key={item.label}
              className={`${item.width} group relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-r from-white/[0.03] via-white/[0.06] to-white/[0.03] px-6 py-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-[0_20px_80px_rgba(212,175,55,0.12)] sm:px-10 sm:py-10`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_60%)] opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-lg text-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.18)]">
                  {index + 1}
                </div>

                <p className="mt-5 text-xs uppercase tracking-[6px] text-[#D4AF37]">
                  {item.label}
                </p>

                <h3 className="mt-4 text-2xl font-light tracking-wide text-white sm:text-3xl">
                  {item.notes}
                </h3>

                <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing message */}

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

          <p className="mt-8 text-2xl font-light leading-relaxed text-white sm:text-3xl">
            Crafted to create confidence,
            <br />
            elegance and unforgettable presence.
          </p>

          <a
            href="#collection"
            className="mt-9 inline-flex rounded-full border border-[#D4AF37] px-9 py-4 text-sm font-semibold uppercase tracking-[2px] text-[#D4AF37] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]"
          >
            Choose Your Bottle
          </a>
        </div>
      </div>
    </section>
  );
}