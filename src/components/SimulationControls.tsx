import React from 'react';
import * as Slider from '@radix-ui/react-slider';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Play, Pause, RotateCcw, Info, Settings } from 'lucide-react';
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
      <div className="flex items-center gap-2 mb-6">
        <Settings className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">Simulation Controls</h2>
      </div>

      <div className="flex gap-2 mb-6">
        <button
          onClick={isRunning ? onStop : onStart}
          className={`flex-1 px-4 py-3 rounded-md text-white font-medium flex items-center justify-center gap-2 transition-colors ${
            isRunning
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          {isRunning ? (
            <>
              <Pause size={20} /> Stop Simulation
            </>
          ) : (
            <>
              <Play size={20} /> Start Simulation
            </>
          )}
        </button>
        <button
          onClick={onReset}
          className="px-4 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors flex items-center gap-2"
        >
          <RotateCcw size={20} />
          Reset
        </button>
      </div>

      <div className="space-y-6">
        {[
          {
            name: 'transmissionRate',
            label: 'Transmission Rate',
            min: 0,
            max: 1,
            step: 0.01,
            tooltip: 'Rate at which the virus spreads between individuals (R0)',
          },
          {
            name: 'recoveryRate',
            label: 'Recovery Rate',
            min: 0,
            max: 1,
            step: 0.01,
            tooltip: 'Percentage of infected individuals who recover daily',
          },
          {
            name: 'mortalityRate',
            label: 'Mortality Rate',
            min: 0,
            max: 1,
            step: 0.001,
            tooltip: 'Percentage of infected individuals who die from the virus',
          },
          {
            name: 'socialDistancing',
            label: 'Social Distancing Effect',
            min: 0,
            max: 1,
            step: 0.01,
            tooltip: 'Effectiveness of social distancing measures (reduces transmission)',
          },
          {
            name: 'vaccinationRate',
            label: 'Vaccination Rate',
            min: 0,
            max: 0.01,
            step: 0.001,
            tooltip: 'Daily percentage of susceptible population getting vaccinated',
          },
        ].map((control) => (
          <div key={control.name} className="space-y-2">
            <div className="flex items-center justify-between">
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
                        className="bg-gray-900 text-white p-2 rounded text-sm max-w-xs"
                        sideOffset={5}
                      >
                        {control.tooltip}
                        <Tooltip.Arrow className="fill-gray-900" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              </div>
              <span className="text-sm font-medium text-blue-600">
                {(params[control.name as keyof SimulationParams] * 100).toFixed(1)}%
              </span>
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
              <Slider.Thumb className="block w-5 h-5 bg-white shadow-lg rounded-full hover:bg-gray-50 focus:outline-none border-2 border-blue-500" />
            </Slider.Root>
          </div>
        ))}
      </div>
    </div>
  );
};