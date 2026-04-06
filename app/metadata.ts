import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "LucenEdge — Full-Spectrum Business Engineering",
    template: "%s | LucenEdge",
  },
  description:
    "From code to capital, from people to intelligence — LucenEdge powers every layer of your business. Software Dev, AI/ML, Automation, Web & Mobile, Accounting, and Staffing services.",
  keywords: [
    "software development", "AI services", "ML engineering", "automation services",
    "web app development", "mobile app development", "accounting services",
    "IT staffing", "staff augmentation", "RPA", "machine learning", "LucenEdge",
  ],
  authors: [{ name: "LucenEdge" }],
  creator: "LucenEdge",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lucenedge.com",
    siteName: "LucenEdge",
    title: "LucenEdge — Full-Spectrum Business Engineering",
    description: "Seven service domains. One integrated partner. Built to transform every layer of your business.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LucenEdge — Full-Spectrum Business Engineering",
    description: "Software, AI, Automation, Web & Mobile, Accounting, and Staffing — engineered to transform your business.",
    creator: "@lucenedge",
  },
  robots: {
    index: true,
    follow: true,
  },
};
