import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full py-12 sm:py-24 px-2 sm:px-8 bg-white flex flex-col items-center justify-center min-h-[60vh]"
    >
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Colonne gauche */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase mb-4 sm:mb-6 text-primary tracking-wide text-center md:text-left">NEXO IMMO : LE LIEN IMMOBILIER</h2>
          <p className="text-base sm:text-lg md:text-xl text-primary/90 italic leading-relaxed text-center md:text-left">
            Nexo IMMO révolutionne la recherche immobilière en France. Fini les heures perdues à naviguer entre Le Bon Coin, PAP et SeLoger. <br />
            Notre intelligence artificielle trouve, contacte et organise vos visites automatiquement.<br /><br />
            Transformer la recherche de logement d'une corvée chronophage en une expérience fluide et automatisée. Parce que votre temps vaut mieux que de scroller des centaines d'annonces.
          </p>
        </div>
        {/* Colonne droite */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase mb-4 sm:mb-6 text-primary tracking-wide text-center md:text-left">UN SERVICE IMMOBILIER COMPLET AVEC NEXO IMMO</h2>
          <p className="text-base sm:text-lg md:text-xl text-primary/90 leading-relaxed mb-4 text-center md:text-left">
            Vous êtes à la recherche d'un appartement ou d'un service de gestion locative ? Vous souhaitez vendre, acheter ou louer un bien immobilier rapidement ?<br /><br />
            Pour toutes vos démarches, laissez-vous guider par notre agent intelligent. Gestion de vos critères, prise de contact avec les propriétaires ou agences, organisation des visites : notre technologie s'occupe de tout.<br /><br />
            Réussir un projet immobilier, ça prend du temps et ça s'apprend. Avec Nexo IMMO, gagnez en efficacité et en sérénité.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About; 