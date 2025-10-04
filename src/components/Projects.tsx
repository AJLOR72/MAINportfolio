import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ProjectCard } from './ProjectCard';
import { ArrowUpRight } from 'lucide-react';

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Neural Nebula Classifier',
      description: 'Deep learning model for astronomical image classification using CNNs. Achieved 96% accuracy in identifying nebula types across 50,000+ images from Hubble telescope data.',
      tags: ['PyTorch', 'Computer Vision', 'CNN', 'Astronomy'],
    },
    {
      title: 'Cosmic Sentiment Analyzer',
      description: 'NLP pipeline for analyzing scientific paper abstracts. Transformer-based architecture processing 1M+ research papers to extract emerging trends in astrophysics.',
      tags: ['BERT', 'NLP', 'Transformers', 'Python'],
    },
    {
      title: 'Stellar Trajectory Predictor',
      description: 'Time-series forecasting model for predicting celestial object movements. LSTM-based architecture with 99.2% accuracy over 10-year prediction windows.',
      tags: ['LSTM', 'TensorFlow', 'Time Series', 'NumPy'],
    },
    {
      title: 'Galaxy Cluster Detector',
      description: 'Object detection model using YOLO architecture for identifying galaxy clusters in deep space imagery. Processing 100+ TB of astronomical survey data.',
      tags: ['YOLO', 'Object Detection', 'CUDA', 'AWS'],
    },
    {
      title: 'Exoplanet Discovery Engine',
      description: 'Anomaly detection system for identifying potential exoplanets from light curve data. Discovered 23 candidate planets in Kepler mission dataset.',
      tags: ['Scikit-learn', 'Anomaly Detection', 'Signal Processing'],
    },
    {
      title: 'Quantum Field Simulator',
      description: 'Monte Carlo simulation framework for modeling quantum phenomena. High-performance computing implementation processing 10^12 particles per simulation.',
      tags: ['C++', 'CUDA', 'Quantum Computing', 'HPC'],
    },
  ];

  return (
    <section id="missions" className="relative py-32 overflow-hidden diagonal-lines">
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background to-background/95" />
      
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="inline-block mb-3 px-3 py-1 rounded-md border border-primary/30 bg-primary/5">
                <span className="text-xs font-orbitron text-primary uppercase tracking-wider">Selected Work</span>
              </div>
              <h2 className="font-orbitron text-6xl md:text-7xl font-black">
                <span className="text-foreground">Recent</span>{' '}
                <span className="text-primary italic">Projects</span>
              </h2>
            </div>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-primary font-orbitron cursor-pointer group"
            >
              <span>View All</span>
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </motion.div>
          </div>
        </motion.div>

        {/* Asymmetric grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`${
                index === 0 ? 'lg:col-span-8' : 
                index === 1 ? 'lg:col-span-4' :
                index === 2 ? 'lg:col-span-5' :
                index === 3 ? 'lg:col-span-7' :
                index === 4 ? 'lg:col-span-6' :
                'lg:col-span-6'
              }`}
            >
              <ProjectCard {...project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
