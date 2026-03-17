import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Niafrang - Village Tourisme en Casamance, Sénégal",
  description:
    "Découvrez Niafrang, un village touristique authentique en Casamance au Sénégal. Explorez les plages, les mangroves et la culture locale. Réservez votre adventure inoubliable dès maintenant.",
  keywords:
    "Niafrang, tourisme Sénégal, Casamance, plages, mangroves, village touristique",
  openGraph: {
    title: "Niafrang - Village Tourisme en Casamance",
    description:
      "Vivez une expérience authentique à Niafrang, cœur touristique de la Casamance",
    url: "https://niafrang.com",
    siteName: "Niafrang Village Tourisme",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="FR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* header */}
        <Header />
        {/* childer */}
        {children}
        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
