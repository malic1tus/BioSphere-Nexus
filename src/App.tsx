import React, { useState } from 'react';
import { SimulationControls } from './components/SimulationControls';
import { SimulationChart } from './components/SimulationChart';
import { Stats } from './components/Stats';
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
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex items-center space-x-4">
          <Virus className="w-10 h-10 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-900">
            Virus Propagation Simulator
          </h1>
        </header>

        <Stats data={data} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SimulationControls
            params={params}
            onParamsChange={setParams}
            isRunning={isRunning}
            onStart={startSimulation}
            onStop={stopSimulation}
            onReset={resetSimulation}
          />
          <SimulationChart data={data} />
        </div>

        <footer className="text-center text-gray-500 text-sm">
          <p>
            This simulation uses the SIR (Susceptible, Infected, Recovered) model
            with additional parameters for mortality and interventions.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;