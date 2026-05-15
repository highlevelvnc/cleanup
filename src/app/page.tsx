import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import AreasMarquee from "@/components/AreasMarquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import RevealProvider from "@/components/RevealProvider";
import ScrollProgress from "@/components/ScrollProgress";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Trust />
        <AreasMarquee />
        <Services />
        <Process />
        <BeforeAfter />
        <Testimonials />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFab />
      <MobileStickyCTA />
      <RevealProvider />
    </>
  );
}
