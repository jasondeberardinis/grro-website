"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 bg-navy-deep/90 backdrop-blur-xl border-b border-navy-light/30">
      <Link href="/" className="font-heading text-xl tracking-[6px] text-white">
        GRRO<span className="text-orange">.</span>
      </Link>

      <div className="hidden md:flex items-center gap-10">
        <Link href="#services" className="text-gray text-sm font-medium hover:text-white transition-colors">
          Services
        </Link>
        <Link href="#work" className="text-gray text-sm font-medium hover:text-white transition-colors">
          Work
        </Link>
        <Link href="#about" className="text-gray text-sm font-medium hover:text-white transition-colors">
          About
        </Link>
        <Link href="#contact" className="text-gray text-sm font-medium hover:text-white transition-colors">
          Contact
        </Link>
      </div>

      <Link
        href="#contact"
        className="bg-orange text-navy-deep px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-orange/90 transition-colors"
      >
        Book a Launch
      </Link>
    </nav>
  );
}
