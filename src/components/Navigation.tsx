"use client";

import { useState } from "react";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lenis = useLenis();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false);
    
    if (href.startsWith("#") && pathname === "/") {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element && lenis) {
        lenis.scrollTo(element as HTMLElement, { 
          offset: -80, // Account for sticky header height
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
        window.history.pushState(null, "", href);
      } else if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  const navLinks = [
    { name: "Work", href: "/#work" },
    { name: "Articles", href: "/#articles" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link 
          href="/" 
          onClick={() => setIsMenuOpen(false)}
          className="text-xl font-bold tracking-tight text-navy dark:text-white transition-colors"
        >
          PixelPulse Services
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href.replace("/", ""))}
              className="text-sm font-medium text-text-body hover:text-navy dark:hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-navy dark:text-white" />
            ) : (
              <Sun className="w-5 h-5 text-navy dark:text-white" />
            )}
          </button>

          <MagneticButton>
            <Link
              href="/#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-orange-600 transition-colors shadow-sm block"
            >
              Let&apos;s Talk
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-navy dark:text-white" />
            ) : (
              <Sun className="w-5 h-5 text-navy dark:text-white" />
            )}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-navy dark:text-white"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href.replace("/", ""))}
                  className="text-lg font-semibold text-text-body hover:text-navy dark:hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="w-full py-4 bg-primary text-white text-center font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-sm"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
