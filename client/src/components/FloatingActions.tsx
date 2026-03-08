import { MessageCircle, PhoneCall } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a 
        href="#" 
        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
        aria-label="Call us"
      >
        <PhoneCall className="w-6 h-6 group-hover:animate-[wiggle_1s_ease-in-out_infinite]" />
      </a>
      <a 
        href="#" 
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}