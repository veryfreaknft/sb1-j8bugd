import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ElementCardProps {
  element: {
    name: string;
    icon: LucideIcon;
    color: string;
  };
  isSelected: boolean;
  onSelect: () => void;
}

const ElementCard: React.FC<ElementCardProps> = ({ element, isSelected, onSelect }) => {
  const Icon = element.icon;
  return (
    <div
      className={`${element.color} rounded-lg p-6 text-white text-center cursor-pointer transition-all transform hover:scale-105 ${
        isSelected ? 'ring-4 ring-emerald-400' : ''
      } shadow-lg hover:shadow-xl`}
      onClick={onSelect}
    >
      <Icon size={48} className="mx-auto mb-4" />
      <h3 className="text-xl font-bold">{element.name}</h3>
      <p className="mt-2 text-gray-200">Conviértete en un Guardián de {element.name}</p>
    </div>
  );
};

export default ElementCard;