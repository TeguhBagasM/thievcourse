import { useEffect, useState } from "react";
import { navLinks } from "./../constants/index";
import { useResizeX } from "../hooks/useResizeX";
import { motion, AnimatePresence } from "framer-motion";
import { mobileMenuVariants, navbarVariants } from "./../constants/motion";
import { useScrollY } from "./../hooks/useScrollY";
import Logo from "../assets/logo-thieverse.png";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkMode");
    return storedMode === "true" ? true : false;
  });
  const [toggleMenu, settToggleMenu] = useState(false);
  const resized = useResizeX(992);
  const scrolled = useScrollY(100);

  useEffect(() => {
    if (resized) settToggleMenu(false);
  }, [resized]);

  return (
    <motion.header
      layout
      variants={navbarVariants(darkMode)}
      initial={["default", { y: -100 }]}
      animate={[scrolled ? "active" : "default", "slide"]}
      transition={{ duration: 0.3 }}
      className="fixed items-center h-[70px] z-[1000] w-full border-solid border-transparent"
    >
      <nav className="container xl:mt-2 flex items-center justify-between p-5 md:p-3 lg:p-2 gap-x-16">
        <a href="/" className="text-2xl font-bold">
          <img src={Logo} alt="Logo" className="w-40 h-auto" />
        </a>

        <div className="hidden w-full lg:flex lg:justify-between">
          <ul className="flex items-center gap-x-8">
            {navLinks?.map((link) => {
              return (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="link dark:text-gray-100 dark:hover:text-blue-400">
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4">
            <DarkModeSwitch enabled={darkMode} setEnabled={setDarkMode} />
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <DarkModeSwitch enabled={darkMode} setEnabled={setDarkMode} />
          <div
            onClick={() => settToggleMenu(!toggleMenu)}
            className={`header__menu-icon flex relative w-5 h-4 flex-shrink-0 cursor-pointer overflow-hidden ${
              toggleMenu ? "active" : ""
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {toggleMenu && (
          <motion.nav
            layout={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute inset-x-0 top-0 bg-white dark:bg-gray-950 h-dvh -z-10"
          >
            <div className="container flex flex-col justify-between h-full pt-[100px] pb-6">
              <ul className="flex flex-col gap-y-4">
                {navLinks?.map((link) => {
                  return (
                    <li key={link.id} className="h-8">
                      <a
                        href={`#${link.id}`}
                        className="text-xl link dark:text-gray-100 dark:hover:text-blue-400"
                      >
                        {link.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
