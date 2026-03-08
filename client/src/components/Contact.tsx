import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    type: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number");
      return;
    }
    if (!formData.service) {
      toast.error("Please select a service");
      return;
    }
    if (!formData.type) {
      toast.error("Please select a project type");
      return;
    }

    // Simulate successful submission
    toast.success("Quote request submitted successfully! We'll contact you soon.");
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      service: "",
      type: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-sm font-bold text-accent tracking-wider uppercase mb-3">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">Ready to Power Your Next Project?</h3>
            <p className="text-lg text-muted-foreground mb-10">
              Contact us today for a free consultation and quote. Our experts are ready to provide the best solutions for your electrical, solar, and security needs.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone & WhatsApp</h4>
                  <a href="tel:+15551234567" className="text-primary hover:underline">+1 (555) 123-4567</a>
                  <br/>
                  <a href="tel:+15559876543" className="text-primary hover:underline">+1 (555) 987-6543 (Emergency)</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Address</h4>
                  <a href="mailto:info@megzelectricals.com" className="text-primary hover:underline">info@megzelectricals.com</a>
                  <br/>
                  <a href="mailto:quotes@megzelectricals.com" className="text-primary hover:underline">quotes@megzelectricals.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Office Location</h4>
                  <p className="text-muted-foreground">123 Tech Avenue, Innovation Park</p>
                  <p className="text-muted-foreground">Business District, 10001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-card p-8 rounded-3xl shadow-lg border">
            <h3 className="text-2xl font-bold mb-6">Quick Quote Form</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input 
                    placeholder="John Doe" 
                    className="bg-muted/50 border-0" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input 
                    placeholder="+1 234 567 890" 
                    className="bg-muted/50 border-0" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Service Needed</label>
                <Select value={formData.service} onValueChange={(value) => handleSelectChange("service", value)}>
                  <SelectTrigger className="bg-muted/50 border-0">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electrical">Electrical Installation</SelectItem>
                    <SelectItem value="solar">Solar Power Installation</SelectItem>
                    <SelectItem value="cctv">CCTV & Security</SelectItem>
                    <SelectItem value="maintenance">Maintenance/Repair</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Project Type</label>
                <Select value={formData.type} onValueChange={(value) => handleSelectChange("type", value)}>
                  <SelectTrigger className="bg-muted/50 border-0">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Home / Residential</SelectItem>
                    <SelectItem value="commercial">Office / Commercial</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message Details</label>
                <Textarea 
                  placeholder="Tell us about your project requirements..." 
                  className="min-h-[120px] bg-muted/50 border-0 resize-none" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl mt-4 transition-colors">
                Request Free Quote
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}