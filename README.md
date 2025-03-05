# 🦠 Virus Propagation Simulator

An interactive web application that simulates virus spread in a population using the SIR (Susceptible, Infected, Recovered) model with additional parameters for mortality and interventions.

## ✨ Features

- 📊 Real-time visualization of virus spread
- 🎛️ Interactive parameter controls
- 📈 Population statistics dashboard
- 🔄 Start/Stop/Reset simulation controls
- 💉 Vaccination rate modeling
- 🏠 Social distancing effects
- 🧬 Preset disease profiles for real-world viruses

## 🎮 Parameters

You can adjust various parameters to see how they affect virus propagation:

- **Transmission Rate**: How easily the virus spreads
- **Recovery Rate**: How quickly infected people recover
- **Mortality Rate**: Percentage of infected people who don't survive
- **Social Distancing**: Effectiveness of distancing measures
- **Vaccination Rate**: Daily rate of vaccination for susceptible individuals

## 🦠 Preset Disease Profiles

Quick-load parameters for real-world diseases:

- **COVID-19**: Original strain characteristics
- **COVID-19 (Delta)**: More transmissible variant
- **Measles**: Highly contagious but preventable disease
- **Seasonal Flu**: Annual influenza parameters

Each preset automatically configures:
- Transmission rates
- Recovery periods
- Mortality rates
- Recommended intervention levels

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📖 How to Use

1. 🎯 Either:
   - Choose a preset disease profile to load real-world parameters
   - Set your desired parameters using the sliders
2. ▶️ Click the Play button to start the simulation
3. ⏸️ Use the Pause button to freeze the simulation
4. 🔄 Click Reset to start over with new parameters

## 🧮 The Model

This simulator uses an extended SIR model that includes:

- **S**usceptible: People who can be infected
- **I**nfected: Currently infected people
- **R**ecovered: People who have recovered and are immune
- **D**eceased: Mortality tracking

Additional factors:
- 💉 Vaccination effect on susceptible population
- 🏠 Social distancing impact on transmission
- 📊 Daily progression tracking

## 🛠️ Built With

- React
- TypeScript
- Recharts
- Radix UI
- Tailwind CSS

## 📝 Notes

- The simulation runs in real-time with 1-second intervals
- Population numbers are rounded to whole numbers
- The simulation automatically stops when there are no more infected individuals
- Preset disease profiles are based on published epidemiological data

## 🤝 Contributing

Feel free to:
- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Submit pull requests

## 📜 License

MIT License - feel free to use this project for learning and education!