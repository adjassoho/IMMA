import React, { useState } from 'react';
import { FaBell, FaUserCircle, FaChevronDown } from 'react-icons/fa';
import logo from '../assets/react.svg'; // Remplacer par le vrai logo si disponible

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-primary text-white shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Côté gauche */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo Nexo IMMO" className="h-8 w-8" />
            <span className="font-bold text-xl tracking-wide">Nexo <span className="text-secondary">IMMO</span></span>
          </div>
          <a href="#rechercher" className="hover:text-secondary transition-colors font-medium">Rechercher</a>
          <a href="#mes-biens" className="hover:text-secondary transition-colors font-medium">Mes biens</a>
          <a href="#visites" className="hover:text-secondary transition-colors font-medium">Visites</a>
        </div>
        {/* Côté droit */}
        <div className="flex items-center space-x-6">
          <button className="relative focus:outline-none">
            <FaBell className="text-2xl hover:text-secondary transition-colors" />
            {/* Badge notification */}
            <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full px-1.5 py-0.5 font-bold animate-pulse">3</span>
          </button>
          <div className="relative">
            <button
              className="flex items-center space-x-2 focus:outline-none hover:text-secondary"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <FaUserCircle className="text-2xl" />
              <span className="hidden sm:inline">Profil</span>
              <FaChevronDown className={`ml-1 transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
            </button>
            {/* Menu déroulant */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-primary rounded-lg shadow-lg py-2 z-50 animate-fade-in-up">
                <a href="#mon-compte" className="block px-4 py-2 hover:bg-primary/10">Mon compte</a>
                <a href="#parametres" className="block px-4 py-2 hover:bg-primary/10">Paramètres</a>
                <a href="#deconnexion" className="block px-4 py-2 hover:bg-primary/10">Déconnexion</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 