export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white flex justify-between items-center px-8 py-4 shadow z-20">
      <div className="flex items-center gap-2">
        <img
          src="/logo-berbagi.png"
          alt="Logo Berbagi"
          className="h-8 w-auto"
        />
        <span className="text-2xl font-bold text-black">Berbagi</span>
      </div>

      <nav className="hidden md:flex space-x-10 text-sm font-semibold ">
        <a href="#home" className="hover:text-green-500 transition-all">
          Home
        </a>
        <a href="#info" className="hover:text-green-500 transition-all">
          Info Selengkapnya
        </a>
        <a href="#fitur" className="hover:text-green-500 transition-all">
          Fitur
        </a>
        <a href="#testimoni" className="hover:text-green-500 transition-all">
          Testimoni
        </a>
      </nav>
    </header>
  );
}
