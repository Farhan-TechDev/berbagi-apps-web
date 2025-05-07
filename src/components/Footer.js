export default function Footer() {
    return (
      <footer className="bg-[#17252A] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          {/* Kolom Kiri */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-2">BERBAGI Apps</h3>
            <p className="text-sm">
              Menyatukan aksi sosial dalam satu genggaman. Platform yang memudahkan donasi, relawan, dan kegiatan sosial digital secara transparan.
            </p>
          </div>
  
          {/* Kolom Kanan */}
          <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Navigasi</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:underline">Tentang Kami</a></li>
                <li><a href="#contact" className="hover:underline">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Informasi</h4>
              <ul className="space-y-2">
                <li><a href="#social" className="hover:underline">Media Sosial</a></li>
                <li><a href="#privacy" className="hover:underline">Kebijakan Privasi</a></li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="mt-10 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} BERBAGI Apps.
        </div>
      </footer>
    );
  }
  