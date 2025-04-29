import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-[#FFFFFF] px-6 py-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#2B7A78] leading-tight">
            Bersama Kita Berbagi.<br /> Bersama Kita Mengubah Dunia.
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-[#17252A]">
            Unduh BERBAGI Apps dan mulai aksi nyatamu hari ini!
          </p>
          <button className="mt-8 bg-[#FFD166] hover:bg-yellow-400 text-[#17252A] font-semibold rounded-full px-8 py-4 shadow-lg transition transform hover:-translate-y-1">
            Unduh Sekarang
          </button>
        </div>

        {/* Image Mockup Section */}
        <div className="flex justify-center md:mb-0">
          <div className="relative w-96 h-[36rem]">
            <Image
              src="/images/mockup.png"
              alt="Mockup Aplikasi BERBAGI"
              layout="fill"
              objectFit="contain"
              className="drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Dekorasi */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#FFD166] rounded-full opacity-30 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#2B7A78] rounded-full opacity-30 blur-2xl animate-pulse"></div>
    </section>
  );
}
