import React from 'react';
import { DiseaseProfile, SimulationParams } from '../types';
import { diseaseProfiles } from '../data/diseaseProfiles';
import { Microscope } from 'lucide-react';

interface Props {
  onSelect: (params: SimulationParams) => void;
}

export const DiseaseSelector: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Microscope className="w-6 h-6 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-900">Disease Profiles</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {diseaseProfiles.map((profile) => (
          <button
            key={profile.name}
            onClick={() => onSelect(profile.params)}
            className="p-4 border-2 border-purple-100 rounded-lg hover:border-purple-300 transition-colors bg-purple-50 text-left"
          >
            <h3 className="font-bold text-purple-900">{profile.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{profile.description}</p>
            <p className="text-xs text-purple-600 mt-2">Source: {profile.source}</p>
          </button>
        ))}
      </div>
    </div>
  );
};