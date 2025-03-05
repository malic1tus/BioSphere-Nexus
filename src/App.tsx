import React, { useState } from 'react';
import { SimulationControls } from './components/SimulationControls';
import { SimulationChart } from './components/SimulationChart';
import { Stats } from './components/Stats';
import { DiseaseSelector } from './components/DiseaseSelector';
import { useSimulation } from './hooks/useSimulation';
import { SimulationParams } from './types';
import { Brush as Virus } from 'lucide-react';

function App() {
  const [params, setParams] = useState<SimulationParams>({
    population: 1000000,
    initialInfected: 100,
    transmissionRate: 0.3,
    recoveryRate: 0.1,
    mortalityRate: 0.02,
    socialDistancing: 0.3,
    vaccinationRate: 0.001,
  });

  const { data, isRunning, startSimulation, stopSimulation, resetSimulation } = useSimulation(params);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Virus className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Virus Propagation Simulator
              </h1>
              <p className="text-gray-500 mt-1">
                Interactive SIR model with real-world disease profiles
              </p>
            </div>
          </div>
        </header>

        <Stats data={data} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <SimulationControls
              params={params}
              onParamsChange={setParams}
              isRunning={isRunning}
              onStart={startSimulation}
              onStop={stopSimulation}
              onReset={resetSimulation}
            />
            <DiseaseSelector onSelect={setParams} />
          </div>
          <SimulationChart data={data} />
        </div>

        <footer className="bg-white rounded-lg shadow-lg p-6 text-center">
          <p className="text-gray-600">
            This simulation uses the SIR (Susceptible, Infected, Recovered) model
            with additional parameters for mortality and interventions. Disease profiles
            are based on historical data and research.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;