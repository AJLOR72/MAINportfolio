import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const scrollToMissions = () => {
    const element = document.getElementById('missions');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-space-dark to-background" />
      
      {/* Asymmetric accent shape */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mb-8"
          >
            <div className="inline-block mb-4 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
              <span className="text-sm font-orbitron text-primary">Data Scientist & ML Engineer</span>
            </div>
            
            <h1 className="font-orbitron text-7xl md:text-9xl font-black mb-6 leading-none">
              <span className="block text-foreground">ADHITHYA</span>
              <span className="block text-primary italic -ml-1 mt-2">explores</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                intelligence
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-2xl mb-10"
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Building systems that learn, adapt, and solve. 
              <span className="text-foreground font-medium"> Turning data into decisions</span>, 
              models into insights, and ideas into reality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              onClick={scrollToMissions}
              size="lg"
              className="font-orbitron bg-primary hover:bg-primary/90 text-primary-foreground px-8 group"
            >
              View Work
              <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-orbitron border-2 border-border hover:border-primary/50 hover:bg-primary/5 px-8"
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 flex flex-wrap gap-8 items-center"
          >
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '20+', label: 'Projects' },
              { value: '∞', label: 'Ideas' }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1 h-12 bg-primary rounded-full" />
                <div>
                  <div className="font-orbitron text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 border border-primary rounded-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </section>
  );
};
