  import { useEffect, useState } from "react";

  import img1 from "../assets/hero/foto-limpeza-1.jpeg";
  import img3 from "../assets/hero/foto-limpeza-3.jpeg";
  import img4 from "../assets/hero/foto-limpeza-4.jpeg";
  import img5 from "../assets/hero/foto-limpeza-5.jpeg";


export default function Hero() {
  const images = [ img1, img3, img4, img5 ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // troca a cada 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">

      {/* IMAGENS (FADE CORRETO) */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Cleaning service"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Fallback gradient (aparece se imagem falhar ou por cima dela) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F6F1E8] via-[#E9E3DA] to-[#6F8F7A] opacity-60" />

      
      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Conteúdo */}
      <div className="relative max-w-3xl text-white">

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Cleaning Services
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/80">
          Reliable, high-quality cleaning for your home and office.
          We make your space shine with precision and care.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="#contact"
            className="bg-green-700 text-[#f4f5f2] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 hover:text-green-700 active:scale-95 transition-all duration-300 shadow-lg"
          >
            Get Quote
          </a>

          {/* <a
            href="https://wa.me/123456789?text=Hi, I would like to get a cleaning quote and schedule a visit."
            target="_blank"
                className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition shadow-lg"

          >
            WhatsApp
         </a> */}
          

          <a
            href="#services"
            className="bg-green-700 text-[#f4f5f2] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 hover:text-green-700 active:scale-95 transition-all duration-300 shadow-lg"
          >
            View Services
          </a>

        </div>

      </div>
    </section>
  );
}