import React, { useState, useEffect, useRef } from 'react';
import { FaRobot, FaRegCalendarCheck, FaChartLine, FaUserCheck } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const changes = [
  {
    badge: 'AUTOMATISATION',
    icon: <FaRobot className="text-secondary text-4xl" />,
    title: "Recherche automatisée par IA",
    before: "Avant : Des heures à chercher sur plusieurs sites",
    after: "Avec Nexo IMMO : L'IA scanne tout pour vous et sélectionne les meilleures annonces.",
    bold: "Gagnez un temps précieux et ne ratez plus aucune opportunité !"
  },
  {
    badge: 'VISITES',
    icon: <FaRegCalendarCheck className="text-secondary text-4xl" />,
    title: "Organisation des visites simplifiée",
    before: "Avant : Prendre contact et organiser les visites soi-même",
    after: "Avec Nexo IMMO : Prise de contact et organisation des visites automatisées selon vos disponibilités.",
    bold: "Vous ne vous occupez de rien, on s'occupe de tout !"
  },
  {
    badge: 'SUIVI',
    icon: <FaChartLine className="text-secondary text-4xl" />,
    title: "Suivi en temps réel",
    before: "Avant : Difficile de suivre l'avancement de ses démarches",
    after: "Avec Nexo IMMO : Un tableau de bord clair et des notifications à chaque étape.",
    bold: "Gardez le contrôle et la visibilité sur votre projet."
  },
  {
    badge: 'ACCOMPAGNEMENT',
    icon: <FaUserCheck className="text-secondary text-4xl" />,
    title: "Accompagnement humain réactif",
    before: "Avant : Peu ou pas d'accompagnement personnalisé",
    after: "Avec Nexo IMMO : Un support humain disponible et à l'écoute.",
    bold: "Un expert dédié pour vous rassurer à chaque étape."
  },
];

const AUTOPLAY_DELAY = 5000;

const WhatsNew: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const maxIndex = changes.length - 1;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handlePrev = () => setCurrent((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === maxIndex ? 0 : prev + 1));

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaX > 0 || e.deltaY > 0) handleNext();
    else if (e.deltaX < 0 || e.deltaY < 0) handlePrev();
  };

  // Auto-play
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === maxIndex ? 0 : prev + 1));
    }, AUTOPLAY_DELAY);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [maxIndex]);

  // Reset timer on manual navigation
  const handleManualNav = (navFn: () => void) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    navFn();
  };

  return (
    <section className="w-full py-20 px-2 sm:px-8 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 relative flex flex-col items-center justify-center overflow-hidden">
      {/* Overlay de texture subtile */}
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'40\' height=\'40\' fill=\'%23e5e7eb\'/%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1.5\' fill=\'%23d1d5db\'/%3E%3C/svg%3E")', opacity: 0.18}} />
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-8 sm:mb-14 text-center text-primary uppercase tracking-wide relative z-10">
        Qu'est-ce qui change avec Nexo IMMO ?
      </h2>
      <div className="w-full max-w-6xl flex flex-col items-center px-2 sm:px-8 relative z-10">
        <div className="flex items-center justify-center mb-6">
          <button
            onClick={() => handleManualNav(handlePrev)}
            disabled={current === 0}
            className="p-2 rounded-full bg-white shadow hover:bg-primary/10 disabled:opacity-30 mr-4"
            aria-label="Précédent"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className="flex gap-1">
            {changes.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${i === current ? 'bg-primary' : 'bg-primary/20'}`}
              />
            ))}
          </div>
          <button
            onClick={() => handleManualNav(handleNext)}
            className="p-2 rounded-full bg-white shadow hover:bg-primary/10 disabled:opacity-30 ml-4"
            aria-label="Suivant"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#1A237E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
        <div className="relative w-full" onWheel={handleWheel} style={{ minHeight: 320 }}>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full px-0 sm:px-4"
            >
              <div className="relative flex flex-col bg-white rounded-2xl shadow-lg p-6 sm:p-10 border border-primary/10 min-h-[240px] sm:min-h-[340px]">
                {/* Badge et icône */}
                <div className="flex items-center mb-6">
                  <span className="px-5 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest mr-4">
                    {changes[current].badge}
                  </span>
                  <span className="ml-auto">{changes[current].icon}</span>
                </div>
                {/* Titre */}
                <h3 className="text-2xl font-extrabold text-primary mb-2 uppercase tracking-wide">
                  {changes[current].title}
                </h3>
                {/* Texte explicatif */}
                <div className="text-base text-primary/70 mb-1 italic">{changes[current].before}</div>
                <div className="text-base text-secondary font-medium mb-2">{changes[current].after}</div>
                {/* Phrase en gras */}
                <div className="text-base font-bold text-primary/90 mt-auto pt-4">{changes[current].bold}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew; 