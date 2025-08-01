import Hero from "../components/Hero";
import WhyHerCut from "../components/WhyHerCut";
import BenefitTiles from "../components/BenefitTiles";
import Testimonials from "../components/Testimonials";
import PurchaseSection from "../components/PurchaseSection";
import FAQ from "../components/FAQ";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px]">
        <Hero />
        <WhyHerCut />
        <BenefitTiles />
        <Testimonials />
        <PurchaseSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

