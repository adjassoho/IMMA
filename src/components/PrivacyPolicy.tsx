import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserSecret, FaDatabase, FaEye, FaLock } from 'react-icons/fa';

const PrivacyPolicy = () => {
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
            <FaUserSecret className="text-white text-2xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">Politique de Confidentialité</h1>
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
                <FaShieldAlt className="text-secondary" />
                1. Introduction
              </h2>
              <p className="text-primary/80 mb-4">
                Nexo IMMO s'engage à protéger votre vie privée et vos données personnelles. 
                Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
              </p>
              <p className="text-primary/80">
                En utilisant nos services, vous acceptez les pratiques décrites dans cette politique. 
                Nous respectons le Règlement Général sur la Protection des Données (RGPD) et la législation française.
              </p>
            </section>

            {/* Responsable du traitement */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">2. Responsable du Traitement</h2>
              <div className="bg-primary/5 rounded-lg p-4">
                <p className="text-primary/80">
                  <strong>Nexo IMMO</strong><br />
                  Adresse : Rouen, France<br />
                  Email : privacy@nexo-immo.fr<br />
                  Téléphone : +33 (0)2 35 XX XX XX<br />
                  SIRET : XX XXX XXX XXX XXX
                </p>
              </div>
            </section>

            {/* Données collectées */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <FaDatabase className="text-secondary" />
                3. Données Collectées
              </h2>
              
              <h3 className="text-xl font-bold text-primary mb-3">3.1 Données d'identification</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-bold text-primary mb-2">Informations personnelles</h4>
                  <ul className="text-primary/70 text-sm space-y-1">
                    <li>• Nom et prénom</li>
                    <li>• Adresse email</li>
                    <li>• Numéro de téléphone</li>
                    <li>• Adresse postale</li>
                  </ul>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-bold text-primary mb-2">Données de connexion</h4>
                  <ul className="text-primary/70 text-sm space-y-1">
                    <li>• Identifiants de connexion</li>
                    <li>• Historique de navigation</li>
                    <li>• Adresse IP</li>
                    <li>• Cookies et traceurs</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold text-primary mb-3">3.2 Données immobilières</h3>
              <div className="bg-primary/5 rounded-lg p-4 mb-6">
                <ul className="text-primary/70 space-y-2">
                  <li>• Critères de recherche (budget, localisation, type de bien)</li>
                  <li>• Biens consultés et favoris</li>
                  <li>• Demandes de visites</li>
                  <li>• Interactions avec les conseillers</li>
                  <li>• Évaluations et commentaires</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-primary mb-3">3.3 Données techniques</h3>
              <div className="bg-primary/5 rounded-lg p-4">
                <ul className="text-primary/70 space-y-2">
                  <li>• Type de navigateur et système d'exploitation</li>
                  <li>• Pages visitées et temps passé</li>
                  <li>• Données de géolocalisation (avec consentement)</li>
                  <li>• Données d'analyse et de performance</li>
                </ul>
              </div>
            </section>

            {/* Finalités du traitement */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">4. Finalités du Traitement</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaEye className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">Fourniture des services :</strong>
                    <p className="text-primary/70 text-sm">Gestion de votre compte, recherche de biens, organisation de visites</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaEye className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">Communication :</strong>
                    <p className="text-primary/70 text-sm">Envoi d'informations, notifications, support client</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaEye className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">Amélioration des services :</strong>
                    <p className="text-primary/70 text-sm">Analyse d'usage, développement de nouvelles fonctionnalités</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaEye className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">Sécurité :</strong>
                    <p className="text-primary/70 text-sm">Protection contre la fraude, sécurisation des comptes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaEye className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">Obligations légales :</strong>
                    <p className="text-primary/70 text-sm">Respect des réglementations, lutte contre le blanchiment</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Base légale */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">5. Base Légale</h2>
              <div className="space-y-4">
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Exécution du contrat</h3>
                  <p className="text-primary/70 text-sm">
                    Traitement nécessaire à la fourniture de nos services immobiliers
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Consentement</h3>
                  <p className="text-primary/70 text-sm">
                    Pour les communications marketing et l'utilisation de cookies non essentiels
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Intérêt légitime</h3>
                  <p className="text-primary/70 text-sm">
                    Pour l'amélioration de nos services et la sécurité
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Obligation légale</h3>
                  <p className="text-primary/70 text-sm">
                    Pour respecter les réglementations applicables
                  </p>
                </div>
              </div>
            </section>

            {/* Destinataires */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">6. Destinataires des Données</h2>
              <div className="space-y-4">
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">En interne</h3>
                  <p className="text-primary/70 text-sm">
                    Nos équipes commerciales, techniques et support client, selon leurs besoins
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Prestataires de services</h3>
                  <p className="text-primary/70 text-sm">
                    Hébergeurs, outils d'analyse, services de paiement (avec garanties appropriées)
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Autorités</h3>
                  <p className="text-primary/70 text-sm">
                    Sur demande légale ou pour respecter nos obligations réglementaires
                  </p>
                </div>
              </div>
            </section>

            {/* Durée de conservation */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">7. Durée de Conservation</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaLock className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">Données de compte :</strong>
                    <p className="text-primary/70 text-sm">Durée de vie du compte + 3 ans après suppression</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaLock className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">Données de connexion :</strong>
                    <p className="text-primary/70 text-sm">12 mois maximum</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaLock className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">Cookies :</strong>
                    <p className="text-primary/70 text-sm">13 mois maximum (selon type)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaLock className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">Données comptables :</strong>
                    <p className="text-primary/70 text-sm">10 ans (obligation légale)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Vos droits */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">8. Vos Droits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Droit d'accès</h3>
                  <p className="text-primary/70 text-sm">
                    Consulter vos données personnelles
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Droit de rectification</h3>
                  <p className="text-primary/70 text-sm">
                    Corriger des données inexactes
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Droit d'effacement</h3>
                  <p className="text-primary/70 text-sm">
                    Supprimer vos données ("droit à l'oubli")
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Droit à la portabilité</h3>
                  <p className="text-primary/70 text-sm">
                    Récupérer vos données dans un format structuré
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Droit d'opposition</h3>
                  <p className="text-primary/70 text-sm">
                    S'opposer au traitement pour des raisons légitimes
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Droit de limitation</h3>
                  <p className="text-primary/70 text-sm">
                    Limiter le traitement de vos données
                  </p>
                </div>
              </div>
            </section>

            {/* Sécurité */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <FaLock className="text-secondary" />
                9. Sécurité des Données
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaShieldAlt className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">Chiffrement :</strong>
                    <p className="text-primary/70 text-sm">Données chiffrées en transit et au repos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaShieldAlt className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">Accès contrôlé :</strong>
                    <p className="text-primary/70 text-sm">Accès limité aux personnes autorisées</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaShieldAlt className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">Surveillance :</strong>
                    <p className="text-primary/70 text-sm">Monitoring continu des systèmes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaShieldAlt className="text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-primary">Sauvegarde :</strong>
                    <p className="text-primary/70 text-sm">Sauvegardes sécurisées et régulières</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">10. Cookies et Traceurs</h2>
              <p className="text-primary/80 mb-4">
                Nous utilisons des cookies pour améliorer votre expérience et analyser l'usage de notre site.
              </p>
              <div className="space-y-3">
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Cookies essentiels</h3>
                  <p className="text-primary/70 text-sm">
                    Nécessaires au fonctionnement du site (connexion, panier, etc.)
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Cookies analytiques</h3>
                  <p className="text-primary/70 text-sm">
                    Pour analyser l'usage et améliorer nos services
                  </p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h3 className="font-bold text-primary mb-2">Cookies marketing</h3>
                  <p className="text-primary/70 text-sm">
                    Pour personnaliser les publicités (avec votre consentement)
                  </p>
                </div>
              </div>
            </section>

            {/* Contact DPO */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">11. Contact et DPO</h2>
              <div className="bg-primary/5 rounded-lg p-4">
                <p className="text-primary/80 mb-4">
                  Pour exercer vos droits ou toute question sur cette politique :
                </p>
                <div className="space-y-2">
                  <p className="text-primary/80">
                    <strong>Email :</strong> privacy@nexo-immo.fr
                  </p>
                  <p className="text-primary/80">
                    <strong>Adresse :</strong> Nexo IMMO, Rouen, France
                  </p>
                  <p className="text-primary/80">
                    <strong>CNIL :</strong> Vous pouvez également déposer une plainte auprès de la CNIL
                  </p>
                </div>
              </div>
            </section>

            {/* Modifications */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">12. Modifications</h2>
              <p className="text-primary/80">
                Cette politique peut être mise à jour. Nous vous informerons de tout changement 
                significatif par email ou via notre site web. La date de dernière mise à jour 
                est indiquée en haut de cette page.
              </p>
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

export default PrivacyPolicy; 