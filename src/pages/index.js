import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <AboutUsSection />

      {/* Fitur Utama Section */}
      <FeaturesSection/>
      

      {/* CTA Section (Repeater) */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-[#2B7A78] text-white">
        <h2 className="text-3xl md:text-5xl font-bold">
          Ayo Mulai Berbagi Hari Ini!
        </h2>
        <div className="mt-6 flex space-x-4">
          <button className="bg-[#FFD166] hover:bg-yellow-400 text-[#17252A] rounded-full px-6 py-3">
            Download di Play Store
          </button>
          <button className="bg-[#FFD166] hover:bg-yellow-400 text-[#17252A] rounded-full px-6 py-3">
            Download di App Store
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#17252A] text-white py-8 px-6">
        <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-bold">BERBAGI Apps</h3>
            <p className="mt-2 text-sm">
              Menyatukan aksi sosial dalam satu genggaman.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <ul className="space-y-2 text-sm">
              <li>Tentang Kami</li>
              <li>Kontak</li>
              <li>Media Sosial</li>
              <li>Kebijakan Privasi</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
