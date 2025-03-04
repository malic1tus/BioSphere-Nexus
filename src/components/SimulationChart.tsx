import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { SimulationData } from '../types';

interface Props {
  data: SimulationData[];
}

export const SimulationChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Simulation Results</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              label={{ value: 'Days', position: 'insideBottom', offset: -5 }}
            />
            <YAxis label={{ value: 'Population', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="susceptible"
              stroke="#2563eb"
              name="Susceptible"
            />
            <Line
              type="monotone"
              dataKey="infected"
              stroke="#dc2626"
              name="Infected"
            />
            <Line
              type="monotone"
              dataKey="recovered"
              stroke="#16a34a"
              name="Recovered"
            />
            <Line
              type="monotone"
              dataKey="deceased"
              stroke="#4b5563"
              name="Deceased"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};