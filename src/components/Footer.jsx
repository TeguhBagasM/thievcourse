import React from "react";
import { FaInstagram, FaEnvelope, FaLinkedin, FaHeart, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo-thieverse.png";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-100 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Bagian Kiri */}
        <div className="md:col-span-2">
          <img src={logo} alt="Thieverse Logo" className="h-14 w-auto mb-4" />
          <p className="text-sm font-medium">
            Thieverse adalah platform teknologi yang menyediakan layanan konsultasi dan kursus
            pemrograman, baik secara privat maupun tim, serta menerima jasa pengerjaan tugas coding.
          </p>
        </div>

        {/* Bagian Program */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Layanan Thieverse</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600">
                Kursus Pemrograman
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Pengerjaan Tugas Coding
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Konsultasi
              </a>
            </li>
          </ul>
        </div>

        {/* Bagian Tentang */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Tentang Thieverse</h4>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-blue-600">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Popular
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Kontak
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Kebijakan Privasi
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-6">
        <a href="https://instagram.com/teguhbagasm" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-blue-600 hover:text-blue-800" size={24} />
        </a>
        <a
          href="https://linkedin.com/in/teguh-bagas-mardiansyah-8390572b7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-blue-600 hover:text-blue-800" size={24} />
        </a>
        <a href="mailto:teguhbagas2134@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-blue-600 hover:text-blue-800" size={24} />
        </a>
        <a href="https://wa.me/+6281321821374" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-blue-600 hover:text-blue-800" size={24} />
        </a>
      </div>

      {/* Bagian Bawah */}
      <div className="border-t dark:border-blue-700 border-blue-400 mt-8 pt-4 text-center text-md">
        <p className="text-gray-800 dark:text-gray-300">
          © 2024 Made with <FaHeart className="inline text-red-500" /> by{" "}
          <a
            href="https://teguhbagasm.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold"
          >
            Teguh Bagas M
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
