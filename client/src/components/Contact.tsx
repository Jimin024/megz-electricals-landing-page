import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
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
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground">+1 (555) 987-6543 (Emergency)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email Address</h4>
                  <p className="text-muted-foreground">info@megzelectricals.com</p>
                  <p className="text-muted-foreground">quotes@megzelectricals.com</p>
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
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input placeholder="John Doe" className="bg-muted/50 border-0" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input placeholder="+1 234 567 890" className="bg-muted/50 border-0" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Service Needed</label>
                <Select>
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
                <Select>
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
                />
              </div>

              <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl mt-4">
                Request Free Quote
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}