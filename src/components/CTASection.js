import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative bg-white text-[#17252A] py-24 px-6 font-poppins">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Teks & Tombol */}
        <div className="md:w-1/2 text-center md:text-left" data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#aacf5e]">
            Ayo Mulai Berbagi Hari Ini!
          </h2>
          <p className="mb-8 text-lg font-normal text-[#ffa726]">
            Unduh <strong className="text-[#aacf5e]">BERBAGI Apps</strong> dan bergabung dalam gerakan sosial berbasis teknologi.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-start">
            <button
              className="bg-[#ffa726] hover:bg-yellow-400 text-white font-semibold rounded-full px-6 py-3 shadow transition duration-300"
              aria-label="Unduh BERBAGI Apps di Play Store"
            >
              Download di Play Store
            </button>
            <button
              className="bg-[#ffa726] hover:bg-yellow-400 text-white font-semibold rounded-full px-6 py-3 shadow transition duration-300"
              aria-label="Unduh BERBAGI Apps di App Store"
            >
              Download di App Store
            </button>
          </div>
        </div>

        <div
          className="relative w-full md:w-[300px] h-[500px] mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            className="absolute inset-0"
            style={{
              animation: 'float 3s ease-in-out infinite',
            }}
          >
            <Image
              src="/images/mockup2.png"
              alt="Tampilan antarmuka BERBAGI Apps di perangkat mobile"
              fill
              priority
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

      </div>

      <div className="absolute top-0 left-0 w-40 h-40 bg-[#ffa726] rounded-full opacity-30 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#aacf5e] rounded-full opacity-30 blur-2xl animate-pulse"></div>

      {/* Keyframes untuk animasi float */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </section>
  );
}
