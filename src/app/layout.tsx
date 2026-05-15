import type { Metadata, Viewport } from "next";
import { Manrope, Work_Sans } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/constants";

const display = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const body = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cleanup.pt"),
  title: {
    default: `${COMPANY.name} — Limpeza Profissional em ${COMPANY.region}`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "Serviços de limpeza residencial, comercial, escritórios e pós-obra em Vila Franca de Xira e arredores. Orçamento rápido e gratuito por WhatsApp.",
  keywords: [
    "limpeza Vila Franca de Xira",
    "empresa de limpeza VFX",
    "limpeza pós-obra",
    "limpeza escritórios",
    "limpeza residencial Alverca",
    "limpeza profissional Ribatejo",
    "CleanUp",
  ],
  authors: [{ name: COMPANY.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://cleanup.pt",
    siteName: COMPANY.name,
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description:
      "Limpeza residencial, comercial e pós-obra em Vila Franca de Xira. Equipa profissional, orçamento rápido por WhatsApp.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: COMPANY.name }],
  },
  twitter: { card: "summary_large_image", title: COMPANY.name },
  robots: { index: true, follow: true },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#00AEEF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    image: "https://cleanup.pt/logo.png",
    "@id": "https://cleanup.pt",
    url: "https://cleanup.pt",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY.region,
      addressCountry: "PT",
    },
    areaServed: COMPANY.serviceArea.map((c) => ({ "@type": "City", name: c })),
    sameAs: [],
  };

  return (
    <html lang="pt-PT" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
      </body>
    </html>
  );
}
