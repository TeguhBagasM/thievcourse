import { leftSideVariants, rightSideVariants } from "./../constants/motion";
import { motion } from "framer-motion";

const SectionHeader = ({ title, link }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-8">
      <motion.h2
        variants={leftSideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative section-title-after text-h2 text-gray-10 dark:text-gray-200"
      >
        {title}
      </motion.h2>

      <motion.a
        variants={rightSideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        href={link}
        className="text-xl link dark:text-gray-200 dark:hover:text-blue-500"
      >
        See All
      </motion.a>
    </div>
  );
};

export default SectionHeader;
