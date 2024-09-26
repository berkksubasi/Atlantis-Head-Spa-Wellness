'use client';
import { DefaultSeo } from "next-seo";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

// Font tanımları
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const defaultSEO = {
  title: "Atlantis Head Spa Wellness | Kurtköy Masaj Salonu | Pendik | İstanbul",
  description:
    "Pendik Kurtköy Atlantis AVM'de bulunan Atlantis Head Spa Wellness sağlık ve hizmetlerini sunmaktadır. Randevu almak için lütfen randevu formumuzu doldurun ya da GSM numaramız aracılığı ile bize ulaşabilirsiniz.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.atlantisspa.com",
    site_name: "Atlantis Head Spa Wellness",
    images: [
      {
        url: "/images/backgrounds/spa-background.png",
        width: 800,
        height: 600,
        alt: "Atlantis Head Spa Wellness Kurtköy",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DefaultSeo {...defaultSEO} />
        <Navbar />
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
