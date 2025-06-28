import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaMapMarkerAlt, 
  FaEuroSign, 
  FaBed, 
  FaBath, 
  FaRulerCombined, 
  FaCar, 
  FaParking,
  FaWifi,
  FaSnowflake,
  FaSun,
  FaTree,
  FaBuilding,
  FaHouseUser,
  FaSearch,
  FaPaperPlane,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';

const PropertySearch = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Informations de base
    propertyType: '',
    transactionType: '',
    budget: {
      min: '',
      max: ''
    },
    location: {
      city: '',
      neighborhood: '',
      radius: ''
    },
    
    // Caractéristiques du bien
    surface: {
      min: '',
      max: ''
    },
    rooms: {
      bedrooms: '',
      bathrooms: '',
      livingRooms: ''
    },
    
    // Équipements et confort
    amenities: {
      parking: false,
      elevator: false,
      balcony: false,
      terrace: false,
      garden: false,
      airConditioning: false,
      heating: '',
      internet: false
    },
    
    // Critères spécifiques
    criteria: {
      newConstruction: false,
      renovated: false,
      quiet: false,
      bright: false,
      southFacing: false,
      groundFloor: false,
      topFloor: false
    },
    
    // Informations personnelles
    contact: {
      name: '',
      email: '',
      phone: '',
      preferredContact: 'email',
      urgency: 'normal',
      additionalInfo: ''
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleNestedChange = (section: string, field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...(prev as any)[section],
        [field]: value
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Recherche immobilière:', formData);
    setCurrentStep(4);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <FaSearch className="text-white text-2xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">Recherche Immobilière</h1>
          <p className="text-primary/70 text-lg">Décrivez votre projet et notre agent vous accompagnera</p>
        </motion.div>

        {/* Indicateur de progression */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  step <= currentStep 
                    ? 'bg-secondary text-white shadow-lg' 
                    : 'bg-white/60 text-primary/50 border-2 border-primary/20'
                }`}>
                  {step < currentStep ? <FaCheckCircle /> : step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 mx-2 transition-all duration-300 ${
                    step < currentStep ? 'bg-secondary' : 'bg-primary/20'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Formulaire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-primary/10 p-8 sm:p-12"
        >
          <form onSubmit={handleSubmit}>
            {/* Étape 1: Informations de base */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-2 flex items-center justify-center gap-3">
                    <FaHome className="text-secondary" />
                    Informations de base
                  </h2>
                  <p className="text-primary/70">Définissez le type de bien et votre budget</p>
                </div>

                {/* Type de bien et transaction */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-3">
                      Type de bien
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: 'appartement', label: 'Appartement', icon: FaBuilding },
                        { value: 'maison', label: 'Maison', icon: FaHouseUser },
                        { value: 'terrain', label: 'Terrain', icon: FaTree },
                        { value: 'local', label: 'Local commercial', icon: FaBuilding }
                      ].map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => handleInputChange({ target: { name: 'propertyType', value: type.value } } as any)}
                          className={`p-4 rounded-lg border-2 transition-all duration-300 flex flex-col items-center gap-2 ${
                            formData.propertyType === type.value
                              ? 'border-secondary bg-secondary/10 text-secondary'
                              : 'border-primary/20 hover:border-primary/40 text-primary/70'
                          }`}
                        >
                          <type.icon className="text-xl" />
                          <span className="text-sm font-medium">{type.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-3">
                      Type de transaction
                    </label>
                    <div className="space-y-3">
                      {[
                        { value: 'achat', label: 'Achat', color: 'bg-green-500' },
                        { value: 'location', label: 'Location', color: 'bg-blue-500' },
                        { value: 'investissement', label: 'Investissement', color: 'bg-purple-500' }
                      ].map((transaction) => (
                        <button
                          key={transaction.value}
                          type="button"
                          onClick={() => handleInputChange({ target: { name: 'transactionType', value: transaction.value } } as any)}
                          className={`w-full p-4 rounded-lg border-2 transition-all duration-300 flex items-center gap-3 ${
                            formData.transactionType === transaction.value
                              ? 'border-secondary bg-secondary/10 text-secondary'
                              : 'border-primary/20 hover:border-primary/40 text-primary/70'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-full ${transaction.color}`}></div>
                          <span className="font-medium">{transaction.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                    <FaEuroSign className="text-secondary" />
                    Budget
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="number"
                      placeholder="Budget minimum"
                      value={formData.budget.min}
                      onChange={(e) => handleNestedChange('budget', 'min', e.target.value)}
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    />
                    <input
                      type="number"
                      placeholder="Budget maximum"
                      value={formData.budget.max}
                      onChange={(e) => handleNestedChange('budget', 'max', e.target.value)}
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    />
                  </div>
                </div>

                {/* Localisation */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-secondary" />
                    Localisation
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Ville"
                      value={formData.location.city}
                      onChange={(e) => handleNestedChange('location', 'city', e.target.value)}
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Quartier (optionnel)"
                      value={formData.location.neighborhood}
                      onChange={(e) => handleNestedChange('location', 'neighborhood', e.target.value)}
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    />
                    <select
                      value={formData.location.radius}
                      onChange={(e) => handleNestedChange('location', 'radius', e.target.value)}
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    >
                      <option value="">Rayon de recherche</option>
                      <option value="1">1 km</option>
                      <option value="5">5 km</option>
                      <option value="10">10 km</option>
                      <option value="20">20 km</option>
                    </select>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={nextStep}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform"
                >
                  Suivant <FaArrowRight className="inline ml-2" />
                </motion.button>
              </motion.div>
            )}

            {/* Étape 2: Caractéristiques détaillées */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-2 flex items-center justify-center gap-3">
                    <FaRulerCombined className="text-secondary" />
                    Caractéristiques détaillées
                  </h2>
                  <p className="text-primary/70">Précisez vos besoins en surface et pièces</p>
                </div>

                {/* Surface */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-3">
                    Surface (m²)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="number"
                      placeholder="Surface minimum"
                      value={formData.surface.min}
                      onChange={(e) => handleNestedChange('surface', 'min', e.target.value)}
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    />
                    <input
                      type="number"
                      placeholder="Surface maximum"
                      value={formData.surface.max}
                      onChange={(e) => handleNestedChange('surface', 'max', e.target.value)}
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    />
                  </div>
                </div>

                {/* Pièces */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-3">
                    Nombre de pièces
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                      <FaBed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/50" />
                      <input
                        type="number"
                        placeholder="Chambres"
                        value={formData.rooms.bedrooms}
                        onChange={(e) => handleNestedChange('rooms', 'bedrooms', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                      />
                    </div>
                    <div className="relative">
                      <FaBath className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/50" />
                      <input
                        type="number"
                        placeholder="Salles de bain"
                        value={formData.rooms.bathrooms}
                        onChange={(e) => handleNestedChange('rooms', 'bathrooms', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                      />
                    </div>
                    <div className="relative">
                      <FaHome className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/50" />
                      <input
                        type="number"
                        placeholder="Séjours"
                        value={formData.rooms.livingRooms}
                        onChange={(e) => handleNestedChange('rooms', 'livingRooms', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Équipements */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-3">
                    Équipements souhaités
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { key: 'parking', label: 'Parking', icon: FaParking },
                      { key: 'elevator', label: 'Ascenseur', icon: FaBuilding },
                      { key: 'balcony', label: 'Balcon', icon: FaSun },
                      { key: 'terrace', label: 'Terrasse', icon: FaSun },
                      { key: 'garden', label: 'Jardin', icon: FaTree },
                      { key: 'airConditioning', label: 'Climatisation', icon: FaSnowflake },
                      { key: 'internet', label: 'Internet', icon: FaWifi },
                      { key: 'car', label: 'Garage', icon: FaCar }
                    ].map((amenity) => (
                      <label key={amenity.key} className="flex items-center gap-3 p-3 border border-primary/20 rounded-lg hover:bg-primary/5 transition-all cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.amenities[amenity.key as keyof typeof formData.amenities] as boolean}
                          onChange={(e) => handleNestedChange('amenities', amenity.key, e.target.checked)}
                          className="w-4 h-4 text-secondary border-primary/20 rounded focus:ring-secondary focus:ring-2"
                        />
                        <amenity.icon className="text-primary/70" />
                        <span className="text-sm text-primary/70">{amenity.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Critères spécifiques */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-3">
                    Critères spécifiques
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { key: 'newConstruction', label: 'Construction neuve' },
                      { key: 'renovated', label: 'Récemment rénové' },
                      { key: 'quiet', label: 'Quartier calme' },
                      { key: 'bright', label: 'Très lumineux' },
                      { key: 'southFacing', label: 'Exposition sud' },
                      { key: 'groundFloor', label: 'Rez-de-chaussée' },
                      { key: 'topFloor', label: 'Dernier étage' }
                    ].map((criteria) => (
                      <label key={criteria.key} className="flex items-center gap-3 p-3 border border-primary/20 rounded-lg hover:bg-primary/5 transition-all cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.criteria[criteria.key as keyof typeof formData.criteria] as boolean}
                          onChange={(e) => handleNestedChange('criteria', criteria.key, e.target.checked)}
                          className="w-4 h-4 text-secondary border-primary/20 rounded focus:ring-secondary focus:ring-2"
                        />
                        <span className="text-sm text-primary/70">{criteria.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={prevStep}
                    className="flex-1 bg-white border border-primary/20 text-primary font-bold py-4 px-8 rounded-lg hover:bg-primary/5 transition-all duration-300"
                  >
                    Retour
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform"
                  >
                    Suivant <FaArrowRight className="inline ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Étape 3: Contact et finalisation */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-2 flex items-center justify-center gap-3">
                    <FaPaperPlane className="text-secondary" />
                    Finalisation
                  </h2>
                  <p className="text-primary/70">Vos coordonnées et informations complémentaires</p>
                </div>

                {/* Coordonnées */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Votre nom"
                    value={formData.contact.name}
                    onChange={(e) => handleNestedChange('contact', 'name', e.target.value)}
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Votre email"
                    value={formData.contact.email}
                    onChange={(e) => handleNestedChange('contact', 'email', e.target.value)}
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Votre téléphone"
                  value={formData.contact.phone}
                  onChange={(e) => handleNestedChange('contact', 'phone', e.target.value)}
                  className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                />

                {/* Préférences de contact */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-3">
                    Préférence de contact
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { value: 'email', label: 'Email' },
                      { value: 'phone', label: 'Téléphone' },
                      { value: 'both', label: 'Les deux' }
                    ].map((pref) => (
                      <button
                        key={pref.value}
                        type="button"
                        onClick={() => handleNestedChange('contact', 'preferredContact', pref.value)}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                          formData.contact.preferredContact === pref.value
                            ? 'border-secondary bg-secondary/10 text-secondary'
                            : 'border-primary/20 hover:border-primary/40 text-primary/70'
                        }`}
                      >
                        {pref.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Urgence */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-3">
                    Niveau d'urgence
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { value: 'low', label: 'Pas pressé', color: 'bg-green-500' },
                      { value: 'normal', label: 'Normal', color: 'bg-yellow-500' },
                      { value: 'high', label: 'Urgent', color: 'bg-red-500' }
                    ].map((urgency) => (
                      <button
                        key={urgency.value}
                        type="button"
                        onClick={() => handleNestedChange('contact', 'urgency', urgency.value)}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 flex items-center gap-3 ${
                          formData.contact.urgency === urgency.value
                            ? 'border-secondary bg-secondary/10 text-secondary'
                            : 'border-primary/20 hover:border-primary/40 text-primary/70'
                        }`}
                      >
                        <div className={`w-3 h-3 rounded-full ${urgency.color}`}></div>
                        {urgency.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Informations complémentaires */}
                <div>
                  <label className="block text-sm font-semibold text-primary mb-3">
                    Informations complémentaires
                  </label>
                  <textarea
                    placeholder="Décrivez votre projet, vos contraintes, vos préférences particulières..."
                    value={formData.contact.additionalInfo}
                    onChange={(e) => handleNestedChange('contact', 'additionalInfo', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
                  />
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={prevStep}
                    className="flex-1 bg-white border border-primary/20 text-primary font-bold py-4 px-8 rounded-lg hover:bg-primary/5 transition-all duration-300"
                  >
                    Retour
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform"
                  >
                    Envoyer ma recherche <FaPaperPlane className="inline ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Étape 4: Confirmation */}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <FaCheckCircle className="text-white text-3xl" />
                </div>
                <h2 className="text-2xl font-bold text-primary">Recherche envoyée !</h2>
                <p className="text-primary/70">
                  Votre demande a été transmise à notre équipe. Un agent vous contactera dans les plus brefs délais 
                  pour vous accompagner dans votre recherche immobilière.
                </p>
                <div className="bg-primary/5 rounded-lg p-6">
                  <h3 className="font-bold text-primary mb-3">Prochaines étapes :</h3>
                  <ul className="text-primary/70 space-y-2 text-left">
                    <li>• Notre agent analysera vos critères</li>
                    <li>• Il vous proposera des biens correspondants</li>
                    <li>• Il organisera les visites selon vos disponibilités</li>
                    <li>• Il vous accompagnera jusqu'à la signature</li>
                  </ul>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = '/'}
                  className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform"
                >
                  Retour à l'accueil
                </motion.button>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default PropertySearch; 