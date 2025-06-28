import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaHeart, 
  FaEye, 
  FaCalendarAlt, 
  FaBell, 
  FaUser, 
  FaCog, 
  FaSignOutAlt,
  FaSearch,
  FaMapMarkerAlt,
  FaEuroSign,
  FaChartLine,
  FaCheckCircle,
  FaClock,
  FaStar,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaArrowUp,
  FaArrowDown,
  FaPlus,
  FaFilter,
  FaDownload,
  FaShare,
  FaArrowLeft
} from 'react-icons/fa';

interface DashboardProps {
  onBack?: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onBack }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('overview');

  // Mise à jour de l'heure en temps réel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Données statiques pour la démo
  const userData = {
    name: "Thomas Dubois",
    email: "thomas.dubois@email.com",
    phone: "+33 6 12 34 56 78",
    avatar: "/images/step1.webp",
    memberSince: "Mars 2024",
    subscription: "Premium",
    agent: {
      name: "Marie Laurent",
      phone: "+33 6 98 76 54 32",
      email: "marie.laurent@nexo-immo.fr",
      avatar: "/images/step2.webp"
    }
  };

  const stats = {
    savedProperties: 12,
    viewedProperties: 28,
    scheduledVisits: 3,
    completedVisits: 8,
    averageResponseTime: "2h",
    satisfactionRate: 4.8
  };

  const recentActivity = [
    {
      id: 1,
      type: 'saved',
      property: 'Appartement T3 - Rouen Centre',
      price: '285 000€',
      date: 'Il y a 2h',
      icon: FaHeart
    },
    {
      id: 2,
      type: 'viewed',
      property: 'Maison T4 - Bois-Guillaume',
      price: '420 000€',
      date: 'Il y a 4h',
      icon: FaEye
    },
    {
      id: 3,
      type: 'visit',
      property: 'Appartement T2 - Saint-Sever',
      price: '195 000€',
      date: 'Demain 14h',
      icon: FaCalendarAlt
    }
  ];

  const savedProperties = [
    {
      id: 1,
      title: 'Appartement T3 - Rouen Centre',
      price: '285 000€',
      location: 'Rouen, 76000',
      surface: '75m²',
      rooms: '3 pièces',
      image: '/images/step1.webp',
      status: 'disponible',
      lastUpdate: 'Il y a 2h'
    },
    {
      id: 2,
      title: 'Maison T4 - Bois-Guillaume',
      price: '420 000€',
      location: 'Bois-Guillaume, 76230',
      surface: '120m²',
      rooms: '4 pièces',
      image: '/images/step2.webp',
      status: 'disponible',
      lastUpdate: 'Il y a 1j'
    },
    {
      id: 3,
      title: 'Appartement T2 - Saint-Sever',
      price: '195 000€',
      location: 'Rouen, 76000',
      surface: '45m²',
      rooms: '2 pièces',
      image: '/images/step3.png',
      status: 'visite prévue',
      lastUpdate: 'Il y a 3j'
    }
  ];

  const upcomingVisits = [
    {
      id: 1,
      property: 'Appartement T2 - Saint-Sever',
      date: 'Demain 14h',
      agent: 'Marie Laurent',
      status: 'confirmée'
    },
    {
      id: 2,
      property: 'Maison T4 - Bois-Guillaume',
      date: 'Vendredi 16h',
      agent: 'Marie Laurent',
      status: 'en attente'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 pt-16">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Back Button */}
            <div className="flex items-center space-x-4">
              {onBack && (
                <button
                  onClick={onBack}
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <FaArrowLeft className="text-sm" />
                  <span className="hidden sm:inline">Retour</span>
                </button>
              )}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <FaHome className="text-white text-sm" />
                </div>
                <span className="font-bold text-xl text-primary">Nexo <span className="text-secondary">IMMO</span></span>
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="relative p-2 text-gray-600 hover:text-primary transition-colors">
                  <FaBell className="text-xl" />
                  <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <img 
                  src={userData.avatar} 
                  alt="Avatar" 
                  className="w-8 h-8 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">{userData.name}</p>
                  <p className="text-xs text-gray-500">{userData.subscription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Bonjour {userData.name} 👋</h1>
                <p className="text-white/90 mb-4">
                  Voici un aperçu de votre activité immobilière
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="flex items-center space-x-2">
                    <FaClock className="text-white/70" />
                    <span>{currentTime.toLocaleTimeString('fr-FR')}</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <FaCalendarAlt className="text-white/70" />
                    <span>{currentTime.toLocaleDateString('fr-FR', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </span>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="text-right">
                  <p className="text-white/70 text-sm">Votre agent dédié</p>
                  <p className="font-semibold">{userData.agent.name}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors">
                      <FaPhone className="text-sm" />
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors">
                      <FaEnvelope className="text-sm" />
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors">
                      <FaWhatsapp className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-2">
            <div className="flex space-x-2">
              {[
                { id: 'overview', label: 'Vue d\'ensemble', icon: FaHome },
                { id: 'properties', label: 'Mes biens', icon: FaHeart },
                { id: 'visits', label: 'Visites', icon: FaCalendarAlt },
                { id: 'activity', label: 'Activité', icon: FaChartLine }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 flex-1 ${
                    activeTab === tab.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="text-sm" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content based on active tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: 'Biens sauvegardés', 
                  value: stats.savedProperties, 
                  icon: FaHeart, 
                  color: 'bg-red-500',
                  change: '+2 cette semaine'
                },
                { 
                  title: 'Biens consultés', 
                  value: stats.viewedProperties, 
                  icon: FaEye, 
                  color: 'bg-blue-500',
                  change: '+5 cette semaine'
                },
                { 
                  title: 'Visites prévues', 
                  value: stats.scheduledVisits, 
                  icon: FaCalendarAlt, 
                  color: 'bg-green-500',
                  change: 'Prochaine demain'
                },
                { 
                  title: 'Satisfaction', 
                  value: `${stats.satisfactionRate}/5`, 
                  icon: FaStar, 
                  color: 'bg-yellow-500',
                  change: 'Excellent'
                }
              ].map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                      <stat.icon className="text-white text-xl" />
                    </div>
                    <span className="text-xs text-gray-500">{stat.change}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                  <p className="text-gray-600 text-sm">{stat.title}</p>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Activité récente</h2>
                    <button className="text-primary hover:text-secondary transition-colors">
                      Voir tout
                    </button>
                  </div>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <activity.icon className="text-primary text-lg" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{activity.property}</p>
                          <p className="text-sm text-gray-600">{activity.price}</p>
                        </div>
                        <span className="text-xs text-gray-500">{activity.date}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Actions rapides</h2>
                <div className="space-y-4">
                  {[
                    { label: 'Nouvelle recherche', icon: FaSearch, color: 'bg-primary' },
                    { label: 'Planifier une visite', icon: FaCalendarAlt, color: 'bg-green-500' },
                    { label: 'Contacter mon agent', icon: FaPhone, color: 'bg-blue-500' },
                    { label: 'Télécharger mes documents', icon: FaDownload, color: 'bg-purple-500' }
                  ].map((action, index) => (
                    <motion.button
                      key={action.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="w-full flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left"
                    >
                      <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center`}>
                        <action.icon className="text-white text-lg" />
                      </div>
                      <span className="font-medium text-gray-900">{action.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'properties' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Mes biens sauvegardés</h2>
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <FaFilter className="text-gray-600" />
                  <span className="text-gray-700">Filtrer</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  <FaPlus className="text-sm" />
                  <span>Nouvelle recherche</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                        <FaHeart className="text-red-500 text-sm" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        property.status === 'disponible' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {property.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{property.title}</h3>
                    <div className="flex items-center space-x-2 text-gray-600 mb-3">
                      <FaMapMarkerAlt className="text-sm" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{property.surface}</span>
                        <span>{property.rooms}</span>
                      </div>
                      <span className="font-bold text-primary">{property.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Mis à jour {property.lastUpdate}</span>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-600 hover:text-primary transition-colors">
                          <FaShare className="text-sm" />
                        </button>
                        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm">
                          Voir détails
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'visits' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Mes visites</h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                <FaPlus className="text-sm" />
                <span>Planifier une visite</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Upcoming Visits */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Visites à venir</h3>
                <div className="space-y-4">
                  {upcomingVisits.map((visit, index) => (
                    <motion.div
                      key={visit.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FaCalendarAlt className="text-primary text-lg" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{visit.property}</p>
                        <p className="text-sm text-gray-600">{visit.date}</p>
                        <p className="text-xs text-gray-500">Avec {visit.agent}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        visit.status === 'confirmée' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {visit.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visit History */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Historique des visites</h3>
                <div className="space-y-4">
                  {[
                    { property: 'Appartement T3 - Rouen Centre', date: '15 Mars 2024', rating: 4 },
                    { property: 'Maison T4 - Bois-Guillaume', date: '10 Mars 2024', rating: 5 },
                    { property: 'Appartement T2 - Saint-Sever', date: '5 Mars 2024', rating: 3 }
                  ].map((visit, index) => (
                    <motion.div
                      key={visit.property}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900">{visit.property}</p>
                        <p className="text-sm text-gray-600">{visit.date}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar 
                            key={star}
                            className={`text-sm ${star <= visit.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'activity' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">Mon activité</h2>
            
            {/* Activity Chart Placeholder */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Évolution de mes recherches</h3>
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>7 derniers jours</option>
                  <option>30 derniers jours</option>
                  <option>3 derniers mois</option>
                </select>
              </div>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <FaChartLine className="text-4xl text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Graphique d'activité</p>
                  <p className="text-sm text-gray-500">Les données seront affichées ici</p>
                </div>
              </div>
            </div>

            {/* Detailed Activity Log */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Journal d'activité détaillé</h3>
              <div className="space-y-4">
                {[
                  { action: 'Sauvegarde d\'un bien', property: 'Appartement T3 - Rouen Centre', time: 'Il y a 2h' },
                  { action: 'Consultation d\'un bien', property: 'Maison T4 - Bois-Guillaume', time: 'Il y a 4h' },
                  { action: 'Planification d\'une visite', property: 'Appartement T2 - Saint-Sever', time: 'Il y a 1j' },
                  { action: 'Modification des critères', property: 'Recherche personnalisée', time: 'Il y a 2j' },
                  { action: 'Contact avec l\'agent', property: 'Marie Laurent', time: 'Il y a 3j' }
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <FaCheckCircle className="text-primary text-sm" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.property}</p>
                    </div>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Dashboard; 