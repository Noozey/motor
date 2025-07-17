"use client";

import { ChevronUp, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ backgroundColor: "#00F3FF" }}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6 text-[#004D40]" />
    </button>
  );
};

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      console.log("Email submitted:", email);
      setEmail("");
    }
  };

  return (
    <>
      <ScrollToTop />
      <footer className="w-full bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 font-inter">
                Nepal Motors
              </h3>
              <p className="text-gray-600 text-sm font-inter leading-relaxed">
                Your trusted automotive partner in Nepal. Find the best deals on
                cars, bikes, and automotive services.
              </p>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Kathmandu, Nepal</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 font-inter">
                Quick Links
              </h3>
              <div className="space-y-2">
                <Link
                  href="/cars"
                  className="block text-gray-600 hover:text-[#00F3FF] transition-colors duration-200 text-sm font-inter"
                >
                  Browse Cars
                </Link>
                <Link
                  href="/bikes"
                  className="block text-gray-600 hover:text-[#00F3FF] transition-colors duration-200 text-sm font-inter"
                >
                  Browse Bikes
                </Link>
                <Link
                  href="/services"
                  className="block text-gray-600 hover:text-[#00F3FF] transition-colors duration-200 text-sm font-inter"
                >
                  Services
                </Link>
                <Link
                  href="/dealers"
                  className="block text-gray-600 hover:text-[#00F3FF] transition-colors duration-200 text-sm font-inter"
                >
                  Dealers
                </Link>
              </div>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 font-inter">
                Support
              </h3>
              <div className="space-y-2">
                <Link
                  href="/help"
                  className="block text-gray-600 hover:text-[#00F3FF] transition-colors duration-200 text-sm font-inter"
                >
                  Help Center
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-600 hover:text-[#00F3FF] transition-colors duration-200 text-sm font-inter"
                >
                  Contact Us
                </Link>
                <Link
                  href="/faq"
                  className="block text-gray-600 hover:text-[#00F3FF] transition-colors duration-200 text-sm font-inter"
                >
                  FAQ
                </Link>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Phone className="w-4 h-4" />
                  <span>+977-1-234-5678</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 font-inter">
                Stay Updated
              </h3>
              <p className="text-gray-600 text-sm font-inter">
                Get the latest car deals and automotive news.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#00F3FF] focus:border-transparent text-sm font-inter"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#00F3FF] text-[#004D40] rounded-r-lg hover:opacity-90 transition-opacity duration-200 font-inter font-medium text-sm"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-6 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm font-inter">
                © 2024 Nepal Motors. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-[#00F3FF] transition-colors duration-200 font-inter"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-[#00F3FF] transition-colors duration-200 font-inter"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="text-gray-600 hover:text-[#00F3FF] transition-colors duration-200 font-inter"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
