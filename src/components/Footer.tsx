import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-[1200px] mx-auto px-8 md:px-16 pt-16 pb-10 border-t border-navy-light/30">
      <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
        <div>
          <div className="font-heading text-lg tracking-[5px] mb-2">GRRO</div>
          <div className="text-sm text-navy-light">
            AI-Powered Creative Agency
          </div>
        </div>

        <div className="flex gap-16">
          <div>
            <h4 className="font-heading text-[11px] tracking-[2px] text-gray mb-4">
              Services
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link href="#services" className="text-sm text-navy-light hover:text-white transition-colors">AI Video Ads</Link>
              <Link href="#services" className="text-sm text-navy-light hover:text-white transition-colors">CRM Connect</Link>
              <Link href="#services" className="text-sm text-navy-light hover:text-white transition-colors">AI Search</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-[11px] tracking-[2px] text-gray mb-4">
              Company
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link href="#about" className="text-sm text-navy-light hover:text-white transition-colors">About</Link>
              <Link href="#work" className="text-sm text-navy-light hover:text-white transition-colors">Work</Link>
              <Link href="#" className="text-sm text-navy-light hover:text-white transition-colors">Blog</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-[11px] tracking-[2px] text-gray mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="#" className="text-sm text-navy-light hover:text-white transition-colors">Twitter / X</a>
              <a href="#" className="text-sm text-navy-light hover:text-white transition-colors">LinkedIn</a>
              <a href="mailto:hello@grro.io" className="text-sm text-navy-light hover:text-white transition-colors">hello@grro.io</a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-navy-light/30">
        <div className="text-xs text-navy-light">
          &copy; 2026 GRRO.io &mdash; All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-navy-light hover:text-white transition-colors">Privacy</a>
          <a href="#" className="text-xs text-navy-light hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
