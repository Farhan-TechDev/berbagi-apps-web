import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaRegHandshake,
  FaCalendarAlt,
  FaUsers,
  FaChartBar,
} from "react-icons/fa";

export default function FiturUnggulanSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const fitur = [
    {
      title: "Donasi Praktis",
      icon: <FaRegHandshake size={40} color="#2B7A78" />,
      desc: "Kemudahan donasi hanya dengan beberapa klik, cepat dan aman.",
    },
    {
      title: "Aksi Sosial Terjadwal",
      icon: <FaCalendarAlt size={40} color="#2B7A78" />,
      desc: "Aksi sosial yang terorganisir dan terjadwal untuk dampak yang maksimal.",
    },
    {
      title: "Jaringan Relawan",
      icon: <FaUsers size={40} color="#2B7A78" />,
      desc: "Bergabung dengan relawan yang memiliki semangat dan tujuan sama.",
    },
    {
      title: "Laporan Transparan",
      icon: <FaChartBar size={40} color="#2B7A78" />,
      desc: "Laporan keuangan yang jelas dan mudah diakses untuk semua pihak.",
    },
  ];

  return (
    <section className="min-h-[70vh] py-6 px-10">
      <h2
        className="text-4xl font-bold text-center mb-12 text-[#2B7A78]"
        data-aos="fade-down"
      >
        Fitur Unggulan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {fitur.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="w-20 h-20 mb-4 bg-[#FFE29A] rounded-full flex items-center justify-center text-4xl text-[#2B7A78]">
              {item.icon}
            </div>
            <p className="text-lg font-semibold text-[#17252A] mb-2">
              {item.title}
            </p>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
