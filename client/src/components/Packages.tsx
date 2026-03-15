import { Check } from "lucide-react";

export function Packages() {
  const packages = [
    {
      name: "Solar Starter",
      target: "Small Homes",
      description: "Perfect for essential power backup and basic energy needs.",
      features: [
        "Basic solar panel system",
        "Standard inverter included",
        "Essential battery backup",
        "Standard installation",
        "1-Year free maintenance"
      ],
      highlighted: false,
    },
    {
      name: "Solar Pro",
      target: "Medium Homes",
      description: "Our most popular package for comprehensive home power.",
      features: [
        "Higher power output arrays",
        "Smart hybrid inverter",
        "Extended battery capacity",
        "Priority installation",
        "3-Year free maintenance",
        "Mobile app monitoring"
      ],
      highlighted: true,
    },
    {
      name: "Solar Business",
      target: "Commercial Buildings",
      description: "Heavy-duty solutions for businesses to reduce energy costs.",
      features: [
        "Large commercial solar arrays",
        "High-capacity industrial inverters",
        "Scalable battery banks",
        "Load balancing configuration",
        "5-Year comprehensive support",
        "Advanced analytics dashboard"
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold text-accent tracking-wider uppercase mb-3">Pricing Plans</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">Solar Installation Packages</h2>
          <p className="text-lg text-white/80">
            Choose the right solar solution for your energy needs. We offer flexible packages tailored for homes and businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`rounded-3xl p-8 flex flex-col relative ${
                pkg.highlighted 
                  ? "bg-white text-slate-900 dark:text-slate-900 shadow-2xl scale-105 border-4 border-accent z-10" 
                  : "bg-primary-foreground/10 border border-white/20 backdrop-blur-sm"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-primary px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <p className={`text-sm font-bold mb-2 ${pkg.highlighted ? "text-primary" : "text-accent"}`}>{pkg.target}</p>
                <h3 className={`text-3xl font-black mb-4 ${pkg.highlighted ? "text-slate-900 dark:text-slate-900" : ""}`}>{pkg.name}</h3>
                <p className={pkg.highlighted ? "text-slate-700 dark:text-slate-800" : "text-white/70"}>
                  {pkg.description}
                </p>
              </div>
              
              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`mt-0.5 rounded-full p-0.5 ${pkg.highlighted ? "bg-primary/10 text-primary" : "bg-white/10 text-accent"}`}>
                        <Check className="w-4 h-4" />
                      </div>
                      <span className={pkg.highlighted ? "text-slate-800 dark:text-slate-900" : "text-white/90"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className={`w-full h-12 rounded-xl font-bold flex items-center justify-center transition-colors ${
                  pkg.highlighted 
                    ? "bg-primary text-white hover:bg-primary/90" 
                    : "bg-white text-primary hover:bg-white/90"
                }`}
              >
                Request Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
