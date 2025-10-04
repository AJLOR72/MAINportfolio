import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'Python', proficiency: 95, color: 'primary' },
    { name: 'TensorFlow', proficiency: 90, color: 'secondary' },
    { name: 'PyTorch', proficiency: 88, color: 'accent' },
    { name: 'NLP', proficiency: 85, color: 'primary' },
    { name: 'Computer Vision', proficiency: 92, color: 'secondary' },
    { name: 'Deep Learning', proficiency: 93, color: 'accent' },
    { name: 'SQL/NoSQL', proficiency: 87, color: 'primary' },
    { name: 'AWS/Cloud', proficiency: 82, color: 'secondary' },
  ];

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-5xl md:text-6xl font-bold mb-6 cosmic-glow">
            TECH CONSTELLATION
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            An orbital array of technologies powering the mission forward.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-panel rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-orbitron text-lg font-semibold text-foreground">
                    {skill.name}
                  </h3>
                  <span className={`text-sm font-bold text-${skill.color}`}>
                    {skill.proficiency}%
                  </span>
                </div>
                
                <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.proficiency}%` } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: 'easeOut' }}
                    className={`absolute inset-y-0 left-0 bg-${skill.color} rounded-full`}
                    style={{
                      boxShadow: `0 0 10px hsl(var(--${skill.color}))`,
                    }}
                  />
                </div>

                {/* Orbiting indicator */}
                <div className="relative mt-4 h-16 flex items-center justify-center">
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 10 + index,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute"
                  >
                    <div 
                      className={`w-3 h-3 rounded-full bg-${skill.color}`}
                      style={{
                        transform: `translateX(${skill.proficiency * 0.5}px)`,
                        boxShadow: `0 0 10px hsl(var(--${skill.color}))`,
                      }}
                    />
                  </motion.div>
                  <div className={`w-24 h-24 border border-${skill.color}/30 rounded-full`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
