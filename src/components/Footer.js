import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#ffa726] text-white py-12 px-6 text-center">
      <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
          <a href="#" className="hover:underline">Our Story</a>
          <a href="#" className="hover:underline">Our Impact</a>
          <a href="#" className="hover:underline">Meet the Team</a>
          <a href="#" className="hover:underline">The BERBAGI Shop</a>
          <a href="#" className="hover:underline">Careers</a>
          <a href="#" className="hover:underline">Press and Awards</a>
          <a href="#" className="hover:underline">FAQs</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>

        <div className="mt-4 flex justify-center gap-4 text-lg">
          <a href="#" aria-label="Instagram" className="hover:text-gray-300 transition"><FaInstagram /></a>
          <a href="#" aria-label="Facebook" className="hover:text-gray-300 transition"><FaFacebookF /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-300 transition"><FaLinkedinIn /></a>
          <a href="#" aria-label="X (Twitter)" className="hover:text-gray-300 transition"><FaXTwitter /></a>
        </div>


        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-white">
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">End User Licence Agreement</a>
          <a href="#">Allergen Information</a>
        </div>

        <p className="mt-4 text-xs text-white">© {new Date().getFullYear()} BERBAGI Apps</p>
    </footer>
  );
}
