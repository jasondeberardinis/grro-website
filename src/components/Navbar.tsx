"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 bg-white/90 backdrop-blur-xl border-b border-gray-200">
      <Link href="/" className="font-heading text-xl tracking-[6px] text-[#1B263B]">
        GRRO<span className="text-orange">.</span>
      </Link>

      <div className="hidden md:flex items-center gap-10">
        <Link href="#services" className="text-gray-500 text-sm font-medium hover:text-[#1B263B] transition-colors">
          Services
        </Link>
        <Link href="#work" className="text-gray-500 text-sm font-medium hover:text-[#1B263B] transition-colors">
          Work
        </Link>
        <Link href="#about" className="text-gray-500 text-sm font-medium hover:text-[#1B263B] transition-colors">
          About
        </Link>
        <Link href="#contact" className="text-gray-500 text-sm font-medium hover:text-[#1B263B] transition-colors">
          Contact
        </Link>
      </div>

      <Link
        href="#contact"
        className="bg-[#1B263B] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#2c3e56] transition-colors"
      >
        Book a Launch
      </Link>
    </nav>
  );
}
