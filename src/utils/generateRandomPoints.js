export function generateRandomPoints(centerLat, centerLng, numPoints) {
  const types = [
    "Eólica",
    "Solar",
    "Hidrelétrica",
    "Geotérmica",
    "Biomassa",
    "Nuclear",
  ];

  const names = [
    "Energia Verde",
    "SolPower",
    "Vento Forte",
    "GeoEnergia",
    "BioEnergia",
    "Nuclearis",
    "Maré Alta",
    "ThermoEnergia",
    "EcoFlux",
    "Lumina Energia",
    "Lumivolt Energy",
    "Freitas Energia",
    "ElectraGrid",
    "Voltix Power",
    "Ampere Solutions",
    "Enerion",
    "Sparkline Utilities",
    "Quantum Current",
    "Solaris Electric",
    "Pulse Dynamics",
    "Aurora Electric",
    "Ignis Power Corp",
    "Lightning Grid",
    "Nova Charge",
    "Evolve Energy",
    "Zentrix Utilities",
    "Altura Power",
    "Schappo Energy",
    "NeonFlow",
    "BrightPath Energy",
    "CircuitCore",
    "Prism Power Systems",
    "Pedrão do Gás",
  ];

  const points = [];

  for (let i = 0; i < numPoints; i++) {
    const randomLat = centerLat + (Math.random() - 0.5) * 0.02;
    const randomLng = centerLng + (Math.random() - 0.5) * 0.02;

    const randomType = types[Math.floor(Math.random() * types.length)];

    const randomName = names[Math.floor(Math.random() * names.length)];

    points.push({
      lat: randomLat,
      lng: randomLng,
      type: randomType,
      name: randomName,
    });
  }

  return points;
}
