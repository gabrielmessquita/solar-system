import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

export async function loadModels(scene) {
  const planets = [
    { name: 'sun', path: 'assets/models/sun.glb', position: [0, 0, 0] },
    { name: 'mercury', path: 'assets/models/mercury.glb', position: [5, 0, 0] },
    { name: 'venus', path: 'assets/models/venus.glb', position: [7, 0, 0] },
    { name: 'earth', path: 'assets/models/earth.glb', position: [10, 0, 0] },
    { name: 'mars', path: 'assets/models/mars.glb', position: [15, 0, 0] },
    { name: 'jupiter', path: 'assets/models/jupiter.glb', position: [20, 0, 0] },
    { name: 'saturn', path: 'assets/models/saturn.glb', position: [25, 0, 0] },
    { name: 'uranus', path: 'assets/models/uranus.glb', position: [30, 0, 0] },
    { name: 'neptune', path: 'assets/models/neptune.glb', position: [35, 0, 0] },
  ];

  for (const planet of planets) {
    await loader.loadAsync(planet.path).then((gltf) => {
      const model = gltf.scene;
      model.name = planet.name;
      model.position.set(...planet.position);
      scene.add(model);
    });
  }
}