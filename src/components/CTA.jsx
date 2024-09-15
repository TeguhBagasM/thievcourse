import { motion } from "framer-motion";
import { centerVariants } from "../constants/motion";

const CTA = () => {
  return (
    <motion.div
      variants={centerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "0px 0px -200px 0px", once: true }}
      className="py-20"
    >
      <div className="container h-[350px]">
        <div className="flex flex-col items-center justify-center w-full h-full px-6 gap-y-6 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-600 dark:to-blue-900 rounded-3xl shadow-lg">
          <h2 className="text-center text-4xl font-bold text-gray-100 leading-snug">
            Join Our Learning <br /> Community
          </h2>

          <form className="w-full max-w-[500px]">
            <div className="flex items-center rounded-full h-14 p-2 bg-white shadow-md overflow-hidden">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                autoComplete="off"
                className="w-full px-4 text-base bg-transparent outline-none text-gray-800 placeholder-gray-400"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3 12h18M15 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default CTA;
