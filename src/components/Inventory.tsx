import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InventoryItem {
  id: string;
  name: string;
  element: string;
  level: number;
  image: string;
}

const inventoryItems: InventoryItem[] = [
  {
    id: '1',
    name: "Terra Nova",
    element: "Tierra",
    level: 5,
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: '2',
    name: "Ignis Prime",
    element: "Fuego",
    level: 3,
    image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: '3',
    name: "Aqua Serena",
    element: "Agua",
    level: 4,
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

const Inventory: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-8">
      <Link to="/" className="flex items-center text-emerald-400 hover:text-emerald-300 mb-8">
        <ArrowLeft className="mr-2" />
        Volver al Inicio
      </Link>
      <h1 className="text-4xl font-bold text-center mb-12 text-emerald-400">Mi Inventario de Guardianes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {inventoryItems.map((item) => (
          <div key={item.id} className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-emerald-400">{item.name}</h2>
              <p className="text-gray-300">Elemento: {item.element}</p>
              <p className="text-gray-300">Nivel: {item.level}</p>
              <button className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded transition-colors w-full">
                Mejorar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;