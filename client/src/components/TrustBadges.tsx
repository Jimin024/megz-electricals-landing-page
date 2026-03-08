import { Shield, Clock, Wrench, PhoneCall } from "lucide-react";

export function TrustBadges() {
  const badges = [
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "10+ Years Experience",
      description: "Proven track record in the industry",
    },
    {
      icon: <Wrench className="w-8 h-8 text-accent" />,
      title: "500+ Installations",
      description: "Successfully completed projects",
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Certified Technicians",
      description: "Licensed and highly trained experts",
    },
    {
      icon: <PhoneCall className="w-8 h-8 text-accent" />,
      title: "24/7 Support",
      description: "Emergency electrical assistance",
    },
  ];

  return (
    <section className="py-12 bg-white dark:bg-card border-y">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="sr-only">Why clients trust MEGZ ELECTRICALS</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-muted/50 transition-colors duration-300"
            >
              <div className="mb-4 p-4 rounded-full bg-primary/5 dark:bg-primary/20">
                {badge.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
