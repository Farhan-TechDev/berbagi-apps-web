import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden scroll-smooth">
      <Header />

      <section id="home">
        <HeroSection />
      </section>

      <section id="info" className="pt-24">
        <AboutUsSection />
      </section>

      <section id="fitur" className="pt-24">
        <FeaturesSection />
      </section>

      <section id="testimoni" className="pt-24">
        <TestimonialSection />
      </section>

      <section id="unduh" className="pt-24">
        <CTASection />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
