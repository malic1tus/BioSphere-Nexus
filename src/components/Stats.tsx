import React from 'react';
import { SimulationData } from '../types';

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
      color: 'bg-blue-100 text-blue-800',
    },
    {
      label: 'Infected',
      value: currentData.infected,
      color: 'bg-red-100 text-red-800',
    },
    {
      label: 'Recovered',
      value: currentData.recovered,
      color: 'bg-green-100 text-green-800',
    },
    {
      label: 'Deceased',
      value: currentData.deceased,
      color: 'bg-gray-100 text-gray-800',
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`${stat.color} rounded-lg p-4 text-center`}
        >
          <h3 className="text-lg font-semibold">{stat.label}</h3>
          <p className="text-2xl font-bold">{stat.value.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};