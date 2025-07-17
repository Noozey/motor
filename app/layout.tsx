import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

console.log(inter)

export const metadata: Metadata = {
  title: "Nepal Motor",
  description: "Explore Nepal's trusted marketplace for buying, selling, and renting vehicles. Find your perfect ride with Nepal Motor — reliable, fast, and local.",
  icons:{
    icon:"/MainLogo.png"
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
        className={`${inter.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <div id="portal"></div>
      </body>
    </html>
  );
}
