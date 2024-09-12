import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./Preloader.css";
import Navbar from "./components/layouts/Navbar";
import Preloader from "./components/layouts/Preloader";
import Footer from "./components/layouts/Footer";

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

export const metadata: Metadata = {
  title: "Atlantis Head Spa Wellness | Pendik | İStanbul",
  description: "Pendik Atlantis AVM'de bulunan Atlantis Head Spa Wellness saglık ve hizmetlerini sunmaktadır. Randevu almak için lütfen randevu formumuzu doldurun ya da GSM numaramız aracılığı ile bize ulaşabilirsiniz.",
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
        {/* <Preloader /> */}
        <Navbar />
        <main>
          {children} {/* Sayfa içeriği */}
        </main>
        <footer>
        <Footer />
        </footer>
      </body>
    </html>
  );
}
