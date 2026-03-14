import Link from "next/link";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-background-muted py-20 text-navy transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy leading-tight">
              Ready to scale your mobile infrastructure?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              We specialize in SDK architecture, performance, and platform engineering for global enterprises.
            </p>
            <Link
              href="mailto:hello@pixelpulse.services"
              className="inline-flex px-8 py-4 bg-primary text-background font-semibold rounded-full hover:bg-orange-600 transition-all hover:scale-105 shadow-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Let&apos;s Build Together
            </Link>
          </div>

          <div className="flex flex-col md:items-end justify-center space-y-6">
            <div className="flex space-x-4 mb-8">
              <Link href="https://github.com/megh-lath-1012" target="_blank" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-navy hover:text-white transition-all hover:scale-110">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/megh-lath-75118515b" target="_blank" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
            <div className="text-right">
              <p className="text-navy font-bold text-lg">hello@pixelpulse.services</p>
              <p className="text-gray-500 text-sm mt-1">Surat, Gujarat, India (Serving Globally)</p>
              <p className="text-primary text-xs font-bold mt-2">PixelPulse is a registered Udyam enterprise.</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-text-body text-sm font-medium">
          <p>© 2026 PixelPulse Services. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
