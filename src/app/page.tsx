import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import WeHelp from "@/components/WeHelp";
import SubHero from "@/components/SubHero";
import VideoSection from "@/components/VideoSection";
import WhatWeDo from "@/components/WhatWeDo";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoBar />
      <WeHelp />
      <SubHero />
      <VideoSection />
      <WhatWeDo />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
