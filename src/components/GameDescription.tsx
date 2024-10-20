import React from 'react';

const GameDescription: React.FC = () => {
  return (
    <section id="game" className="my-12 text-center">
      <h2 className="text-4xl font-bold mb-4 text-emerald-400">Bienvenido a EcoVerse</h2>
      <p className="text-xl mb-6 text-gray-300">
        Un juego NFT donde te conviertes en un Guardián del Planeta y luchas contra el cambio climático.
      </p>
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-3xl mx-auto border border-emerald-500">
        <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Mecánicas del Juego</h3>
        <ul className="text-left list-disc list-inside space-y-2 text-gray-300">
          <li>Elige tu elemento: Tierra, Fuego, Agua o Aire.</li>
          <li>Completa misiones ecológicas en el mundo real y gana tokens EcoCoins.</li>
          <li>Usa tus EcoCoins para mejorar tu Guardián NFT y desbloquear nuevas habilidades.</li>
          <li>Participa en eventos globales para combatir desastres climáticos virtuales.</li>
          <li>Colabora con otros jugadores para crear soluciones sostenibles.</li>
        </ul>
        <p className="mt-4 text-emerald-400 font-semibold">
          Cada acción en EcoVerse tiene un impacto real: plantamos un árbol por cada 100 misiones completadas en el juego.
        </p>
      </div>
    </section>
  );
};

export default GameDescription;