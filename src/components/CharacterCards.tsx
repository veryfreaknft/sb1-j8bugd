import React from 'react';
import { Link } from 'react-router-dom';

interface Character {
  name: string;
  element: string;
  image: string;
  description: string;
}

const characters: Character[] = [
  {
    name: "Terra",
    element: "Tierra",
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Guardiana de los bosques y montañas, Terra usa su conexión con la naturaleza para sanar el planeta."
  },
  {
    name: "Ignis",
    element: "Fuego",
    image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Ignis canaliza el poder del sol para combatir la contaminación y promover energías limpias."
  },
  {
    name: "Aqua",
    element: "Agua",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Protectora de los océanos, Aqua lucha contra la contaminación marina y restaura los ecosistemas acuáticos."
  },
  {
    name: "Ventus",
    element: "Aire",
    image: "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Ventus purifica el aire y controla los vientos para combatir el cambio climático y la contaminación atmosférica."
  }
];

const CharacterCards: React.FC = () => {
  return (
    <section id="characters" className="my-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-emerald-400">Guardianes del Planeta</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {characters.map((character) => (
          <div key={character.name} className="group perspective">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-96 duration-1000">
              <div className="absolute backface-hidden border-2 w-full h-full">
                <img src={character.image} alt={character.name} className="w-full h-full object-cover rounded-lg" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-2xl font-bold text-white">{character.name}</h3>
                  <p className="text-emerald-400">{character.element}</p>
                </div>
              </div>
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-800 rounded-lg overflow-hidden">
                <div className="text-center flex flex-col items-center justify-center h-full p-4">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-2">{character.name}</h3>
                  <p className="text-white">{character.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/inventory" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-full transition-colors inline-block">
          Ver Mi Inventario
        </Link>
      </div>
    </section>
  );
};

export default CharacterCards;