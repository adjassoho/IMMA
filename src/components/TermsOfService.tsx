import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserCheck, FaHandshake, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <FaShieldAlt className="text-white text-2xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">Conditions d'Utilisation</h1>
          <p className="text-primary/70 text-lg">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </motion.div>

        {/* Contenu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-primary/10 p-8 sm:p-12"
        >
          <div className="prose prose-lg max-w-none text-primary">
            
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <FaHandshake className="text-secondary" />
                1. Introduction
              </h2>
              <p className="text-primary/80 mb-4">
                Bienvenue chez Nexo IMMO. Ces conditions d'utilisation régissent votre utilisation de notre plateforme 
                de services immobiliers. En accédant à nos services, vous acceptez d'être lié par ces conditions.
              </p>
              <p className="text-primary/80">
                Nexo IMMO est une plateforme innovante qui combine technologie d'intelligence artificielle et 
                accompagnement humain pour faciliter vos transactions immobilières.
              </p>
            </section>

            {/* Définitions */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">2. Définitions</h2>
              <div className="space-y-3">
                <div>
                  <strong className="text-primary">"Service"</strong> : La plateforme Nexo IMMO et tous ses composants
                </div>
                <div>
                  <strong className="text-primary">"Utilisateur"</strong> : Toute personne utilisant nos services
                </div>
                <div>
                  <strong className="text-primary">"Compte"</strong> : L'espace personnel créé par l'utilisateur
                </div>
                <div>
                  <strong className="text-primary">"Contenu"</strong> : Toutes les informations partagées sur la plateforme
                </div>
              </div>
            </section>

            {/* Services proposés */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <FaCheckCircle className="text-secondary" />
                3. Services Proposés
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Recherche Automatisée IA</h3>
                  <p className="text-primary/70 text-sm">
                    Algorithmes intelligents pour identifier les biens correspondant à vos critères
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Accompagnement Humain</h3>
                  <p className="text-primary/70 text-sm">
                    Conseillers dédiés pour vous guider dans vos projets immobiliers
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Gestion de Visites</h3>
                  <p className="text-primary/70 text-sm">
                    Organisation et planification des visites de biens immobiliers
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Tableau de Bord</h3>
                  <p className="text-primary/70 text-sm">
                    Interface personnalisée pour suivre vos recherches et projets
                  </p>
                </div>
              </div>
            </section>

            {/* Obligations de l'utilisateur */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <FaUserCheck className="text-secondary" />
                4. Obligations de l'Utilisateur
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">Informations exactes :</strong>
                    <p className="text-primary/70 text-sm">Fournir des informations véridiques et à jour</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">Utilisation légale :</strong>
                    <p className="text-primary/70 text-sm">Utiliser nos services conformément à la législation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">Confidentialité :</strong>
                    <p className="text-primary/70 text-sm">Protéger vos identifiants de connexion</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">Respect des autres :</strong>
                    <p className="text-primary/70 text-sm">Ne pas nuire à l'expérience des autres utilisateurs</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">5. Propriété Intellectuelle</h2>
              <p className="text-primary/80 mb-4">
                Tous les droits de propriété intellectuelle relatifs à la plateforme Nexo IMMO, 
                y compris mais sans s'y limiter, les logiciels, algorithmes, designs, marques et contenus, 
                sont et restent la propriété exclusive de Nexo IMMO.
              </p>
              <p className="text-primary/80">
                L'utilisateur s'engage à ne pas reproduire, distribuer, modifier ou créer des œuvres dérivées 
                sans autorisation écrite préalable.
              </p>
            </section>

            {/* Limitation de responsabilité */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <FaExclamationTriangle className="text-secondary" />
                6. Limitation de Responsabilité
              </h2>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                <p className="text-primary/80 text-sm">
                  <strong>Attention :</strong> Nexo IMMO agit en tant qu'intermédiaire. Nous ne garantissons pas 
                  la conclusion de transactions immobilières et déclinons toute responsabilité quant aux 
                  décisions prises par les utilisateurs.
                </p>
              </div>
              <p className="text-primary/80">
                Dans toute la mesure permise par la loi, Nexo IMMO ne pourra être tenu responsable des 
                dommages indirects, accessoires ou consécutifs résultant de l'utilisation de nos services.
              </p>
            </section>

            {/* Résiliation */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">7. Résiliation</h2>
              <p className="text-primary/80 mb-4">
                Vous pouvez résilier votre compte à tout moment en nous contactant. Nous nous réservons 
                le droit de suspendre ou résilier votre accès en cas de non-respect de ces conditions.
              </p>
              <p className="text-primary/80">
                La résiliation n'affecte pas les obligations déjà contractées et les dispositions 
                relatives à la propriété intellectuelle et à la limitation de responsabilité.
              </p>
            </section>

            {/* Droit applicable */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">8. Droit Applicable</h2>
              <p className="text-primary/80">
                Ces conditions sont régies par le droit français. Tout litige sera soumis à la 
                compétence exclusive des tribunaux français, sous réserve des règles de droit impératives.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">9. Contact</h2>
              <p className="text-primary/80 mb-4">
                Pour toute question concernant ces conditions d'utilisation, contactez-nous :
              </p>
              <div className="bg-primary/5 rounded-lg p-4">
                <p className="text-primary/80">
                  <strong>Email :</strong> legal@nexo-immo.fr<br />
                  <strong>Adresse :</strong> Nexo IMMO, Rouen, France<br />
                  <strong>Téléphone :</strong> +33 (0)2 35 XX XX XX
                </p>
              </div>
            </section>

            {/* Bouton retour */}
            <div className="text-center mt-12">
              <button
                onClick={() => window.history.back()}
                className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Retour
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService; 