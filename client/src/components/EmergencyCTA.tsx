import { PhoneCall, MessageCircle } from "lucide-react";
import emergencyBg from "@/assets/images/emergency-bg.png";

export function EmergencyCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/95 dark:bg-background/95 mix-blend-multiply z-10" />
        <img 
          src={emergencyBg} 
          alt="Emergency electrical repair" 
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/20 text-destructive mb-8 animate-pulse">
            <PhoneCall className="w-10 h-10" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            24/7 Emergency Electrical Support
          </h2>
          
          <p className="text-xl text-white/80 mb-10">
            Having electrical issues or power problems? Don't wait. Our certified technicians are ready to help you anytime, day or night.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+15559876543" 
              className="bg-destructive hover:bg-destructive/90 text-white h-14 px-8 text-base font-bold rounded-full flex items-center justify-center transition-colors"
            >
              <PhoneCall className="mr-2 w-5 h-5" />
              Call Now
            </a>
            <a 
              href="https://wa.me/15559876543" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white h-14 px-8 text-base font-bold rounded-full flex items-center justify-center transition-colors"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Technician
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
