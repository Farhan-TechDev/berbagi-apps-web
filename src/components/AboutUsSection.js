import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function AboutUsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-[80vh] px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Teks */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2
            className="text-4xl font-bold mb-6 text-[#2B7A78]"
            data-aos="fade-up"
          >
            Apa itu BERBAGI Apps?
          </h2>
          <p
            className="text-lg text-[#17252A] font-normal"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            BERBAGI Apps adalah aplikasi lintas platform (Android, iOS, dan Web)
            yang bertujuan memudahkan pengguna dalam berbagi konten dan file
            secara aman dan efisien. Dengan mengedepankan nilai aksesibilitas,
            keamanan data, dan kemudahan penggunaan, kami adalah tim kolaboratif
            yang berfokus menciptakan solusi digital praktis untuk kebutuhan
            berbagi yang terpercaya di berbagai kalangan.
          </p>
        </div>

        <div className="relative w-full md:w-2/3 h-[320px]">
          <div
            className="absolute bottom-0 right-0 w-[70%] h-[240px] rounded-xl overflow-hidden shadow-lg z-10 hover:scale-105 transition-transform duration-300"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <Image
              src="/images/Komunitas.jpg"
              alt="Gambar Besar"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          <div
            className="absolute top-0 left-0 w-[50%] h-[180px] rounded-xl overflow-hidden shadow-md z-20 hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in"
            data-aos-delay="200"
            style={{ transform: "rotate(-8deg)" }}
          >
            <Image
              src="/images/Komunitas.jpg"
              alt="Gambar Kecil"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
