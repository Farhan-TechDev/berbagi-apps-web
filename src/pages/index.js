import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import AboutUsSection from '@/components/AboutUsSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <HeroSection />


      {/* About Us Section */}
      <section className="py-6 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#2B7A78]">Apa itu BERBAGI Apps?</h2>
        <p className="max-w-3xl mx-auto text-lg">
          BERBAGI Apps adalah platform yang menghubungkan relawan, donatur, dan komunitas sosial untuk membuat dampak nyata. Kami percaya bahwa aksi kecil bisa mengubah dunia.
        </p>
      </section>

      {/* Fitur Utama Section */}
      <section className="py-16 px-6 bg-[#F9FAFB]">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2B7A78]">Fitur Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {['Donasi Praktis', 'Aksi Sosial Terjadwal', 'Jaringan Relawan', 'Laporan Transparan'].map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Replace with SVG icons */}
              <div className="w-20 h-20 mb-4 bg-[#FFD166] rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-[#17252A]">{index + 1}</span>
              </div>
              <p className="text-lg font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimoni Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2B7A78]">Cerita Mereka</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1,2,3].map((item) => (
            <div key={item} className="bg-[#F9FAFB] p-6 rounded-xl shadow text-center">
              <Image src="/user-placeholder.png" alt="User Testimoni" width={80} height={80} className="mx-auto rounded-full mb-4" />
              <blockquote className="italic">"Bergabung dengan BERBAGI mengubah hidup saya!"</blockquote>
              <p className="mt-2 font-medium">- Relawan</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section (Repeater) */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 bg-[#2B7A78] text-white">
        <h2 className="text-3xl md:text-5xl font-bold">Ayo Mulai Berbagi Hari Ini!</h2>
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
            <p className="mt-2 text-sm">Menyatukan aksi sosial dalam satu genggaman.</p>
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
