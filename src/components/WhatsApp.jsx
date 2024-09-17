import React, { useState, useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // Tampilkan tombol setelah scroll lebih dari 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Halo Thiever, saya ingin informasi lebih lanjut tentang Thieverse"
    );
    window.open(`https://wa.me/6281321821374?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-6 right-6 p-3 text-2xl rounded-full bg-green-500 text-white shadow-xl hover:bg-green-700 dark:hover:bg-green-400 transition-opacity z-50 duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <BsWhatsapp />
    </button>
  );
};

export default WhatsApp;
