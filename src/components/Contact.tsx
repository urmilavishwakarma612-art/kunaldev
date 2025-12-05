import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Linkedin, Github, Instagram, Twitter, Mail, Send, MessageCircle, Video, FileText, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const serviceTypes = [
  "Landing Page",
  "Multi-Page Website",
  "Full Stack Website",
  "Portfolio Website",
  "E-Commerce Website",
  "Website Redesign",
  "Bug Fix",
  "Custom Requirement"
];

const socialLinks = [{
  name: "LinkedIn",
  url: "https://www.linkedin.com/in/kunal-vishwakarma-975b26326/",
  icon: Linkedin
}, {
  name: "GitHub",
  url: "https://github.com/kunalvish08",
  icon: Github
}, {
  name: "Instagram",
  url: "https://instagram.com/code_x_kunal_dev",
  icon: Instagram
}, {
  name: "Twitter",
  url: "https://x.com/Kunal_Vish_08",
  icon: Twitter
}];
const contactOptions = [{
  name: "DM on Instagram",
  url: "https://instagram.com/code_x_kunal_dev",
  icon: Instagram,
  color: "from-pink-500 to-purple-500"
}, {
  name: "DM on WhatsApp",
  url: "https://wa.me/917985177849",
  icon: MessageCircle,
  color: "from-green-500 to-green-600"
}, {
  name: "Schedule a Meet",
  url: "https://calendly.com/codexkunal-dev/30min",
  icon: Video,
  color: "from-blue-500 to-cyan-500",
  note: "Google Meet / Zoom"
}, {
  name: "Fill a Form",
  icon: FileText,
  color: "from-primary to-accent",
  action: "scroll-form"
}];
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}
export const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "",
    budget: "",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showBookingOptions, setShowBookingOptions] = useState(false);
  const handleContactOption = (option: typeof contactOptions[0]) => {
    if (option.action === "scroll-form") {
      setShowBookingOptions(false);
      document.getElementById("contact-form")?.scrollIntoView({
        behavior: "smooth"
      });
    } else if (option.url) {
      window.open(option.url, "_blank", "noopener,noreferrer");
    }
  };
  const headerAnimation = useScrollAnimation(0.2);
  const formAnimation = useScrollAnimation(0.1);
  const infoAnimation = useScrollAnimation(0.1);
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive"
      });
      return;
    }
    const mailtoLink = `mailto:codexkunal.dev@gmail.com?subject=Contact from ${encodeURIComponent(formData.name.trim())} - ${encodeURIComponent(formData.serviceType || "General Inquiry")}&body=${encodeURIComponent(formData.message.trim())}%0A%0AService Type: ${encodeURIComponent(formData.serviceType || "Not specified")}%0ABudget: ₹${encodeURIComponent(formData.budget || "Not specified")}%0AFrom: ${encodeURIComponent(formData.email.trim())}`;
    window.location.href = mailtoLink;
    toast({
      title: "Message Ready!",
      description: "Your email client has been opened with the message."
    });
    setFormData({
      name: "",
      email: "",
      serviceType: "",
      budget: "",
      message: ""
    });
    setErrors({});
  };
  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: undefined
      });
    }
  };
  return <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={headerAnimation.ref} className={`text-center mb-16 transition-all duration-700 ${headerAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div id="contact-form" ref={formAnimation.ref} className={`glass-strong rounded-2xl p-8 transition-all duration-700 delay-100 ${formAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <h3 className="text-2xl font-display font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input type="text" placeholder="Your Name" value={formData.name} onChange={e => handleChange("name", e.target.value)} className={`bg-background/50 border-border/50 focus:border-primary transition-colors ${errors.name ? "border-destructive" : ""}`} />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <Input type="email" placeholder="Your Email" value={formData.email} onChange={e => handleChange("email", e.target.value)} className={`bg-background/50 border-border/50 focus:border-primary transition-colors ${errors.email ? "border-destructive" : ""}`} />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Service Type</label>
                <Select value={formData.serviceType} onValueChange={(value) => handleChange("serviceType", value)}>
                  <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary transition-colors">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    {serviceTypes.map((service) => (
                      <SelectItem key={service} value={service}>{service}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Estimated Budget (₹)</label>
                <Input 
                  type="text" 
                  placeholder="e.g., 5000" 
                  value={formData.budget} 
                  onChange={e => handleChange("budget", e.target.value)} 
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors" 
                />
              </div>
              <div>
                <Textarea placeholder="Your Message" value={formData.message} onChange={e => handleChange("message", e.target.value)} rows={5} className={`bg-background/50 border-border/50 focus:border-primary transition-colors resize-none ${errors.message ? "border-destructive" : ""}`} />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </div>
              <Button type="submit" variant="hero" className="w-full group">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div ref={infoAnimation.ref} className={`space-y-8 transition-all duration-700 delay-200 ${infoAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            {/* Book a Call Card */}
            

            {/* Email Card */}
            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold mb-4">Email Me</h3>
              <a href="mailto:codexkunal.dev@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="text-lg">codexkunal.dev@gmail.com</span>
              </a>
            </div>

            {/* Social Links Card */}
            <div className="glass-strong rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-background/30 hover:bg-primary/10 border border-border/30 hover:border-primary/50 transition-all group" style={{
                transitionDelay: infoAnimation.isVisible ? `${index * 100}ms` : "0ms"
              }}>
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {social.name}
                    </span>
                  </a>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
    </section>;
};