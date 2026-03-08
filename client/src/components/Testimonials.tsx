import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      text: "MEGZ Electricals installed our solar system perfectly. Very professional and reliable.",
      author: "David M.",
      role: "Homeowner",
      rating: 5,
    },
    {
      text: "The CCTV installation improved the security of our office greatly. Highly recommend their clean work.",
      author: "Sarah J.",
      role: "Office Manager",
      rating: 5,
    },
    {
      text: "Fast and clean electrical work. They fixed a major panel issue the same day I called.",
      author: "Michael T.",
      role: "Business Owner",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent tracking-wider uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black">What Our Clients Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl relative">
              <div className="text-accent mb-6">
                <svg className="w-10 h-10 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-lg font-medium mb-8 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white">{testimonial.author}</h4>
                  <p className="text-white/70 text-sm">{testimonial.role}</p>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}