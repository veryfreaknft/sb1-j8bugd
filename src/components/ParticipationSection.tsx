import React from 'react';
import { ShoppingCart, Trophy } from 'lucide-react';

const ParticipationSection: React.FC = () => {
  return (
    <section id="participate" className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-emerald-400">Cómo Participar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-emerald-500">
          <ShoppingCart className="mx-auto mb-4 text-emerald-400" size={48} />
          <h3 className="text-2xl font-semibold mb-4 text-center text-emerald-400">Comprar NFTs</h3>
          <p className="text-gray-300">
            Adquiere tu Guardián NFT inicial en nuestro marketplace. Cada Guardián es único y viene con habilidades base según su elemento.
          </p>
          <button className="mt-6 bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 transition-colors w-full font-semibold">
            Ir al Marketplace
          </button>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 border border-emerald-500">
          <Trophy className="mx-auto mb-4 text-yellow-400" size={48} />
          <h3 className="text-2xl font-semibold mb-4 text-center text-yellow-400">Ganar NFTs</h3>
          <p className="text-gray-300">
            Completa misiones, participa en eventos y sube de nivel para ganar NFTs especiales que potenciarán a tu Guardián.
          </p>
          <button className="mt-6 bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 transition-colors w-full font-semibold">
            Comenzar Aventura
          </button>
        </div>
      </div>
    </section>
  );
};

export default ParticipationSection;