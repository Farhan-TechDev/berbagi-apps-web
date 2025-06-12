import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-[#FFFFFF] px-6 py-6 pt-20 md:pt-0">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full">

        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-7xl font-bold text-[#aacf5e] leading-tight">
            Bersama Kita Berbagi.
            <br />
            Bersama Kita Mengubah Dunia.
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-[#ffa726] font-normal">
            Unduh <strong className="font-semibold text-[#aacf5e]"> BERBAGI Apps </strong> dan mulai aksi nyatamu hari ini!
          </p>
          <button className="mt-8 bg-[#ffa726] hover:bg-yellow-400 text-white font-semibold rounded-full px-8 py-4 shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            Unduh Sekarang
          </button>
        </div>

        <div className="flex justify-center md:mb-0 md:pt-16">
          <div
            className="relative w-96 h-[36rem]"
            style={{
              animation: 'float 3s ease-in-out infinite'
            }}
          >
            <Image
              src="/images/mockup3.png"
              alt="Mockup Aplikasi BERBAGI"
              layout="fill"
              objectFit="contain"
              className="drop-shadow-4xl"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-40 h-40 bg-[#ffa726] rounded-full opacity-30 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#aacf5e] rounded-full opacity-30 blur-2xl animate-pulse"></div>

      {/* Inline keyframes via <style jsx> */}
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
