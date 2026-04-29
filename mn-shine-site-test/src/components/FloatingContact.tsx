import { MessageCircle, MessageSquare } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
       
        <div className="relative group">
            {/* SMS*/}
            <a
            href="sms:+123456789?body=Hi, I would like a cleaning quote."
            className="flex items-center justify-center bg-white text-blue-600 w-10 h-10 rounded-full shadow-lg hover:scale-110 transition"
            >

         <MessageSquare size={18} />
         </a>

         {/* Tooltip */}
         <span className="absolute right-12 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          SMS
         </span>

        </div>

        <div className="relative group">
            {/* WhatsApp */}
            <a
            href="https://wa.me/123456789?text=Hi, I would like a cleaning quote."
            target="_blank"
            className="flex items-center justify-center bg-green-500 text-white w-10 h-10 rounded-full shadow-lg hover:scale-110 transition"
            >
          <MessageCircle size={18} />
          </a>

         {/* Tooltip */}
         <span className="absolute right-12 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
         WhatsApp
         </span>

        </div>
      
    </div>
  );
}