import { hero01, hero02, hero03, roundedText } from "../constants/images";
import { motion } from "framer-motion";
import { leftSideVariants, rightSideVariants } from "./../constants/motion";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/+6281321821374?text=Halo%20Thiever", "_blank");
  };
  return (
    <section id="home" className="flex items-center">
      <div className="container flex items-center justify-center">
        <div className="flex justify-between items-center flex-col-reverse lg:flex-row pt-[70px] lg:pt-0 gap-8">
          {/* ========== bagian kiri ========== */}
          <motion.div
            variants={leftSideVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center gap-y-8 lg:text-start lg:items-start"
          >
            <div className="flex flex-col gap-y-8">
              <h2 className="section-title-before section-title-after text-h2 text-gray-10 dark:text-gray-100">
                Maksimalkan Potensimu dengan Layanan Coding Terbaik
              </h2>
              <p className="text-base font-medium text-gray-60 dark:text-gray-300">
                Thieverse menyediakan kursus privat maupun tim, konsultasi pemrograman, dan jasa
                pengerjaan tugas coding, dirancang untuk memenuhi kebutuhanmu di bidang teknik
                informatika.
              </p>
            </div>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="relative flex items-center px-6 py-2 border-1 rounded-full bg-white text-gray-950 font-semibold dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 animate-shadow-animate border-transparent"
              >
                <FaWhatsapp className="mr-2 text-gray-950 dark:text-gray-100 text-xl" />
                Tanya via WhatsApp
              </button>
              <a
                href="#layanan"
                type="button"
                className="flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold transition-colors duration-300 hover:from-purple-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-lg shadow-blue-500/50"
              >
                Lihat Layanan
                <FaArrowRight className="ml-2" />
              </a>
            </div>
          </motion.div>

          {/* ========== bagian kanan ========== */}

          <motion.div
            variants={rightSideVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="grid grid-cols-[minmax(70px,_230px)_minmax(70px,_240px)] grid-rows-[auto_auto] sm:grid-cols-[240px_270px] sm:grid-rows-[220px_220px] xl:grid-cols-[270px_300px] xl:grid-rows-[250px_250px] gap-4">
              <img src={hero01} className="rounded-4xl" alt="Gambar 1" />
              <img src={hero02} className="row-span-2 rounded-4xl" alt="Gambar 2" />{" "}
              <img src={hero03} className="rounded-4xl" alt="Gambar 3" />{" "}
            </div>

            <div className="hidden sm:block w-[120px] absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-[calc(50%-15px)]">
              <img src={roundedText} alt="Jelajahi Lebih Lanjut" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
