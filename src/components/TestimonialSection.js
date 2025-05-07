import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TestimonialSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const testimonies = [
    {
      name: "Dewi Lestari",
      quote:
        "Melalui BERBAGI Apps, saya bisa berdonasi dan ikut kegiatan sosial tanpa ribet. Semuanya terasa lebih mudah dan transparan.",
      image: "/images/user1.jpg",
    },
    {
      name: "Rizal Hakim",
      quote:
        "Sebagai relawan, saya merasa diberdayakan. Fitur jadwal dan jaringan relawan sangat membantu dalam koordinasi.",
      image: "/images/user2.jpg",
    },
    {
      name: "Siti Aminah",
      quote:
        "Aplikasi ini benar-benar menghubungkan orang-orang baik untuk tujuan mulia. Saya merekomendasikannya ke semua teman saya.",
      image: "/images/user3.jpg",
    },
  ];

  return (
    <section className="bg-white py-6 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl font-bold text-center mb-12 text-[#2B7A78] font-poppins"
          data-aos="fade-down"
        >
          Cerita Mereka
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonies.map((t, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-[#FFD166] shadow-sm">
                <Image
                  src={t.image}
                  alt={`Foto ${t.name}`}
                  width={96}
                  height={96}
                  objectFit="cover"
                />
              </div>
              <p className="text-[#17252A] italic font-medium mb-4 font-poppins">
                “{t.quote}”
              </p>
              <p className="font-semibold text-[#2B7A78] font-poppins">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
