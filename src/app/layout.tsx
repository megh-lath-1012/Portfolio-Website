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
  title: "Android SDK Engineer Portfolio",
  description: "Senior Mobile Engineer Portfolio specializing in SDKs",
};

import SmoothScroll from "@/providers/SmoothScroll";
import PageTransition from "@/providers/PageTransition";
import ElasticBackground from "@/components/ElasticBackground";
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
            <ElasticBackground />
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
