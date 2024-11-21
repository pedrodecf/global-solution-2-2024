export function generateRandomPoints(centerLat, centerLng, numPoints) {
  const types = ["Eólica", "Solar", "Hidrelétrica"];
  const points = [];
  for (let i = 0; i < numPoints; i++) {
    const randomLat = centerLat + (Math.random() - 0.5) * 0.02; // Ajuste o multiplicador para controlar a distância
    const randomLng = centerLng + (Math.random() - 0.5) * 0.02;
    points.push({
      lat: randomLat,
      lng: randomLng,
      type: types[i % types.length],
    });
  }
  return points;
}
