export const config = {
  planetDistances: {
    sun: 0,
    mercury: 5,
    venus: 7,
    earth: 10,
    mars: 15,
    jupiter: 20,
    saturn: 25,
    uranus: 30,
    neptune: 35,
  },
  orbitSpeed: 1, // Velocidade global padrão dos planetas
  cameraSettings: {
    fov: 75,
    near: 0.1,
    far: 1000,
    startPosition: [0, 20, 50],
  },
  lightSettings: {
    ambientIntensity: 0.4,
    directionalIntensity: 1,
    directionalPosition: [10, 10, 10],
  },
};
