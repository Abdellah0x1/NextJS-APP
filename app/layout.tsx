import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maroc Discovery",
  description: "Discover the wonders of Morocco with Maroc Discovery. Explore vibrant culture, stunning landscapes, and rich history. Your ultimate guide to unforgettable Moroccan experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${jakarta.variable} h-full`}
    >
      <body className="min-h-screen  flex flex-col flex-1">
        <Navigation />
        <main className="flex-1 ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
