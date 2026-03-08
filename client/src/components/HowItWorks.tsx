export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Request a Quote",
      description: "Contact us via phone, WhatsApp, or our online form to discuss your requirements.",
    },
    {
      number: "02",
      title: "Site Inspection",
      description: "Our experts visit your property to assess the technical needs and finalize the plan.",
    },
    {
      number: "03",
      title: "Professional Installation",
      description: "Our certified team safely installs your electrical, solar, or CCTV systems.",
    },
    {
      number: "04",
      title: "Testing & Support",
      description: "Rigorous testing to ensure everything works perfectly, followed by ongoing support.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent tracking-wider uppercase mb-3">Process</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">How It Works</h3>
          <p className="text-lg text-muted-foreground">
            A simple, transparent process to get your home or business powered and secured.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-background border-4 border-muted dark:border-muted flex items-center justify-center mb-6 group-hover:border-accent group-hover:bg-primary transition-all duration-300 shadow-sm">
                <span className="text-3xl font-black text-primary/30 dark:text-white/30 group-hover:text-accent transition-colors">
                  {step.number}
                </span>
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}