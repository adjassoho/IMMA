import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Définissez vos critères',
    description: 'Indiquez la ville, le budget, le type de bien et vos préférences.',
    image: '/images/step1.webp', // À remplacer par la vraie image
    placeholder: 'https://via.placeholder.com/400x520?text=Étape+1',
  },
  {
    title: "L'agent recherche pour vous",
    description: "Notre agent intelligent scanne toutes les plateformes et sélectionne les meilleures annonces.",
    image: '/images/step2.webp',
    placeholder: 'https://via.placeholder.com/400x520?text=Étape+2',
  },
  {
    title: 'Organisation des visites',
    description: 'Nous contactons les agences ou propriétaires et planifions les visites selon vos disponibilités.',
    image: '/images/step3.png',
    placeholder: 'https://via.placeholder.com/400x520?text=Étape+3',
  },
  {
    title: 'Suivi & tableau de bord',
    description: "Suivez l'avancement de vos recherches et visites depuis votre espace personnel.",
    image: '/images/step4.png',
    placeholder: 'https://via.placeholder.com/400x520?text=Étape+4',
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
      duration: 0.7,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.96, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.7 },
  },
};

const HowItWorks: React.FC = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="w-full py-24 px-2 sm:px-8 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 relative flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Overlay de texture subtile */}
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'40\' height=\'40\' fill=\'%23e5e7eb\'/%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1.5\' fill=\'%23d1d5db\'/%3E%3C/svg%3E")', opacity: 0.18}} />
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-14 text-center text-secondary uppercase tracking-wide relative z-10"
      >
        Comment ça marche
      </motion.h2>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, idx) => {
          const imgUrl = step.image ? step.image : step.placeholder;
          return (
            <motion.div
              key={idx}
              className="relative group rounded-3xl overflow-hidden min-h-[520px] flex flex-col justify-between shadow-xl transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
              style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              variants={cardVariants}
            >
              {/* Overlay sombre */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
              {/* Titre en haut */}
              <div className="relative z-10 p-8 w-full flex flex-col items-center text-center">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-0 drop-shadow-lg uppercase tracking-wide mt-2">
                  {step.title}
                </h3>
              </div>
              {/* Description en bas, animée vers le centre au hover */}
              <div className="relative z-10 p-8 w-full flex flex-col items-center text-center mb-2 mt-auto transition-all duration-500 group-hover:translate-y-[-120px] group-hover:opacity-100 opacity-90">
                <p className="text-lg text-white/90 font-medium drop-shadow-md">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default HowItWorks; 