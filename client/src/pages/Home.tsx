import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { Services } from "@/components/Services";
import { Packages } from "@/components/Packages";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Gallery } from "@/components/Gallery";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { EmergencyCTA } from "@/components/EmergencyCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustBadges />
        <Services />
        <Packages />
        <WhyChooseUs />
        <Gallery />
        <HowItWorks />
        <Testimonials />
        <EmergencyCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}