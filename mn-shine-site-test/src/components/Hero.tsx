
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=2000&q=80"
          alt="Cleaning service"
          className="w-full h-full object-cover"
          onError={(e) => {
            // fallback caso imagem falhe
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      {/* Fallback gradient (aparece se imagem falhar ou por cima dela) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-500 to-cyan-400 opacity-80" />

      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Conteúdo */}
      <div className="relative max-w-3xl text-white">

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Professional Cleaning Services
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/80">
          Reliable, high-quality cleaning for your home and office.
          We make your space shine with precision and care.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="sms:+123456789?body=Hi, I would like to get a cleaning quote and schedule a visit."
            className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Get Quote by Text (SMS)
          </a>

          <a
            href="https://wa.me/123456789?text=Hi, I would like to get a cleaning quote and schedule a visit."
            target="_blank"
                className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition shadow-lg"

          >
            WhatsApp
         </a>
          

          <a
            href="#services"
            className="border border-white/40 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
          >
            View Services
          </a>

        </div>

      </div>
    </section>
  );
}