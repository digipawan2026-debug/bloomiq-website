export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://bloomiq.in/#organization",

  name: "BLOOMIQ",

  url: "https://bloomiq.in",

  logo: {
    "@type": "ImageObject",
    url: "https://bloomiq.in/icon.png",
  },

  image: "https://bloomiq.in/og-image.jpeg",

  description:
    "BLOOMIQ is an Indian affordable luxury fragrance brand creating premium long-lasting unisex Eau de Parfum for everyday confidence, office wear, daily wear, parties, date nights, gifting and special occasions.",

  email: "hello@bloomiq.in",

  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-62321-32163",
    contactType: "customer support",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },

  sameAs: [
    "https://www.instagram.com/bloomiqluxury",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://bloomiq.in/#website",

  url: "https://bloomiq.in",

  name: "BLOOMIQ",

  alternateName: "BLOOMIQ Luxury Fragrances",

  description:
    "Official BLOOMIQ website featuring premium long-lasting affordable luxury perfumes.",

  publisher: {
    "@id": "https://bloomiq.in/#organization",
  },

  inLanguage: "en-IN",
};

export const productSchema = {
  "@context": "https://schema.org",

  "@type": "Product",

  "@id": "https://bloomiq.in/#velvet-oud-royal",

  name: "BLOOMIQ Velvet Oud Royal",

  brand: {
    "@type": "Brand",
    name: "BLOOMIQ",
  },

  category: "Perfume",

  image: [
    "https://bloomiq.in/perfume50.jpeg",
    "https://bloomiq.in/perfume30.jpeg",
  ],

  description:
    "BLOOMIQ Velvet Oud Royal is a premium long-lasting unisex Eau de Parfum crafted in India for office wear, daily wear, parties, date nights, gifting and unforgettable occasions.",

  countryOfOrigin: "India",

  audience: {
    "@type": "PeopleAudience",
    suggestedGender: "Unisex",
  },

  offers: [
    {
      "@type": "Offer",
      price: "599",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      url: "https://bloomiq.in",
    },
    {
      "@type": "Offer",
      price: "459",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      url: "https://bloomiq.in",
    },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "Is BLOOMIQ Velvet Oud Royal suitable for men and women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. BLOOMIQ Velvet Oud Royal is a premium unisex Eau de Parfum.",
      },
    },
    {
      "@type": "Question",
      name: "Is BLOOMIQ long lasting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. BLOOMIQ is designed to provide a premium long-lasting fragrance experience.",
      },
    },
    {
      "@type": "Question",
      name: "When can I wear BLOOMIQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BLOOMIQ is suitable for office wear, daily wear, parties, evening outings, weddings, date nights and gifting.",
      },
    },
    {
      "@type": "Question",
      name: "Where is BLOOMIQ made?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BLOOMIQ fragrances are crafted in India.",
      },
    },
  ],
};