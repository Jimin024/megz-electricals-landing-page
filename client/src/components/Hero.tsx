import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.png";
import heroSolar from "@/assets/images/hero-solar.png";
import heroCctv from "@/assets/images/hero-cctv.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/90 dark:bg-background/95 mix-blend-multiply z-10" />
        <img 
          src={heroBg} 
          alt="Electrician working" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent font-medium text-sm mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified & Licensed Professionals</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
              Reliable Electrical, Solar & CCTV Installation Services
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
              Professional installation solutions for homes, businesses, and industrial facilities. Power your property with safe electrical systems, solar energy, and smart security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="bg-accent text-primary hover:bg-accent/90 h-14 px-8 text-base font-bold rounded-full shadow-[0_0_20px_rgba(255,193,7,0.3)] flex items-center justify-center transition-all"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/15551234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-14 px-8 text-base font-semibold rounded-full border border-white/30 text-primary hover:bg-white hover:text-primary backdrop-blur-sm bg-white/10 dark:text-white dark:hover:text-primary transition-colors flex items-center justify-center"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6 animate-in fade-in duration-1000 delay-500">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-muted flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i}`} alt="Customer" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center text-accent">
                  {/* Star rating */}
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 mt-1"><span className="font-bold text-white">500+</span> Happy Clients</p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative h-full min-h-[500px] w-full animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
            {/* Floating Images Composition */}
            <div className="absolute top-[10%] right-[10%] w-[65%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 rotate-2 hover:rotate-0 transition-transform duration-500 z-20">
              <img src={heroSolar} alt="Solar Installation" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Premium Solar Solutions</p>
              </div>
            </div>
            
            <div className="absolute bottom-[10%] left-[5%] w-[55%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 -rotate-3 hover:rotate-0 transition-transform duration-500 z-30">
              <img src={heroCctv} alt="CCTV Installation" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Smart Security Systems</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-[5%] right-[5%] w-24 h-24 bg-accent/20 rounded-full blur-2xl z-10"></div>
            <div className="absolute bottom-[20%] left-[20%] w-32 h-32 bg-blue-500/20 rounded-full blur-3xl z-10"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}