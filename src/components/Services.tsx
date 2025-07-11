import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaCalendarCheck, FaChartBar, FaUserFriends } from 'react-icons/fa';

const services = [
  {
    icon: <FaSearch className="service-icon text-secondary text-4xl mb-4 transition-colors duration-300 group-hover:text-primary" />,
    title: "Recherche automatisée personnalisée",
    description: "Notre agent intelligent parcourt toutes les plateformes pour vous proposer les meilleures annonces selon vos critères."
  },
  {
    icon: <FaCalendarCheck className="service-icon text-secondary text-4xl mb-4 transition-colors duration-300 group-hover:text-primary" />,
    title: "Organisation des visites simplifiée",
    description: "Nous contactons les agences ou propriétaires et planifions les visites selon vos disponibilités, sans effort de votre part."
  },
  {
    icon: <FaChartBar className="service-icon text-secondary text-4xl mb-4 transition-colors duration-300 group-hover:text-primary" />,
    title: "Tableau de bord & suivi en temps réel",
    description: "Suivez l'avancement de vos recherches, vos visites et vos démarches depuis un espace personnel intuitif."
  },
  {
    icon: <FaUserFriends className="service-icon text-secondary text-4xl mb-4 transition-colors duration-300 group-hover:text-primary" />,
    title: "Accompagnement humain & support réactif",
    description: "Notre équipe reste disponible pour répondre à vos questions et vous accompagner à chaque étape."
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

const Services: React.FC = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="w-full py-12 sm:py-24 px-2 sm:px-8 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 relative flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Overlay de texture subtile */}
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'40\' height=\'40\' fill=\'%23e5e7eb\'/%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1.5\' fill=\'%23d1d5db\'/%3E%3C/svg%3E")', opacity: 0.18}} />
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-8 sm:mb-14 text-center text-secondary uppercase tracking-wide relative z-10">Nos services</h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 relative z-10">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="group bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center text-center border border-primary/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, type: 'spring', bounce: 0.22, delay: idx * 0.13 }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px #FFA72655', backgroundColor: '#FFF8F2' }}
          >
            <span className="relative flex items-center justify-center mb-2">
              <span className="absolute w-16 h-16 rounded-full bg-secondary/30 blur-xl opacity-0 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500 animate-service-halo" />
              <span className="block group-hover:animate-service-icon-spin group-hover:animate-service-icon-pulse">{service.icon}</span>
            </span>
            <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors duration-300 group-hover:animate-service-title-shine">
              {service.title}
            </h3>
            <p className="text-base text-primary/80 font-medium mb-2">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services; 