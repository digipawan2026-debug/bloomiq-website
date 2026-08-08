import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.bloomiq.in/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://www.bloomiq.in/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.bloomiq.in/blog/how-to-choose-office-perfume-indian-weather",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
  url: "https://www.bloomiq.in/editorial-policy",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.5,
},
{
  url: "https://www.bloomiq.in/blog/edt-vs-edp-parfum-extrait-indian-weather",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.9,
},
{
  url: "https://www.bloomiq.in/blog/how-to-choose-long-lasting-perfume",
  lastModified: new Date(),
  changeFrequency: "monthly",
  priority: 0.9,
},
  ];
}