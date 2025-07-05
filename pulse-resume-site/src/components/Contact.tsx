
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
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
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/dhanachandru-r-b220072a3', '_blank');
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="text-base md:text-xl text-muted-foreground mt-4 md:mt-6 px-4">
            Ready to collaborate? Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <Card className="glass-effect glow-effect">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-primary">
                📧 Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input/50 border-border/50 focus:border-primary transition-all duration-300 text-sm md:text-base"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input/50 border-border/50 focus:border-primary transition-all duration-300 text-sm md:text-base"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-input/50 border-border/50 focus:border-primary transition-all duration-300 resize-none text-sm md:text-base"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-2 md:py-3 text-sm md:text-lg glow-effect"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <Card className="glass-effect glow-effect group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-secondary">
                  📞 Get in touch
                </h3>
                
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm md:text-base text-muted-foreground">Email:</span>
                    <span className="text-sm md:text-base text-primary break-all">chandru2004c@gmail.com</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                    <span className="text-sm md:text-base text-muted-foreground">Phone:</span>
                    <span className="text-sm md:text-base text-secondary">+91 6382349760</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-sm md:text-base text-muted-foreground">Location:</span>
                    <span className="text-sm md:text-base text-accent">Cuddalore, Tamil Nadu</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect glow-effect group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gradient">
                  🌐 Follow me
                </h3>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex-1 glass-effect border-primary/30 hover:bg-primary/10 group text-sm md:text-base"
                  >
                    <Github className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                    GitHub
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={handleLinkedInClick}
                    className="flex-1 glass-effect border-secondary/30 hover:bg-secondary/10 group text-sm md:text-base"
                  >
                    <Linkedin className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </Button>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-xs md:text-sm text-muted-foreground">
                    LinkedIn: linkedin.com/in/dhanachandru-r-b220072a3
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect glow-effect">
              <CardContent className="p-6 md:p-8 text-center">
                <h4 className="text-base md:text-lg font-semibold text-gradient mb-2">
                  ⚡ Quick Response
                </h4>
                <p className="text-sm md:text-base text-muted-foreground">
                  I typically respond within 24 hours. Let's discuss your next project!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
