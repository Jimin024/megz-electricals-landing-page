import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#051626] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          <div className="col-span-1 lg:col-span-1">
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="text-2xl font-black tracking-tighter flex items-center gap-2 mb-6">
              <span className="text-white">MEGZ</span>
              <span className="text-accent">ELECTRICALS</span>
            </a>
            <p className="text-white/70 mb-6 max-w-sm">
              Professional electrical, solar, and CCTV installation solutions for residential, commercial, and industrial properties.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-accent hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-accent hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-accent hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-accent hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Our Projects</a></li>
              <li><a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#services" className="hover:text-accent transition-colors">Electrical Installation</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Solar Power Systems</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">CCTV & Security</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Maintenance</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Emergency Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-white/70 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 w-full text-white placeholder:text-white/50 focus:outline-none focus:border-accent"
              />
              <Button className="bg-accent hover:bg-accent/90 text-primary font-bold">
                Subscribe
              </Button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} MEGZ ELECTRICALS. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-primary border-2 border-accent text-accent rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors shadow-lg z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
