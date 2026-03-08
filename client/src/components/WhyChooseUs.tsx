import { CheckCircle2 } from "lucide-react";
import teamImg from "@/assets/images/team.png";

export function WhyChooseUs() {
  const reasons = [
    "Certified & Licensed Technicians",
    "High-Quality Premium Materials",
    "Transparent & Affordable Pricing",
    "Fast & Efficient Installation",
    "Comprehensive After-Sales Support",
    "Strict Adherence to Safety Standards"
  ];

  return (
    <section className="py-24 bg-white dark:bg-card overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl transform -rotate-3 z-0"></div>
            <img 
              src={teamImg} 
              alt="Professional electrical team" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-xl object-cover"
            />
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-2xl z-20 hidden md:block">
              <div className="text-4xl font-black text-accent mb-1">10+</div>
              <div className="text-sm font-medium">Years of<br/>Excellence</div>
            </div>
          </div>
          
          <div>
            <h2 className="text-sm font-bold text-accent tracking-wider uppercase mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">The Trusted Choice for Your Power Needs</h3>
            <p className="text-lg text-muted-foreground mb-8">
              At MEGZ ELECTRICALS, we don't just install systems; we build lasting relationships based on trust, quality, and reliability. Our team is dedicated to providing the highest standard of service in every project.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-4 gap-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <span className="font-semibold text-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}