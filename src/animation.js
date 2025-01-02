const planetData = {
  sun: { orbitRadius: 0, orbitSpeed: 0, rotationSpeed: 0.001 }, // Rotação lenta do Sol
  mercury: { orbitRadius: 5, orbitSpeed: 0.04, rotationSpeed: (2 * Math.PI) / (1407.6 * 3600) },
  venus: { orbitRadius: 7, orbitSpeed: 0.03, rotationSpeed: (2 * Math.PI) / (-5832.5 * 3600) },
  earth: { orbitRadius: 10, orbitSpeed: 0.02, rotationSpeed: (2 * Math.PI) / (24 * 3600) },
  mars: { orbitRadius: 15, orbitSpeed: 0.018, rotationSpeed: (2 * Math.PI) / (24.6 * 3600) },
  jupiter: { orbitRadius: 20, orbitSpeed: 0.012, rotationSpeed: (2 * Math.PI) / (9.9 * 3600) },
  saturn: { orbitRadius: 25, orbitSpeed: 0.01, rotationSpeed: (2 * Math.PI) / (10.7 * 3600) },
  uranus: { orbitRadius: 30, orbitSpeed: 0.008, rotationSpeed: (2 * Math.PI) / (-17.2 * 3600) },
  neptune: { orbitRadius: 35, orbitSpeed: 0.007, rotationSpeed: (2 * Math.PI) / (16.1 * 3600) },
};

export function animatePlanets(scene, speedFactor) {
  const time = performance.now() * 0.001; // Tempo em segundos
  
  scene.children.forEach((planet) => {
    if (planetData[planet.name]) {
      const { orbitRadius, orbitSpeed, rotationSpeed } = planetData[planet.name];

      // Movimento orbital (translação ao redor do Sol)
      planet.position.x = orbitRadius * Math.cos(time * orbitSpeed * speedFactor); // Ajusta a velocidade da órbita
      planet.position.z = orbitRadius * Math.sin(time * orbitSpeed * speedFactor); // Ajusta a velocidade da órbita

      // Rotação do planeta em torno de si mesmo
      planet.rotation.y += rotationSpeed;
    }
  });
}
