import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_hbqqzaj',
        'template_0bv8cxs',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Tanmay Shinde'
        },
        'LLc_YME-EUHBMbC0t'
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "0943tanmay3490@gmail.com",
      href: "mailto:0943tanmay3490@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+1 (508) 425-9978",
      href: "tel:+15084259978"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Worcester, MA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/rybnd",
      username: "rybnd"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/tanmayshinde45",
      username: "tanmayshinde45"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">
            LET'S CREATE <span className="gradient-text">GREAT THINGS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready to discuss your next project? Let's connect and build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="glass-card border-white/20">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="h-6 w-6 text-neon-glow" />
                <h3 className="text-2xl font-bold gradient-text">Send a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="glass-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="glass-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="glass-input min-h-[120px] resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="glass-card border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold gradient-text mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="group">
                      <a 
                        href={item.href}
                        className="flex items-center space-x-4 p-4 rounded-lg glass-subtle hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-foreground/60 uppercase tracking-wide">{item.label}</p>
                          <p className="text-foreground font-medium group-hover:text-glow transition-colors duration-300">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-card border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold gradient-text mb-6">Connect Online</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-lg glass-subtle hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <social.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 uppercase tracking-wide">{social.label}</p>
                        <p className="text-foreground font-medium group-hover:text-glow transition-colors duration-300">
                          @{social.username}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="glass-card border-neon-glow/30 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-bold mb-4 gradient-text">
                  Ready to Start Your Project?
                </h4>
                <p className="text-foreground/70 mb-6">
                  Let's discuss how we can bring your ideas to life with cutting-edge technology and innovative solutions.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => window.open('mailto:0943tanmay3490@gmail.com', '_blank')}
                  className="border-neon-glow/50 hover:border-neon-glow hover:bg-neon-glow/10"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me Directly
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;