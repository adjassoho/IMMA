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

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.92, filter: 'blur(16px)', boxShadow: '0 0 0 0 #FFA72600' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    boxShadow: '0 8px 32px #FFA72622',
    transition: {
      duration: 0.55,
      type: 'spring',
      bounce: 0.22,
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
      className="w-full py-24 px-2 sm:px-8 bg-white flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-14 text-center text-secondary uppercase tracking-wide">Nos services</h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
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