import { useState, useEffect } from 'react';
import { SimulationParams, SimulationData } from '../types';

const calculateNextDay = (
  current: SimulationData,
  params: SimulationParams
): SimulationData => {
  const effectiveTransmissionRate = params.transmissionRate * (1 - params.socialDistancing);
  const newInfected = Math.floor(
    (current.susceptible * current.infected * effectiveTransmissionRate) /
      params.population
  );
  
  const newRecovered = Math.floor(current.infected * params.recoveryRate);
  const newDeceased = Math.floor(current.infected * params.mortalityRate);
  const vaccinated = Math.floor(current.susceptible * params.vaccinationRate);

  return {
    day: current.day + 1,
    susceptible: current.susceptible - newInfected - vaccinated,
    infected: current.infected + newInfected - newRecovered - newDeceased,
    recovered: current.recovered + newRecovered + vaccinated,
    deceased: current.deceased + newDeceased,
  };
};

export const useSimulation = (params: SimulationParams) => {
  const [data, setData] = useState<SimulationData[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const initialState: SimulationData = {
      day: 0,
      susceptible: params.population - params.initialInfected,
      infected: params.initialInfected,
      recovered: 0,
      deceased: 0,
    };

    setData([initialState]);

    const interval = setInterval(() => {
      setData((currentData) => {
        const lastDay = currentData[currentData.length - 1];
        if (lastDay.infected <= 0) {
          setIsRunning(false);
          return currentData;
        }
        return [...currentData, calculateNextDay(lastDay, params)];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, params]);

  const startSimulation = () => setIsRunning(true);
  const stopSimulation = () => setIsRunning(false);
  const resetSimulation = () => {
    setIsRunning(false);
    setData([]);
  };

  return {
    data,
    isRunning,
    startSimulation,
    stopSimulation,
    resetSimulation,
  };
};