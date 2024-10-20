import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Leaf, Zap, Droplet, Wind } from 'lucide-react';
import Header from './components/Header';
import GameDescription from './components/GameDescription';
import ElementCard from './components/ElementCard';
import CharacterCards from './components/CharacterCards';
import ParticipationSection from './components/ParticipationSection';
import Modal from './components/Modal';
import Inventory from './components/Inventory';

function Home() {
  const [selectedElement, setSelectedElement] = React.useState<string | null>(null);
  const [showModal, setShowModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState('');

  const elements = [
    { name: 'Tierra', icon: Leaf, color: 'bg-emerald-600' },
    { name: 'Fuego', icon: Zap, color: 'bg-orange-600' },
    { name: 'Agua', icon: Droplet, color: 'bg-blue-600' },
    { name: 'Aire', icon: Wind, color: 'bg-cyan-600' },
  ];

  const handlePlayClick = () => {
    setModalContent('El juego está actualmente en desarrollo. ¡Vuelve pronto para más novedades!');
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <Header onPlayClick={handlePlayClick} />
      <main className="container mx-auto px-4 py-8">
        <GameDescription />
        <section className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8">Elige tu Elemento</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {elements.map((element) => (
              <ElementCard
                key={element.name}
                element={element}
                isSelected={selectedElement === element.name}
                onSelect={() => setSelectedElement(element.name)}
              />
            ))}
          </div>
        </section>
        <CharacterCards />
        <ParticipationSection />
      </main>
      <footer className="bg-gray-900 text-gray-400 py-4 text-center">
        <p>&copy; 2024 EcoVerse: Guardianes del Planeta. Todos los derechos reservados.</p>
      </footer>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} content={modalContent} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </Router>
  );
}

export default App;