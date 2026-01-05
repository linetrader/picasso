import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "@/styles/globals.css";

const outfit = Outfit({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Picasso Group | Premium Art Tokenization",
  description: "Invest in blue-chip art assets with blockchain technology.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} font-sans antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
