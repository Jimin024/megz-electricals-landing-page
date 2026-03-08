import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Sun, Cctv } from "lucide-react";
import serviceElectrical from "@/assets/images/service-electrical.png";
import serviceSolar from "@/assets/images/service-solar.png";
import serviceCctv from "@/assets/images/service-cctv.png";

export function Services() {
  const services = [
    {
      id: "electrical",
      title: "Electrical Installation",
      description: "Complete wiring, panel installation, electrical maintenance, and power system setup for residential and commercial buildings.",
      image: serviceElectrical,
      icon: <Zap className="w-6 h-6 text-accent" />,
    },
    {
      id: "solar",
      title: "Solar Installation",
      description: "Professional solar panel systems including inverters, batteries, hybrid systems, and off-grid solutions.",
      image: serviceSolar,
      icon: <Sun className="w-6 h-6 text-accent" />,
    },
    {
      id: "cctv",
      title: "CCTV Installation",
      description: "Advanced security camera installation for homes, offices, and commercial buildings with remote monitoring.",
      image: serviceCctv,
      icon: <Cctv className="w-6 h-6 text-accent" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent tracking-wider uppercase mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">Professional Services We Offer</h3>
          <p className="text-lg text-muted-foreground">
            We deliver top-tier electrical, solar, and security solutions tailored to your specific needs, ensuring safety and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-card rounded-3xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-card p-3 rounded-full shadow-lg z-20">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h4>
                <p className="text-muted-foreground mb-8 flex-grow">
                  {service.description}
                </p>
                <Button variant="ghost" className="w-fit p-0 hover:bg-transparent text-primary dark:text-white font-semibold group/btn">
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}