import { MessageCircle } from "lucide-react";

const WhatsAppWidget = () => {
  const whatsappNumber = "233555901515"; // Remove + for WhatsApp API
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="relative flex items-center justify-center">
        {/* Pulsing background circle */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-pulse"></div>
        
        {/* Icon button */}
        <button className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
          <MessageCircle size={28} className="text-white" />
        </button>
      </div>
    </a>
  );
};

export default WhatsAppWidget;
