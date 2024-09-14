import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { useEffect } from "react";

function DarkModeSwitch({ enabled, setEnabled }) {
  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Simpan ke localStorage
    localStorage.setItem("darkMode", enabled);
  }, [enabled]); // hanya gunakan 'enabled' sebagai dependency

  return (
    <div className="relative w-14 h-8 flex items-center justify-center">
      <button
        onClick={() => setEnabled(!enabled)}
        className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${
          enabled ? "opacity-0" : "opacity-100"
        }`}
        aria-label="Switch to light mode"
      >
        <FaSun className="text-yellow-500 text-xl" />
      </button>

      <button
        onClick={() => setEnabled(!enabled)}
        className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${
          enabled ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Switch to dark mode"
      >
        <BsMoonStarsFill className="text-gray-100 text-xl" />
      </button>
    </div>
  );
}

export default DarkModeSwitch;
