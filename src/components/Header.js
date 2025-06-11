import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full backdrop-blur-sm bg-white/80 shadow z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Logo Berbagi"
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold text-[#ffa726]">Berbagi</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-10 text-sm font-semibold text-[#ffa726]">
            <a href="#home" className="hover:text-[#aacf5e] transition-all">Home</a>
            <a href="#info" className="hover:text-[#aacf5e] transition-all">Info Selengkapnya</a>
            <a href="#fitur" className="hover:text-[#aacf5e] transition-all">Fitur</a>
            <a href="#testimoni" className="hover:text-[#aacf5e] transition-all">Testimoni</a>
          </nav>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-2xl text-[#ffa726] focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>


      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-10 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Slide-in Menu */}
      <div
  className={`fixed top-16 right-0 h-[calc(100%-4rem)] w-64 backdrop-blur bg-white/80 shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
>

        <div className="flex flex-col p-6 space-y-4">
          <a
            href="#home"
            className="text-sm font-semibold text-[#ffa726] hover:text-green-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#info"
            className="text-sm font-semibold text-[#ffa726] hover:text-green-500"
            onClick={() => setIsOpen(false)}
          >
            Info Selengkapnya
          </a>
          <a
            href="#fitur"
            className="text-sm font-semibold text-[#ffa726] hover:text-green-500"
            onClick={() => setIsOpen(false)}
          >
            Fitur
          </a>
          <a
            href="#testimoni"
            className="text-sm font-semibold text-[#ffa726] hover:text-green-500"
            onClick={() => setIsOpen(false)}
          >
            Testimoni
          </a>
        </div>
      </div>
    </>
  );
}
