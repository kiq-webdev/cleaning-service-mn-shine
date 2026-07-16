export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
      
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          Get Your Cleaning Quote
        </h2>

        <p className="mt-4 text-gray-300">
          Send us a message and we’ll get back to you as soon as possible.
        </p>

        {/* CTA box */}
        <div className="mt-10 bg-gray-800 p-8 rounded-xl shadow-lg">

          <p className="text-lg font-medium">
             Send us a message directly.
          </p>

          <p className="mt-2 text-gray-400 text-sm">
            We respond quickly via SMS / WhatsApp.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">

            {/* SMS */}
            <a
              href="sms:+123456789?body=Hi, I would like a cleaning quote."
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold"
            >
              Send Text Message
            </a>

            {/* WhatsApp alternative */}
            <a
              href="https://wa.me/123456789?text=Hi, I would like a cleaning quote."
              target="_blank"
              className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-lg font-semibold"
            >
              WhatsApp Message
            </a>

          </div>

        </div>

        {/* small note */}
        <p className="mt-8 text-xs text-gray-500">
          No calls required — we handle everything via text.
        </p>

      </div>

    </section>
  );
}