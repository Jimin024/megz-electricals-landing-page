import gallery1 from "@/assets/images/gallery-1.png";
import gallery2 from "@/assets/images/gallery-2.png";

export function Gallery() {
  // Using the generated images for the first two, and high quality Unsplash placeholders for the rest
  const images = [
    { src: gallery1, alt: "Solar panels on modern residential house rooftop", tag: "Solar" },
    { src: gallery2, alt: "Technician installing CCTV camera on office building", tag: "CCTV" },
    { src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800&h=800", alt: "Electrician working inside a breaker panel", tag: "Electrical" },
    { src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800&h=800", alt: "Solar battery and inverter system", tag: "Solar" },
    { src: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800&h=800", alt: "Security camera monitoring entrance", tag: "CCTV" },
    { src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800&h=800", alt: "Industrial electrical wiring", tag: "Industrial" },
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-accent tracking-wider uppercase mb-3">Our Portfolio</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black">Featured Installations</h3>
          </div>
          <p className="text-muted-foreground max-w-md">
            Take a look at some of our recent professional installations across residential, commercial, and industrial properties.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl overflow-hidden aspect-square bg-muted cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="inline-block px-3 py-1 bg-accent text-primary text-xs font-bold rounded-full w-fit mb-2">
                  {img.tag}
                </span>
                <p className="text-white font-medium line-clamp-2">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}