import React from 'react';
import * as Slider from '@radix-ui/react-slider';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Play, Pause, RotateCcw, Info } from 'lucide-react';
import { SimulationParams } from '../types';

interface Props {
  params: SimulationParams;
  onParamsChange: (params: SimulationParams) => void;
  isRunning: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
}

export const SimulationControls: React.FC<Props> = ({
  params,
  onParamsChange,
  isRunning,
  onStart,
  onStop,
  onReset,
}) => {
  const handleSliderChange = (name: keyof SimulationParams) => (value: number[]) => {
    onParamsChange({ ...params, [name]: value[0] });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Simulation Controls</h2>
        <div className="space-x-2">
          <button
            onClick={isRunning ? onStop : onStart}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {isRunning ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button
            onClick={onReset}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
          >
            <RotateCcw size={20} />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {[
          {
            name: 'transmissionRate',
            label: 'Transmission Rate',
            min: 0,
            max: 1,
            step: 0.01,
            tooltip: 'Rate at which the virus spreads between individuals',
          },
          {
            name: 'recoveryRate',
            label: 'Recovery Rate',
            min: 0,
            max: 1,
            step: 0.01,
            tooltip: 'Rate at which infected individuals recover',
          },
          {
            name: 'mortalityRate',
            label: 'Mortality Rate',
            min: 0,
            max: 1,
            step: 0.001,
            tooltip: 'Rate at which infected individuals die from the virus',
          },
          {
            name: 'socialDistancing',
            label: 'Social Distancing Effect',
            min: 0,
            max: 1,
            step: 0.01,
            tooltip: 'Effectiveness of social distancing measures',
          },
          {
            name: 'vaccinationRate',
            label: 'Vaccination Rate',
            min: 0,
            max: 0.01,
            step: 0.001,
            tooltip: 'Daily rate of vaccination for susceptible individuals',
          },
        ].map((control) => (
          <div key={control.name} className="space-y-2">
            <div className="flex items-center">
              <label className="text-sm font-medium text-gray-700 mr-2">
                {control.label}
              </label>
              <Tooltip.Provider>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Info size={16} />
                    </button>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      className="bg-gray-900 text-white p-2 rounded text-sm"
                      sideOffset={5}
                    >
                      {control.tooltip}
                      <Tooltip.Arrow className="fill-gray-900" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            </div>
            <Slider.Root
              className="relative flex items-center select-none touch-none w-full h-5"
              value={[params[control.name as keyof SimulationParams] as number]}
              max={control.max}
              min={control.min}
              step={control.step}
              onValueChange={handleSliderChange(control.name as keyof SimulationParams)}
            >
              <Slider.Track className="bg-gray-200 relative grow rounded-full h-2">
                <Slider.Range className="absolute bg-blue-500 rounded-full h-full" />
              </Slider.Track>
              <Slider.Thumb className="block w-5 h-5 bg-white shadow-lg rounded-full hover:bg-gray-50 focus:outline-none" />
            </Slider.Root>
            <div className="text-right text-sm text-gray-500">
              {params[control.name as keyof SimulationParams].toFixed(3)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};