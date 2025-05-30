import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white flex items-center justify-between px-6 py-4 shadow z-50">
        <div className="flex items-center gap-2">
          <img
            src="/logo-berbagi.png"
            alt="Logo Berbagi"
            className="h-8 w-auto"
          />
          <span className="text-2xl font-bold text-black">Berbagi</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10 text-sm font-semibold text-black">
          <a href="#home" className="hover:text-green-500 transition-all">Home</a>
          <a href="#info" className="hover:text-green-500 transition-all">Info Selengkapnya</a>
          <a href="#fitur" className="hover:text-green-500 transition-all">Fitur</a>
          <a href="#testimoni" className="hover:text-green-500 transition-all">Testimoni</a>
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl text-black focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Slide-in Menu */}
      <div
  className={`fixed top-16 right-0 h-[calc(100%-4rem)] w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
>

        <div className="flex flex-col p-6 space-y-4">
          <a
            href="#home"
            className="text-sm font-semibold text-black hover:text-green-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#info"
            className="text-sm font-semibold text-black hover:text-green-500"
            onClick={() => setIsOpen(false)}
          >
            Info Selengkapnya
          </a>
          <a
            href="#fitur"
            className="text-sm font-semibold text-black hover:text-green-500"
            onClick={() => setIsOpen(false)}
          >
            Fitur
          </a>
          <a
            href="#testimoni"
            className="text-sm font-semibold text-black hover:text-green-500"
            onClick={() => setIsOpen(false)}
          >
            Testimoni
          </a>
        </div>
      </div>
    </>
  );
}
