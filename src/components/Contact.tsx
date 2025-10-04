import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Transmission received! Will respond within 24 hours.');
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, label: 'explorer@space.ai', link: 'mailto:explorer@space.ai' },
    { icon: Linkedin, label: 'LinkedIn Profile', link: '#' },
    { icon: MapPin, label: 'Remote / Global', link: '#' },
  ];

  return (
    <section id="transmission" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-space-dark/20 to-background" />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-5xl md:text-6xl font-bold mb-6 cosmic-glow">
              INITIATE TRANSMISSION
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to collaborate on the next breakthrough? Open a channel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass-panel rounded-2xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-orbitron font-medium mb-2 text-foreground/80">
                    CALL SIGN
                  </label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    required
                    className="bg-background/50 border-primary/30 focus:border-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-orbitron font-medium mb-2 text-foreground/80">
                    FREQUENCY
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-background/50 border-primary/30 focus:border-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-orbitron font-medium mb-2 text-foreground/80">
                    MESSAGE
                  </label>
                  <Textarea
                    placeholder="Transmit your message..."
                    required
                    rows={5}
                    className="bg-background/50 border-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-orbitron bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.7)] transition-all duration-300"
                >
                  {isSubmitting ? (
                    'TRANSMITTING...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      SEND TRANSMISSION
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="glass-panel rounded-2xl p-8">
                <h3 className="font-orbitron text-2xl font-bold mb-6 text-foreground">
                  COMMUNICATION CHANNELS
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={info.label}
                        href={info.link}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-lg bg-background/30 hover:bg-background/50 border border-border/30 hover:border-primary/50 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                          {info.label}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-8">
                <h3 className="font-orbitron text-lg font-bold mb-4 text-foreground">
                  MISSION STATUS
                </h3>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-secondary animate-glow-pulse" />
                  <span className="text-foreground/80">Available for new missions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};
