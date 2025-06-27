import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import WhatsNew from './components/WhatsNew';
import React, { useState } from 'react';
import { FaStar, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Section FAQ
const faqData = [
  {
    question: "Comment fonctionne Nexo IMMO ?",
    answer: "Nexo IMMO automatise la recherche de biens, organise les visites et vous accompagne à chaque étape grâce à un agent dédié et un tableau de bord en ligne."
  },
  {
    question: "L'accompagnement est-il vraiment humain ?",
    answer: "Oui, un expert Nexo IMMO vous suit personnellement, répond à vos questions et vous conseille tout au long de votre projet."
  },
  {
    question: "Combien coûte le service ?",
    answer: "Le service est facturé uniquement en cas de succès, avec une tarification transparente et sans frais cachés."
  },
  {
    question: "Puis-je utiliser Nexo IMMO pour vendre ou louer ?",
    answer: "Oui, Nexo IMMO vous accompagne aussi bien pour l'achat, la vente ou la location de votre bien immobilier."
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="w-full py-20 px-2 sm:px-8 bg-primary/5 flex flex-col items-center justify-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-14 text-center text-primary uppercase tracking-wide">
        FAQ
      </h2>
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg border border-primary/10 overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-8 py-6 text-left focus:outline-none group"
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
            >
              <span className="text-lg md:text-xl font-bold text-primary group-hover:text-secondary transition">
                {item.question}
              </span>
              <svg
                className={`w-6 h-6 ml-4 transition-transform duration-300 ${open === idx ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`px-8 pb-6 text-primary/80 text-base md:text-lg transition-all duration-300 ${open === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
              style={{ transitionProperty: 'max-height, opacity' }}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: 'Sophie Martin',
    role: 'Acheteuse à Lyon',
    text: "Grâce à Nexo IMMO, j'ai trouvé mon appartement en un temps record, sans stress et avec un accompagnement humain exceptionnel !",
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
  },
  {
    name: 'Julien Lefèvre',
    role: 'Investisseur à Paris',
    text: "Le service est ultra-réactif, les visites sont organisées pour moi, et j'ai pu comparer facilement toutes les offres.",
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
  },
  {
    name: 'Claire Dubois',
    role: 'Locataire à Bordeaux',
    text: "J'ai adoré le tableau de bord et la disponibilité de l'équipe. Je recommande à 100% !",
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 4,
  },
  {
    name: 'Marc Petit',
    role: 'Vendeur à Annecy',
    text: "Vente rapide, accompagnement personnalisé, et zéro paperasse. Merci Nexo IMMO !",
    photo: 'https://randomuser.me/api/portraits/men/41.jpg',
    rating: 5,
  },
];

function Testimonials() {
  const [current, setCurrent] = React.useState(0);
  const visibleCount = 2;
  const maxIndex = testimonials.length - visibleCount;
  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  const handlePrev = () => setCurrent((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === maxIndex ? 0 : prev + 1));

  // Auto-play
  React.useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === maxIndex ? 0 : prev + 1));
    }, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [maxIndex]);

  // Reset timer on manual navigation
  const handleManualNav = (navFn: () => void) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    navFn();
  };

  // Responsive : 1 sur mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const count = isMobile ? 1 : visibleCount;
  const items = testimonials.slice(current, current + count);

  return (
    <section className="w-full py-20 px-2 sm:px-8 bg-primary/5 flex flex-col items-center justify-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-14 text-center text-primary uppercase tracking-wide">
        Témoignages
      </h2>
      <div className="w-full max-w-6xl flex flex-col items-center px-2 sm:px-8">
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
            {Array.from({ length: testimonials.length - count + 1 }).map((_, i) => (
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
        <div className="relative w-full flex gap-8 justify-center items-stretch">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white rounded-2xl shadow-lg p-10 border border-primary/10 min-h-[340px] max-w-xl w-full transition-all duration-500"
            >
              <div className="flex items-center mb-6">
                <img src={item.photo} alt={item.name} className="w-16 h-16 rounded-full object-cover border-4 border-primary/10 shadow mr-4" />
                <div>
                  <div className="font-bold text-primary text-lg">{item.name}</div>
                  <div className="text-primary/60 text-sm">{item.role}</div>
                  <div className="flex mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} className={`text-xl ${i < item.rating ? 'text-secondary' : 'text-primary/20'}`} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-primary/80 text-lg italic">"{item.text}"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="w-full py-20 px-2 sm:px-8 bg-primary/5 flex flex-col items-center justify-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-14 text-center text-primary uppercase tracking-wide">
        Contact
      </h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* Formulaire */}
        <form className="bg-white rounded-2xl shadow-lg border border-primary/10 p-10 flex flex-col gap-6" autoComplete="off">
          <div>
            <label htmlFor="name" className="block text-primary font-bold mb-2">Nom</label>
            <input id="name" name="name" type="text" required className="w-full rounded-lg border border-primary/20 px-4 py-3 focus:outline-none focus:border-secondary transition" />
          </div>
          <div>
            <label htmlFor="email" className="block text-primary font-bold mb-2">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded-lg border border-primary/20 px-4 py-3 focus:outline-none focus:border-secondary transition" />
          </div>
          <div>
            <label htmlFor="message" className="block text-primary font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows={5} required className="w-full rounded-lg border border-primary/20 px-4 py-3 focus:outline-none focus:border-secondary transition" />
          </div>
          <button type="submit" className="mt-2 bg-primary text-white font-bold rounded-lg px-8 py-3 shadow hover:bg-secondary transition">
            Envoyer
          </button>
        </form>
        {/* Carte Google Maps */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-primary/10 min-h-[400px] h-full flex items-center justify-center bg-white">
          <iframe
            title="Carte Rouen"
            src="https://www.google.com/maps?q=Rouen,France&hl=fr&z=13&output=embed"
            width="100%"
            height="100%"
            className="w-full h-[400px] min-h-[300px] md:min-h-[400px] rounded-2xl border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="w-full py-16 px-2 sm:px-8 bg-gradient-to-r from-primary to-secondary flex flex-col items-center justify-center text-white text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-wide drop-shadow-lg">
        Prêt à concrétiser votre projet immobilier ?
      </h2>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
        Profitez de l'accompagnement humain et technologique de Nexo IMMO pour trouver, vendre ou louer votre bien en toute sérénité.
      </p>
      <a
        href="#contact"
        className="inline-block bg-white text-primary font-bold rounded-lg px-10 py-4 text-lg shadow-lg hover:bg-secondary hover:text-white transition"
      >
        Commencer ma recherche
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-primary text-white py-12 px-4 mt-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Logo et baseline */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <img src="/public/images/step1.webp" alt="Logo Nexo IMMO" className="w-16 h-16 rounded-full mb-2 shadow" />
          <span className="font-extrabold text-2xl tracking-wide">Nexo IMMO</span>
          <span className="text-secondary font-semibold mt-1">Le lien immobilier nouvelle génération</span>
        </div>
        {/* Liens rapides */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <a href="#" className="hover:text-secondary transition">Accueil</a>
          <a href="#about" className="hover:text-secondary transition">À propos</a>
          <a href="#services" className="hover:text-secondary transition">Services</a>
          <a href="#faq" className="hover:text-secondary transition">FAQ</a>
          <a href="#contact" className="hover:text-secondary transition">Contact</a>
        </div>
        {/* Réseaux sociaux */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-4 mb-2">
            <a href="#" aria-label="Facebook" className="hover:text-secondary transition"><FaFacebook size={28} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-secondary transition"><FaLinkedin size={28} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-secondary transition"><FaInstagram size={28} /></a>
          </div>
          <span className="text-xs opacity-70">© {new Date().getFullYear()} Nexo IMMO. Tous droits réservés.</span>
          <a href="#" className="text-xs underline opacity-70 hover:text-secondary transition">Mentions légales</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <WhatsNew />
      {/* FAQ : slide up */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <FAQ />
      </motion.section>
      {/* Témoignages : fade + zoom */}
      <motion.section
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Testimonials />
      </motion.section>
      {/* Contact : slide in left */}
      <motion.section
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Contact />
      </motion.section>
      {/* CTA : slide in right */}
      <motion.section
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <CTA />
      </motion.section>
      <Footer />
    </>
  );
}

export default App;
