import React, { useState } from 'react';
import { Leaf, Wallet } from 'lucide-react';

interface HeaderProps {
  onPlayClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onPlayClick }) => {
  const [walletConnected, setWalletConnected] = useState(false);

  const handleWalletClick = () => {
    setWalletConnected(!walletConnected);
  };

  return (
    <header className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Leaf className="mr-2 text-emerald-500" size={32} />
          <h1 className="text-2xl font-bold">EcoVerse: Guardianes del Planeta</h1>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-6 mr-6">
            <li><a href="#game" className="hover:text-emerald-400 transition-colors">Juego</a></li>
            <li><a href="#characters" className="hover:text-emerald-400 transition-colors">Personajes</a></li>
            <li><a href="#participate" className="hover:text-emerald-400 transition-colors">Participar</a></li>
            <li><a href="#marketplace" className="hover:text-emerald-400 transition-colors">Mercado NFT</a></li>
          </ul>
          <button
            onClick={onPlayClick}
            className="bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white font-bold py-2 px-6 rounded-full transition-all duration-300 mr-4"
          >
            Jugar
          </button>
          <button
            onClick={handleWalletClick}
            className={`flex items-center ${
              walletConnected ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
            } text-white font-bold py-2 px-4 rounded transition-colors`}
          >
            <Wallet className="mr-2" size={20} />
            {walletConnected ? 'Conectado' : 'Conectar Wallet'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;