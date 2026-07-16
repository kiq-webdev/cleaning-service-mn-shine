import { useEffect, useState } from "react";
import  logo from "../assets/logo-inv.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
         <img
             src={logo}
             alt="MN Shine Cleaning"
             className={`object-contain transition-all duration-300 ${ scrolled ? "h-12 w-auto" : "h-56 w-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]"}`}
          />
          </div>
      </div>
    </header>
  );
}