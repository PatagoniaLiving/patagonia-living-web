import type { Metadata } from "next";
import "./globals.css";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  metadataBase: new URL("https://patagonialiving.com"),
  title: {
    default: "Patagonia Living — Luxury Ski Travel",
    template: "%s — Patagonia Living",
  },
  description:
    "Private instruction, curated stays, and seamless logistics across the Andes, the Rockies, and the Alps. The mountain, handled.",
  keywords: [
    "luxury ski travel",
    "Patagonia ski",
    "Aspen",
    "Vail",
    "Zermatt",
    "Courchevel",
    "private ski instruction",
    "ski concierge",
  ],
  openGraph: {
    title: "Patagonia Living — Luxury Ski Travel",
    description:
      "Private instruction, curated stays, and seamless logistics across the Andes, the Rockies, and the Alps.",
    type: "website",
    locale: "en_US",
    siteName: "Patagonia Living",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patagonia Living — Luxury Ski Travel",
    description:
      "Private instruction, curated stays, and seamless logistics across the Andes, the Rockies, and the Alps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
