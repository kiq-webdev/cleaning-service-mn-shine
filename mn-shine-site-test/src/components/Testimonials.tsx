export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Amazing service! My house has never been this clean before. Highly recommend!",
      location: "Tampa, FL",
    },
    {
      name: "Michael Brown",
      text: "Very professional and reliable. They always arrive on time and do a great job.",
      location: "Orlando, FL",
    },
    {
      name: "Emily Davis",
      text: "The deep cleaning was perfect. Attention to detail is impressive.",
      location: "Miami, FL",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Clients Say
        </h2>

        <p className="mt-4 text-gray-600">
          Real feedback from satisfied customers
        </p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition text-left"
            >
              
              {/* Quote */}
              <p className="text-gray-700 italic">
                “{item.text}”
              </p>

              {/* Name */}
              <div className="mt-6">
                <p className="font-semibold text-gray-800">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">
                  {item.location}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}