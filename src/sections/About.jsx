import { about } from "../constants/images";
import { aboutFeaturs } from "./../constants/index";
import { motion } from "framer-motion";
import { leftSideVariants, rightSideVariants } from "./../constants/motion";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="flex flex-col-reverse items-center justify-between gap-8 lg:flex-row">
          {/* ======= sisi kiri ============ */}
          <motion.div
            variants={leftSideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-y-8 lg:w-[53%] w-auto flex-shrink-0 text-center lg:text-start"
          >
            <div className="flex flex-col gap-y-4">
              <h2 className="relative section-title-after text-h2 text-gray-10 dark:text-gray-100">
                Mengapa Memilih Thieverse?
              </h2>
              <p className="text-base font-medium text-gray-50 dark:text-gray-300">
                Dari passion menuju keahlian – Thieverse memandu Anda meningkatkan belajar dan semangat
                di bidang pemrograman.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {aboutFeaturs?.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col group basis-[240px] flex-grow border border-solid border-gray-10 dark:border-gray-200 rounded-3xl p-4 text-start transition-colors duration-300"
                >
                  <div className="flex items-center gap-2">
                    <feature.icon className="text-2xl text-blue-500" />
                    <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 !leading-[normal]">
                      {feature.title}
                    </p>
                  </div>
                  <p className="text-base font-normal leading-normal text-gray-600 dark:text-gray-300 mt-1">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ======= sisi kanan ============ */}
          <motion.div
            variants={rightSideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex lg:w-[47%] w-full"
          >
            <div className="lg:max-w-[500px] max-w-none max-h-[450px] w-full rounded-4xl overflow-hidden">
              <img src={about} alt="Gambar Tentang Kami" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
