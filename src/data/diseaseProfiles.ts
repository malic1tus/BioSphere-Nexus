import { DiseaseProfile } from '../types';

export const diseaseProfiles: DiseaseProfile[] = [
  {
    name: "COVID-19 (Original)",
    description: "Original SARS-CoV-2 strain from 2020",
    params: {
      population: 1000000,
      initialInfected: 100,
      transmissionRate: 0.3,
      recoveryRate: 0.1,
      mortalityRate: 0.02,
      socialDistancing: 0.3,
      vaccinationRate: 0.001
    },
    source: "WHO Initial Reports, 2020"
  },
  {
    name: "Seasonal Flu",
    description: "Typical seasonal influenza",
    params: {
      population: 1000000,
      initialInfected: 100,
      transmissionRate: 0.2,
      recoveryRate: 0.15,
      mortalityRate: 0.001,
      socialDistancing: 0.1,
      vaccinationRate: 0.002
    },
    source: "CDC Influenza Statistics"
  },
  {
    name: "Measles",
    description: "Highly contagious viral disease",
    params: {
      population: 1000000,
      initialInfected: 100,
      transmissionRate: 0.9,
      recoveryRate: 0.07,
      mortalityRate: 0.001,
      socialDistancing: 0.2,
      vaccinationRate: 0.003
    },
    source: "WHO Measles Data"
  },
  {
    name: "COVID-19 (Delta)",
    description: "Delta variant with higher transmission",
    params: {
      population: 1000000,
      initialInfected: 100,
      transmissionRate: 0.5,
      recoveryRate: 0.09,
      mortalityRate: 0.015,
      socialDistancing: 0.3,
      vaccinationRate: 0.002
    },
    source: "CDC Delta Variant Studies"
  }
];