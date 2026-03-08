import type { Metadata } from "next";
import { Inter, Montserrat, Fira_Code, Playfair_Display } from "next/font/google";
import "./globals.css";
import SystemWrapper from "./components/SystemWrapper";

const interSans = Inter({
  variable: "--font-geist-sans", // Keeping the variable name to avoid breaking CSS
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: "variable",
  fallback: ["Georgia", "serif"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
  fallback: ["system-ui", "sans-serif"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "Jacob Darling | Darling Marketing & Technology",
  description:
    "Jacob Darling is the founder of Darling Marketing & Technology LLC — combining growth marketing strategy with full-stack technical execution across healthcare, e-commerce, SaaS, and more.",
  keywords: ["marketing consultant", "marketing strategy", "full-stack developer", "growth marketing", "Jacob Darling", "Darling Marketing and Technology"],
  openGraph: {
    type: "website",
    title: "Jacob Darling | Darling Marketing & Technology",
    description:
      "Marketing strategy meets technical execution. Jacob Darling — founder of Darling Marketing & Technology LLC.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Person"],
  name: "Jacob Darling",
  description:
    "Founder of Darling Marketing & Technology LLC. Combines growth marketing strategy with full-stack technical execution across healthcare, e-commerce, SaaS, music tech, and professional education.",
  jobTitle: "Marketing Strategist & Full-Stack Developer",
  url: "https://bearcave.marketing",
  sameAs: [],
  knowsAbout: [
    "Growth Marketing",
    "Digital Marketing Strategy",
    "Full-Stack Web Development",
    "Systems Architecture",
    "E-Commerce",
    "SaaS Marketing",
    "Healthcare Technology",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interSans.variable} ${playfair.variable} ${montserrat.variable} ${firaCode.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-black text-[#f0f0f0] antialiased selection:bg-[#FFA500] selection:text-black">
        <SystemWrapper>
          {children}
        </SystemWrapper>
      </body>
    </html>
  );
}
