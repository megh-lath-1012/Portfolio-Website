import Link from "next/link";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Looking for a Senior Mobile Engineer?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              I am currently open to new opportunities focusing on SDK architecture, performance, and platform engineering.
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
            <div className="flex items-center space-x-6">
              <Link href="https://github.com/meghlath" target="_blank" className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-colors hover:-translate-y-1 transform duration-200">
                <Github className="w-6 h-6 text-white" />
              </Link>
              <Link href="#" target="_blank" className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-colors hover:-translate-y-1 transform duration-200">
                <Linkedin className="w-6 h-6 text-white" />
              </Link>
              <Link href="#" target="_blank" className="p-3 bg-gray-800 rounded-full hover:bg-primary transition-colors hover:-translate-y-1 transform duration-200">
                <Twitter className="w-6 h-6 text-white" />
              </Link>
            </div>
            <div className="text-right">
              <p className="text-gray-400 font-medium">hello@meghlath.dev</p>
              <p className="text-gray-500 text-sm mt-1">San Francisco, CA (Remote)</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Megh Lath. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
