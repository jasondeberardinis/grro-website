import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-[1200px] mx-auto px-8 md:px-16 pt-16 pb-10 border-t border-gray-200">
      <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
        <div>
          <div className="font-heading text-lg tracking-[5px] text-[#1B263B] mb-2">GRRO</div>
          <div className="text-sm text-gray-400">
            AI-Powered Creative Agency
          </div>
        </div>

        <div className="flex gap-16">
          <div>
            <h4 className="font-heading text-[11px] tracking-[2px] text-gray-500 mb-4">
              Services
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link href="#services" className="text-sm text-gray-400 hover:text-[#1B263B] transition-colors">AI Video Ads</Link>
              <Link href="#services" className="text-sm text-gray-400 hover:text-[#1B263B] transition-colors">CRM Connect</Link>
              <Link href="#services" className="text-sm text-gray-400 hover:text-[#1B263B] transition-colors">AI Search</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-[11px] tracking-[2px] text-gray-500 mb-4">
              Company
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link href="#about" className="text-sm text-gray-400 hover:text-[#1B263B] transition-colors">About</Link>
              <Link href="#work" className="text-sm text-gray-400 hover:text-[#1B263B] transition-colors">Work</Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-[#1B263B] transition-colors">Blog</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-[11px] tracking-[2px] text-gray-500 mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="#" className="text-sm text-gray-400 hover:text-[#1B263B] transition-colors">Twitter / X</a>
              <a href="#" className="text-sm text-gray-400 hover:text-[#1B263B] transition-colors">LinkedIn</a>
              <a href="mailto:hello@grro.io" className="text-sm text-gray-400 hover:text-[#1B263B] transition-colors">hello@grro.io</a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-gray-200">
        <div className="text-xs text-gray-400">
          &copy; 2026 GRRO.io &mdash; All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-gray-400 hover:text-[#1B263B] transition-colors">Privacy</a>
          <a href="#" className="text-xs text-gray-400 hover:text-[#1B263B] transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
