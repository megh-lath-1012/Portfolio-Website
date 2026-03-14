import type { Metadata } from "next";
import { Lexend, Inter } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PixelPulse Services | High-Performance Mobile Ecosystems",
  description: "Engineering studio specialized in Android SDKs, Flutter applications, and full-stack business systems led by Megh Lath.",
};

import SmoothScroll from "@/providers/SmoothScroll";
import PageTransition from "@/providers/PageTransition";
// import ElasticBackground from "@/components/ElasticBackground";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/providers/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lexend.variable} font-inter antialiased`}>
        <ThemeProvider>
          <SmoothScroll>
            <Navigation />
            <PageTransition>
              {children}
            </PageTransition>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
