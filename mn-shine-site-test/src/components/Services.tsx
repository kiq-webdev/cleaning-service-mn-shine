export default function Services() {
  const services = [
    {
      title: "House Cleaning",
      description: "Complete cleaning for your home, including kitchen, bathrooms and living areas.",
    },
    {
      title: "Office Cleaning",
      description: "Keep your workspace clean, organized and professional every day.",
    },
    {
      title: "Deep Cleaning",
      description: "Detailed and heavy-duty cleaning for tough dirt and buildup.",
    },
    {
      title: "Move In / Move Out",
      description: "Perfect cleaning for moving situations, ensuring a fresh start.",
    },
    {
      title: "Post Construction",
      description: "Remove dust and debris after renovation or construction work.",
    },
    {
      title: "Custom Cleaning",
      description: "Tailored cleaning services based on your specific needs.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Services
        </h2>

        <p className="mt-4 text-gray-600">
          Professional cleaning solutions tailored to your needs
        </p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-left"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}