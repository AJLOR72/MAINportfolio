import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/UI/button';
import { Badge } from '@/components/UI/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  index: number;
}

export const ProjectCard = ({ title, description, tags, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="glass-panel rounded-xl p-6 md:p-8 group h-full flex flex-col relative overflow-hidden"
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-accent/10 to-transparent" />
      
      <div className="relative flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="font-orbitron text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="w-12 h-0.5 bg-primary" />
          </div>
          <div className="flex gap-2 ml-4">
            <Button
              size="icon"
              variant="ghost"
              className="h-9 w-9 rounded-lg hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/30 transition-all"
            >
              <Github className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="h-9 w-9 rounded-lg hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/30 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 leading-relaxed flex-1 text-sm md:text-base">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20 font-orbitron"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
