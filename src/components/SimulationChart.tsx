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
import { LineChart as ChartIcon } from 'lucide-react';

interface Props {
  data: SimulationData[];
}

export const SimulationChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <ChartIcon className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">Simulation Results</h2>
      </div>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="day"
              label={{ value: 'Days', position: 'insideBottom', offset: -5 }}
              stroke="#6b7280"
            />
            <YAxis
              label={{
                value: 'Population',
                angle: -90,
                position: 'insideLeft',
                offset: 10,
              }}
              stroke="#6b7280"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
              }}
            />
            <Legend verticalAlign="top" height={36} />
            <Line
              type="monotone"
              dataKey="susceptible"
              stroke="#2563eb"
              name="Susceptible"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="infected"
              stroke="#dc2626"
              name="Infected"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="recovered"
              stroke="#16a34a"
              name="Recovered"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="deceased"
              stroke="#4b5563"
              name="Deceased"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};