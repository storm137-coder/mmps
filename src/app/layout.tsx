import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import QuickContactBar from "@/components/layout/QuickContactBar";
import Footer from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-jakarta" 
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant" 
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maxmullerpublicschool.com"),
  title: "Max Muller Public School | Bengaluru (Est. 1982)",
  description: "A premier co-educational institution in Basaveshwaranagar, Bengaluru established in 1982. Admissions open for Montessori through Grade 10.",
  keywords: "Max Muller Public School, best school in Bangalore, Basaveshwaranagar school, CBSE school Bangalore, Montessori Bangalore, admissions 2025-26",
  openGraph: {
    title: "Max Muller Public School | Excellence in Education Since 1982",
    description: "Holistic education combining academic rigor, value-based character formation, modern science & computer laboratories, and extensive sports facilities in Bengaluru.",
    url: "https://www.maxmullerpublicschool.com",
    siteName: "Max Muller Public School",
    images: [
      {
        url: "/images/slider1.jpg",
        width: 1200,
        height: 630,
        alt: "Max Muller Public School Campus"
      }
    ],
    locale: "en_IN",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} ${cormorant.variable} font-sans text-slate-800 antialiased flex flex-col min-h-screen selection:bg-amber-100 selection:text-amber-900 bg-slate-50`}>
        <header className="sticky top-0 z-50 w-full shadow-xs">
          <AnnouncementBar />
          <Navbar />
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <QuickContactBar />
        <Footer />
      </body>
    </html>
  );
}
