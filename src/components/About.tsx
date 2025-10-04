import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Telescope, Cpu } from 'lucide-react';
import nebulaBg from '@/assets/nebula-bg.jpg';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Sparkles, label: 'Projects Launched', value: '25+' },
    { icon: Telescope, label: 'Research Papers', value: '12' },
    { icon: Cpu, label: 'Models Trained', value: '50+' },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${nebulaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-orbitron text-5xl md:text-6xl font-bold text-center mb-6 cosmic-glow">
            MISSION PROFILE
          </h2>
          
          <div className="glass-panel rounded-2xl p-8 md:p-12 mb-12">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
              Navigating the intersection of <span className="text-primary font-semibold">artificial intelligence</span>, 
              {' '}<span className="text-secondary font-semibold">data science</span>, and 
              {' '}<span className="text-accent font-semibold">machine learning</span>, I chart courses 
              through complex datasets to uncover patterns hidden in the cosmic noise.
            </p>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              With expertise spanning deep learning architectures, natural language processing, and computer vision,
              I transform raw data into actionable intelligence—one neural pathway at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="glass-panel rounded-xl p-6 text-center group hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transition-all duration-300"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:drop-shadow-[0_0_12px_hsl(var(--primary))] transition-all" />
                  <div className="font-orbitron text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
