import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background-primary/80 backdrop-blur-md border-b border-gray-100">
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
