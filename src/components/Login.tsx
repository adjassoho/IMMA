import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaGoogle, FaFacebook } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de connexion à implémenter
    console.log('Connexion:', { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo et titre */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-white text-2xl font-bold">N</span>
          </div>
          <h1 className="text-3xl font-extrabold text-primary mb-2">Connexion</h1>
          <p className="text-primary/70">Accédez à votre espace Nexo IMMO</p>
        </motion.div>

        {/* Formulaire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-primary/10 p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                Adresse email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/50" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            {/* Mot de passe */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-primary mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/50" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-12 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                  placeholder="Votre mot de passe"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary/50 hover:text-primary transition-colors"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-secondary border-primary/20 rounded focus:ring-secondary focus:ring-2"
                />
                <span className="ml-2 text-sm text-primary/70">Se souvenir de moi</span>
              </label>
              <a href="#" className="text-sm text-secondary hover:text-orange-600 transition-colors font-medium">
                Mot de passe oublié ?
              </a>
            </div>

            {/* Bouton de connexion */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform"
            >
              Se connecter
            </motion.button>
          </form>

          {/* Séparateur */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-primary/20"></div>
            <span className="px-4 text-sm text-primary/50">ou</span>
            <div className="flex-1 border-t border-primary/20"></div>
          </div>

          {/* Connexion sociale */}
          <div className="space-y-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 bg-white border border-primary/20 text-primary font-medium py-3 px-6 rounded-lg hover:bg-primary/5 transition-all duration-300"
            >
              <FaGoogle className="text-red-500" />
              Continuer avec Google
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 bg-white border border-primary/20 text-primary font-medium py-3 px-6 rounded-lg hover:bg-primary/5 transition-all duration-300"
            >
              <FaFacebook className="text-blue-600" />
              Continuer avec Facebook
            </motion.button>
          </div>
        </motion.div>

        {/* Lien d'inscription */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6"
        >
          <p className="text-primary/70">
            Pas encore de compte ?{' '}
            <button 
              onClick={() => window.location.href = '/register'}
              className="text-secondary hover:text-orange-600 font-semibold transition-colors cursor-pointer"
            >
              Créer un compte
            </button>
          </p>
        </motion.div>

        {/* Effet de profondeur */}
        <div className="absolute inset-0 w-full h-full bg-white/40 rounded-3xl blur-3xl -z-10" />
      </div>
    </div>
  );
};

export default Login; 