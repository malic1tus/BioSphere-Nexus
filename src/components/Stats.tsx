import React from 'react';
import { SimulationData } from '../types';
import { Users, UserMinus, UserCheck, Skull } from 'lucide-react';

interface Props {
  data: SimulationData[];
}

export const Stats: React.FC<Props> = ({ data }) => {
  const currentData = data[data.length - 1] || {
    susceptible: 0,
    infected: 0,
    recovered: 0,
    deceased: 0,
  };

  const stats = [
    {
      label: 'Susceptible',
      value: currentData.susceptible,
      color: 'bg-blue-100 text-blue-800 border-blue-200',
      icon: Users,
    },
    {
      label: 'Infected',
      value: currentData.infected,
      color: 'bg-red-100 text-red-800 border-red-200',
      icon: UserMinus,
    },
    {
      label: 'Recovered',
      value: currentData.recovered,
      color: 'bg-green-100 text-green-800 border-green-200',
      icon: UserCheck,
    },
    {
      label: 'Deceased',
      value: currentData.deceased,
      color: 'bg-gray-100 text-gray-800 border-gray-200',
      icon: Skull,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`${stat.color} rounded-lg p-6 text-center border-2 transition-transform hover:scale-105`}
        >
          <div className="flex justify-center mb-2">
            <stat.icon className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold">{stat.label}</h3>
          <p className="text-2xl font-bold mt-1">{stat.value.toLocaleString()}</p>
          <p className="text-sm mt-1">
            {((stat.value / currentData.susceptible) * 100).toFixed(1)}% of population
          </p>
        </div>
      ))}
    </div>
  );
};