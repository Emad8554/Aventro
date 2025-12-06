import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import Services from "@/components/Sections/Services";
import Features from "@/components/Features";
import Business from "@/components/Business";
import Pricing from "@/components/Sections/Pricing";
import Faq from "@/components/Faq";
import Team from "@/components/Sections/Team";
import Contact from "@/components/Sections/Contact";
import ScrollToTop from "@/components/ScrollToTop";

export default function HomeContent() {
  return (
    <div className="relative">
      <ScrollToTop />
      <Hero />
      <About />
      <Services />
      <Features />
      <Business />
      <Pricing />
      <Faq />
      <Team />
      <Contact />
    </div>
  );
}
