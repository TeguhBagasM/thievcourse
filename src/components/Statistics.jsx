import { statistics } from "../constants";
import { motion } from "framer-motion";
import { centerVariants } from "./../constants/motion";

const Statistics = () => {
  return (
    <motion.div
      variants={centerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "0px 0px -200px 0px", once: true }}
      className="py-[70px]"
    >
      <div className="container">
        <div className="flex flex-wrap items-start justify-center gap-8 px-20 lg:justify-between rounded-4xl bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-600 dark:to-blue-900 text-gray-100 py-14 ">
          {statistics?.map((sta, index) => (
            <div key={index} className="w-[145px] flex flex-col items-center gap-y-4">
              <h1 className="text-h1 text-gray-100">{sta.number}</h1>
              <p className="text-xl text-center text-gray-200">{sta.text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Statistics;
