import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20 px-4">
      <div className="container mx-auto text-center bg-gray-800 p-12 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-white mb-4">Prêt à trouver votre futur chez-vous ?</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Laissez notre IA travailler pour vous. Gagnez du temps, de l'énergie et trouvez l'appartement parfait plus rapidement que jamais.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
          Créer mon compte gratuitement
        </button>
      </div>
    </section>
  );
};

export default CTA;
