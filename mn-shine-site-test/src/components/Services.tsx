import houseCleaning from "../assets/services/house-cleaning.png";
import officeCleaning from "../assets/services/office-cleaning.png";
import deepCleaning from "../assets/services/deep-cleaning.png";
import moveinMoveout from "../assets/services/movinMovout-cleaning.png";
import postContruction from "../assets/services/post-construction.png";
import airbnbCleaning from "../assets/services/airbnb-cleaning.png";
import {
  Home,
  Building2,
  Sparkles,
  PackageOpen,
  Hammer,
  BedDouble
} from "lucide-react";







export default function Services() {
  const services = [
    {
      title: "House Cleaning",
      description: "Complete cleaning for your home, including kitchen, bathrooms and living areas.",
      image: houseCleaning,
      icon: Home
    },
    {
      title: "Office Cleaning",
      description: "Keep your workspace clean, organized and professional every day.",
      image: officeCleaning,
      icon: Building2
      

    },
    {
      title: "Deep Cleaning",
      description: "Detailed and heavy-duty cleaning for tough dirt and buildup.",
      image: deepCleaning,
      icon: Sparkles
    },
    {
      title: "Move In / Move Out",
      description: "Perfect cleaning for moving situations, ensuring a fresh start.",
      image: moveinMoveout,
      icon: PackageOpen
    },
    {
      title: "Post Construction",
      description: "Remove dust and debris after renovation or construction work.",
      image: postContruction,
      icon: Hammer
    },
    {
      title: "Airbnd Cleaning",
      description: "Fast and thorough cleaning between guest stays, ensuring your property is spotless and guest-ready.",
      image: airbnbCleaning,
      icon: BedDouble
    },
  ];

  return (
    <section id="services" className="py-40 px-6 bg-gray-50">
      
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-green-700">
          Our Services
        </h2>

        <p className="mt-4 text-gray-600">
          Cleaning Solutions for Every Need
        </p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (
            
            <div
              key={index}
              className=" bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden rounded-t-2xl">

                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>


              <div className="relative">
                <div className="absolute left-1/2 -top-8 -translate-x-1/2">
                  <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                    
                  
                    {/* ícone */}
                    <service.icon
                      size={28}
                      className="text-green-700"
                    />

                  </div>
                </div>
              </div>


              <div className="pt-12 pb-8 px-6 text-center">

                <h3 className="text-2xl font-bold text-gray-800">
                 {service.title}
                 </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}