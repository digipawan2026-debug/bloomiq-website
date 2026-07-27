"use client";

import { motion } from "framer-motion";

const products = [
  {
    size: "30 ML",
    image: "/perfume30.jpeg",
    oldPrice: "₹749",
    price: "₹459",
    description: "Perfect for travel, gifting and everyday luxury.",
  },
  {
    size: "50 ML",
    image: "/perfume50.jpeg",
    oldPrice: "₹999",
    price: "₹599",
    description: "The complete Velvet Oud Royal fragrance experience.",
  },
];

export default function ProductShowcase() {
  return (
    <section
      id="collection"
      className="relative overflow-hidden bg-black py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(202,160,54,0.10),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-yellow-500">
            Discover The Collection
          </p>

          <h2 className="text-4xl font-light sm:text-5xl">
            Choose Your Signature Size
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-400">
            Experience the richness of Velvet Oud Royal in two elegant sizes.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {products.map((product, index) => (
            <motion.div
              key={product.size}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group rounded-3xl border border-yellow-500/20 bg-zinc-950 p-8 text-center transition hover:border-yellow-500/50"
            >
              <div className="relative mx-auto flex h-[400px] items-center justify-center">
                <div className="absolute h-52 w-52 rounded-full bg-yellow-500/10 blur-3xl" />

                <img
                  src={product.image}
                  alt={`BLOOMIQ Velvet Oud Royal ${product.size}`}
                  className="relative z-10 max-h-[360px] w-auto object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              <p className="mt-6 text-xs uppercase tracking-[0.35em] text-yellow-500">
                Velvet Oud Royal
              </p>

              <h3 className="mt-3 text-3xl font-light">{product.size}</h3>

              <p className="mx-auto mt-4 max-w-md text-zinc-400">
                {product.description}
              </p>

              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="text-zinc-500 line-through">
                  {product.oldPrice}
                </span>

                <span className="text-3xl font-semibold">{product.price}</span>
              </div>

              <a
                href="https://wa.me/916232132163"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
              >
                Order on WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}