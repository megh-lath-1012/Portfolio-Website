"use client";

import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";
import { Moon, Sun, FileDown } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="sticky top-0 z-50 w-full bg-background-primary/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-navy">
          Megh Lath
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#work"
            className="text-sm font-medium text-text-body hover:text-navy transition-colors"
          >
            Work
          </Link>
          <Link
            href="#articles"
            className="text-sm font-medium text-text-body hover:text-navy transition-colors"
          >
            Articles
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-text-body hover:text-navy transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-text-body hover:text-navy transition-colors"
          >
            Contact
          </Link>
          
          <Link
            href="/resume"
            className="flex items-center space-x-2 text-sm font-medium text-text-body hover:text-navy transition-colors px-4 py-2 rounded-full border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <FileDown className="w-4 h-4" />
            <span>Resume</span>
          </Link>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-navy" />
            ) : (
              <Sun className="w-5 h-5 text-navy" />
            )}
          </button>

          <MagneticButton>
            <Link
              href="#contact"
              className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-sm block"
            >
              Let&apos;s Talk
            </Link>
          </MagneticButton>
        </div>
      </div>
    </nav>
  );
}
