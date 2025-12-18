export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Spark Apex",
  description: "Transform your business with cutting-edge IT solutions. From custom software development to digital transformation, we deliver innovative technology solutions.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "IT Consulting",
    "Software Development",
    "Digital Transformation",
    "Systems Integration",
    "Web Development",
    "Enterprise Solutions",
    "Cloud Services",
    "IT Strategy",
    "Business Technology",
    "Custom Software"
  ],
  links: {
    email: "support@spark-apex.com",
    twitter: "",
    discord: "",
    instagram: "",
  },
  navItems: [
    {
      href: "/docs",
      title: "Docs",
    },
    {
      href: "/components",
      title: "Components",
    },
    {
      href: "/pro",
      title: "Templates",
    },
    {
      href: "/blog",
      title: "Blog",
    },
  ],
  header: [
    {
      href: "/docs",
      label: "Docs",
    },
    {
      href: "/components",
      label: "Components",
    },
    {
      href: "/pro",
      label: "Templates",
    },
    {
      href: "/blog",
      label: "Blog",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
