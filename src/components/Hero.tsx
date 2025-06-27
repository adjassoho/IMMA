import React from 'react';
import { motion } from 'framer-motion';
import '../App.css'; // Pour s'assurer que les styles globaux sont chargés

const particles = Array.from({ length: 18 });

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden z-0 bg-primary"
    >
      {/* Image d'arrière-plan animée */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Overlay de particules animées */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {particles.map((_, i) => (
          <span
            key={i}
            className={`absolute rounded-full bg-white/30 animate-particle${i % 3 + 1}`}
            style={{
              width: `${8 + (i % 3) * 4}px`,
              height: `${8 + (i % 3) * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.7,
              filter: 'blur(1.5px)'
            }}
          />
        ))}
      </div>
      {/* Overlay plus léger pour voir l'image */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-primary/80 z-10" />

      {/* Texte animé */}
      <div className="relative z-30 w-full flex flex-col items-center justify-center text-center text-white px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg"
        >
          Trouvez votre{' '}
          <motion.span
            initial={{ backgroundPosition: '0% 50%' }}
            animate={{ backgroundPosition: '100% 50%' }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
            className="text-secondary px-2 bg-gradient-to-r from-secondary via-white/80 to-secondary bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-shine"
            style={{
              backgroundImage: 'linear-gradient(90deg, #FFA726 0%, #fff 50%, #FFA726 100%)',
            }}
          >
            appartement de rêve
          </motion.span>
          , sans effort.
        </motion.h1>
        {/* Paragraphe animé moderne */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="text-base sm:text-lg md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow font-semibold font-[Poppins,sans-serif] text-white/90"
        >
          Notre <span className="relative px-1 animate-agent-highlight font-bold text-secondary">agent
            <span className="absolute left-0 top-1/2 w-full h-2 bg-secondary/30 rounded-full blur-md -z-10 animate-agent-shine" style={{transform: 'translateY(-50%)'}}></span>
          </span> parcourt des milliers d'annonces et organise les visites pour vous. Concentrez-vous sur l'essentiel : votre futur chez-vous.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: '0 0 0 8px #FFA72644' }}
            animate={{ scale: [1, 1.04, 1], boxShadow: ['0 0 0 0 #FFA72644', '0 0 0 12px #FFA72622', '0 0 0 0 #FFA72644'] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
            className="bg-secondary hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform shadow-lg focus:outline-none"
          >
            Commencer ma recherche
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const AnimatedParagraph: React.FC = () => {
  const text = "Notre IA parcourt des milliers d'annonces et organise les visites pour vous. Concentrez-vous sur l'essentiel : votre futur chez-vous.";
  const words = text.split(' ');
  return (
    <motion.p
      className="text-base sm:text-lg md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow font-semibold font-[Poppins,sans-serif] text-white/90 animate-glow"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.07,
          },
        },
      }}
      style={{ letterSpacing: '0.01em' }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
          className="inline-block mx-0.5"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default Hero;
