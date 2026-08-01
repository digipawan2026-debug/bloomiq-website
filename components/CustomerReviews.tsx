"use client";

const reviews = [
  {
    name: "Verified Customer",
    source: "Customer Feedback",
    text: "Amazing fragrance with great longevity and a premium feel. Loved the quality and packaging of the bottle also. Definitely worth trying — highly recommended.",
  },
  {
    name: "@manish2458",
    source: "Instagram",
    rating: 5,
    text: "Excellent perfume BLOOMIQ. Loved the name, packing, perfume — everything.",
  },
  {
    name: "@richiee_dancefitness_studio",
    source: "Instagram",
    text: "BLOOMIQ perfume is really amazing. The fragrance is superb, long-lasting and stays fresh for hours. It feels elegant and refreshing, perfect for everyday use. Highly recommended.",
  },
];

export default function CustomerReviews() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#070707] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-16 lg:py-28"
    >
      {/* Background luxury glow */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[430px] w-[430px] rounded-full bg-[#7A1830]/10 blur-[170px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[430px] w-[430px] rounded-full bg-[#D4AF37]/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] uppercase tracking-[5px] text-[#D4AF37] sm:text-xs">
            Real Experiences
          </p>

          <h2 className="mt-4 font-heading text-3xl font-light sm:text-4xl lg:text-5xl">
            Loved by Our Customers
          </h2>

          <div className="mx-auto mt-5 h-px w-28 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Genuine impressions from customers who have experienced
            BLOOMIQ Velvet Oud Royal.
          </p>
        </div>

        {/* Review Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="relative rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/35"
            >
              <div className="font-heading text-4xl text-[#D4AF37]">
                “
              </div>

              {review.rating === 5 && (
                <div
                  className="mb-4 text-sm tracking-[3px] text-[#D4AF37]"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </div>
              )}

              <p className="text-sm leading-7 text-gray-300">
                {review.text}
              </p>

              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="text-sm font-semibold text-white">
                  {review.name}
                </p>

                <p className="mt-1 text-xs uppercase tracking-[2px] text-[#D4AF37]">
                  {review.source}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-6 text-gray-500">
          Reviews reflect individual customer experiences.
        </p>

      </div>
    </section>
  );
}