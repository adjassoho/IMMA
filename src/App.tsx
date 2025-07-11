import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import WhatsNew from './components/WhatsNew';
import React, { useState } from 'react';
import { FaStar, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Login from './components/Login';
import Register from './components/Register';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import PropertySearch from './components/PropertySearch';
import Dashboard from './components/Dashboard';

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
    <section className="w-full py-12 sm:py-20 px-2 sm:px-8 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex flex-col items-center justify-center">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-8 sm:mb-14 text-center text-primary uppercase tracking-wide">
        FAQ
      </h2>
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-4 sm:gap-6">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg border border-primary/10 overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6 text-left focus:outline-none group"
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
            >
              <span className="text-base sm:text-lg md:text-xl font-bold text-primary group-hover:text-secondary transition">
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
              className={`px-4 sm:px-8 pb-4 sm:pb-6 text-primary/80 text-sm sm:text-base md:text-lg transition-all duration-300 ${open === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
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
    <section className="w-full py-12 sm:py-20 px-2 sm:px-8 relative flex flex-col items-center justify-center overflow-hidden" style={{position: 'relative'}}>
      {/* Image d'arrière-plan animée */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/images/temoignage.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-none z-10" />
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-8 sm:mb-14 text-center text-white uppercase tracking-wide relative z-20">
        Témoignages
      </h2>
      <div className="w-full max-w-6xl flex flex-col items-center px-2 sm:px-8 relative z-20">
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
        <div className="relative w-full flex flex-col gap-6 sm:flex-row sm:gap-8 justify-center items-stretch">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white rounded-2xl shadow-lg p-6 sm:p-10 border border-primary/10 min-h-[220px] sm:min-h-[340px] max-w-xl w-full transition-all duration-500 mx-auto"
            >
              <div className="flex items-center mb-6">
                <img src={item.photo} alt={item.name} className="w-16 h-16 rounded-full object-cover border-4 border-primary/10 shadow mr-4" />
                <div>
                  <div className="font-bold text-primary text-base sm:text-lg">{item.name}</div>
                  <div className="text-primary/60 text-xs sm:text-sm">{item.role}</div>
                  <div className="flex mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} className={`text-base sm:text-xl ${i < item.rating ? 'text-secondary' : 'text-primary/20'}`} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-primary/80 text-sm sm:text-lg italic">"{item.text}"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="w-full py-12 sm:py-20 px-2 sm:px-8 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex flex-col items-center justify-center">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-8 sm:mb-14 text-center text-primary uppercase tracking-wide">
        Contact
      </h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-stretch">
        {/* Formulaire animé depuis la gauche */}
        <motion.form
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-2xl shadow-lg border border-primary/10 p-6 sm:p-10 flex flex-col gap-6"
          autoComplete="off"
        >
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
          <button type="submit" className="mt-2 bg-primary text-white font-bold rounded-lg px-8 py-3 shadow hover:bg-secondary transition w-full sm:w-auto">
            Envoyer
          </button>
        </motion.form>
        {/* Carte Google Maps animée depuis la droite */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl overflow-hidden shadow-lg border border-primary/10 min-h-[300px] sm:min-h-[400px] h-full flex items-center justify-center bg-white"
        >
          <iframe
            title="Carte Rouen"
            src="https://www.google.com/maps?q=Rouen,France&hl=fr&z=13&output=embed"
            width="100%"
            height="100%"
            className="w-full h-[220px] sm:h-[400px] min-h-[200px] sm:min-h-[300px] md:min-h-[400px] rounded-2xl border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="w-full py-10 sm:py-16 px-2 sm:px-8 bg-gradient-to-r from-primary to-secondary flex flex-col items-center justify-center text-white text-center">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 sm:mb-6 uppercase tracking-wide drop-shadow-lg">
        Prêt à concrétiser votre projet immobilier ?
      </h2>
      <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto opacity-90">
        Profitez de l'accompagnement humain et technologique de Nexo IMMO pour trouver, vendre ou louer votre bien en toute sérénité.
      </p>
      <a
        href="#contact"
        className="inline-block bg-white text-primary font-bold rounded-lg px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:bg-secondary hover:text-white transition w-full sm:w-auto"
      >
        Commencer ma recherche
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-primary text-white py-8 sm:py-12 px-2 sm:px-4 mt-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-8">
        {/* Logo et baseline */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <img src="/public/images/step1.webp" alt="Logo Nexo IMMO" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-2 shadow" />
          <span className="font-extrabold text-xl sm:text-2xl tracking-wide">Nexo IMMO</span>
          <span className="text-secondary font-semibold mt-1 text-sm sm:text-base">Le lien immobilier nouvelle génération</span>
        </div>
        {/* Liens rapides */}
        <div className="flex flex-col gap-1 sm:gap-2 text-center md:text-left">
          <a href="#" className="hover:text-secondary transition text-sm sm:text-base">Accueil</a>
          <a href="#about" className="hover:text-secondary transition text-sm sm:text-base">À propos</a>
          <a href="#services" className="hover:text-secondary transition text-sm sm:text-base">Services</a>
          <a href="#faq" className="hover:text-secondary transition text-sm sm:text-base">FAQ</a>
          <a href="#contact" className="hover:text-secondary transition text-sm sm:text-base">Contact</a>
        </div>
        {/* Réseaux sociaux */}
        <div className="flex flex-col items-center md:items-end gap-2 sm:gap-3">
          <div className="flex gap-3 sm:gap-4 mb-2">
            <a href="#" aria-label="Facebook" className="hover:text-secondary transition"><FaFacebook size={24} className="sm:size-7" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-secondary transition"><FaLinkedin size={24} className="sm:size-7" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-secondary transition"><FaInstagram size={24} className="sm:size-7" /></a>
          </div>
          <span className="text-xs opacity-70">© {new Date().getFullYear()} Nexo IMMO. Tous droits réservés.</span>
          <div className="flex gap-4 text-xs">
            <button 
              onClick={() => window.location.href = '/terms'}
              className="underline opacity-70 hover:text-secondary transition"
            >
              Conditions d'utilisation
            </button>
            <button 
              onClick={() => window.location.href = '/privacy'}
              className="underline opacity-70 hover:text-secondary transition"
            >
              Politique de confidentialité
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <WhatsNew />
            <HowItWorks />
            <Services />
            <About />
            <Testimonials />
            <FAQ />
            <Contact />
            <CTA />
          </>
        );
      case 'login':
        return <Login />;
      case 'register':
        return <Register />;
      case 'terms':
        return <TermsOfService onBack={() => setCurrentPage('home')} />;
      case 'privacy':
        return <PrivacyPolicy onBack={() => setCurrentPage('home')} />;
      case 'search':
        return <PropertySearch />;
      case 'dashboard':
        return <Dashboard onBack={() => setCurrentPage('home')} />;
      default:
        return (
          <>
            <Hero />
            <WhatsNew />
            <HowItWorks />
            <Services />
            <About />
            <Testimonials />
            <FAQ />
            <Contact />
            <CTA />
          </>
        );
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar setCurrentPage={setCurrentPage} />
      <main className="pt-16">
        {renderPage()}
        <Footer />
      </main>
    </div>
  );
}

export default App;
