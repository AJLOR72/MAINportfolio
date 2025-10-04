import { motion } from 'framer-motion';
import { Rocket, Compass, Radio } from 'lucide-react';

export const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', label: 'Launch', icon: Rocket },
    { id: 'missions', label: 'Missions', icon: Compass },
    { id: 'transmission', label: 'Transmission', icon: Radio },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-border/40"
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-orbitron text-lg font-black tracking-tight"
          >
            <span className="text-foreground">ADHI</span>
            <span className="text-primary">THYA</span>
          </motion.div>
          
          <div className="flex gap-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-orbitron font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-primary/5 group"
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
