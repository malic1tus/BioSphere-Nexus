export interface SimulationParams {
  population: number;
  initialInfected: number;
  transmissionRate: number;
  recoveryRate: number;
  mortalityRate: number;
  socialDistancing: number;
  vaccinationRate: number;
}

export interface SimulationData {
  susceptible: number;
  infected: number;
  recovered: number;
  deceased: number;
  day: number;
}