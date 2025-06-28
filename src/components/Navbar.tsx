import React, { useState } from 'react';
import { FaBell, FaUserCircle, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/react.svg'; // Remplacer par le vrai logo si disponible

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="w-full bg-primary text-white shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo Nexo IMMO" className="h-8 w-8" />
          <span className="font-bold text-xl tracking-wide">Nexo <span className="text-secondary">IMMO</span></span>
        </div>

        {/* Navigation desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/search" className="hover:text-secondary transition-colors font-medium">Recherche</a>
          <a href="#mes-biens" className="hover:text-secondary transition-colors font-medium">Mes biens</a>
          <a href="#visites" className="hover:text-secondary transition-colors font-medium">Visites</a>
          <a href="#about" className="hover:text-secondary transition-colors font-medium">À propos</a>
          <a href="#services" className="hover:text-secondary transition-colors font-medium">Services</a>
          <a href="#pricing" className="hover:text-secondary transition-colors font-medium">Tarifs</a>
          <a href="#contact" className="hover:text-secondary transition-colors font-medium">Contact</a>
        </div>

        {/* Actions desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="relative focus:outline-none">
            <FaBell className="text-2xl hover:text-secondary transition-colors" />
            <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full px-1.5 py-0.5 font-bold animate-pulse">3</span>
          </button>
          
          {/* Menu profil */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 focus:outline-none hover:text-secondary"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <FaUserCircle className="text-2xl" />
              <span className="hidden sm:inline">Profil</span>
              <FaChevronDown className={`ml-1 transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-primary rounded-lg shadow-lg py-2 z-50 animate-fade-in-up">
                <a href="#mon-compte" className="block px-4 py-2 hover:bg-primary/10">Mon compte</a>
                <a href="#parametres" className="block px-4 py-2 hover:bg-primary/10">Paramètres</a>
                <a href="#deconnexion" className="block px-4 py-2 hover:bg-primary/10">Déconnexion</a>
              </div>
            )}
          </div>

          {/* Boutons connexion/inscription */}
          <div className="flex items-center space-x-3">
            <a href="/login" className="text-white hover:text-secondary transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/10">
              Connexion
            </a>
            <a href="/register" className="bg-secondary hover:bg-orange-500 text-white font-bold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              S'inscrire
            </a>
          </div>
        </div>

        {/* Menu mobile */}
        <div className="md:hidden flex items-center space-x-4">
          <button className="relative focus:outline-none">
            <FaBell className="text-xl hover:text-secondary transition-colors" />
            <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full px-1.5 py-0.5 font-bold animate-pulse">3</span>
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-secondary transition-colors"
          >
            {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div className="md:hidden bg-primary border-t border-white/20">
          <div className="px-4 py-6 space-y-4">
            <a href="/search" className="block text-white hover:text-secondary transition-colors">Recherche</a>
            <a href="#mes-biens" className="block text-white hover:text-secondary transition-colors">Mes biens</a>
            <a href="#visites" className="block text-white hover:text-secondary transition-colors">Visites</a>
            <a href="#about" className="block text-white hover:text-secondary transition-colors">À propos</a>
            <a href="#services" className="block text-white hover:text-secondary transition-colors">Services</a>
            <a href="#pricing" className="block text-white hover:text-secondary transition-colors">Tarifs</a>
            <a href="#contact" className="block text-white hover:text-secondary transition-colors">Contact</a>
            <div className="pt-4 border-t border-white/20 space-y-3">
              <a href="/login" className="block text-white hover:text-secondary transition-colors font-medium">
                Connexion
              </a>
              <a href="/register" className="block bg-secondary hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 text-center">
                S'inscrire
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 