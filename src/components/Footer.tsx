import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/30 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-space-dark/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Rocket className="w-6 h-6 text-primary" />
            <span className="font-orbitron text-sm text-muted-foreground">
              © 2025 Adhithya • Exploring the Universe of Intelligence
            </span>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-orbitron"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-orbitron"
            >
              Terms
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-orbitron"
            >
              Credits
            </a>
          </motion.div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground/60">
            Designed with cosmic precision • Built for the future
          </p>
        </div>
      </div>
    </footer>
  );
};
