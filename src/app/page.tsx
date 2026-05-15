import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import RevealProvider from "@/components/RevealProvider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Process />
        <BeforeAfter />
        <About />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFab />
      <RevealProvider />
    </>
  );
}
