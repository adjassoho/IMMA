import React from 'react';
import { FaSearch, FaBullhorn, FaCalendarCheck, FaClipboardList } from 'react-icons/fa';

const features = [
  {
    icon: <FaSearch className="text-blue-500" size={40} />,
    title: '1. Définissez vos critères',
    description: 'Indiquez la ville, le budget, le type de bien et tout ce qui est important pour vous.',
  },
  {
    icon: <FaBullhorn className="text-blue-500" size={40} />,
    title: '2. L\'IA scanne le marché',
    description: 'Notre algorithme analyse en continu les plus grandes plateformes immobilières pour trouver les perles rares.',
  },
  {
    icon: <FaCalendarCheck className="text-blue-500" size={40} />,
    title: '3. Prise de contact & RDV',
    description: 'Nous contactons les propriétaires ou agences et organisons les visites selon vos disponibilités.',
  },
  {
    icon: <FaClipboardList className="text-blue-500" size={40} />,
    title: '4. Suivez tout en un clic',
    description: 'Gérez vos visites et consultez les nouvelles annonces depuis votre tableau de bord personnel.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="bg-gray-800 text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">Comment ça marche ?</h2>
        <p className="text-lg text-gray-400 mb-12">En 4 étapes simples, trouvez le logement qui vous correspond.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
