import Link from "next/link";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-background-muted py-20 text-navy border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy leading-tight">
              Ready to build something amazing?
            </h2>
            <p className="text-text-body text-lg mb-8">
              I&apos;m currently open to new opportunities and interesting projects.
            </p>
            <Link
              href="mailto:hello@example.com"
              className="inline-flex px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-orange-600 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Let&apos;s Build Together
            </Link>
          </div>

          <div className="flex flex-col md:items-end justify-center space-y-6">
            <div className="flex space-x-4 mb-8">
              <Link href="https://github.com/meghlath" target="_blank" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Github className="w-6 h-6 text-navy" />
              </Link>
              <Link href="https://linkedin.com/in/meghlath" target="_blank" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Linkedin className="w-6 h-6 text-navy" />
              </Link>
              <Link href="https://twitter.com/meghlath" target="_blank" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Twitter className="w-6 h-6 text-navy" />
              </Link>
            </div>
            <div className="text-right">
              <p className="text-text-body font-medium">hello@meghlath.dev</p>
              <p className="text-gray-500 text-sm mt-1">San Francisco, CA (Remote)</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-text-body text-sm">
          <p>© {new Date().getFullYear()} Megh Lath. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-navy transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-navy transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
