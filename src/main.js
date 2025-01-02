import * as THREE from 'three';
import { loadModels } from './loaders.js';
import { animatePlanets } from './animation.js';
import { setupControls, getSpeedFactor } from './controls.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Configuração da cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('solar-system') });

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(0, 20, 50);

// Luz ambiente
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

// Luz direcional
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

// Adicionar o fundo das estrelas
const textureLoader = new THREE.TextureLoader();
const starTexture = textureLoader.load('assets/models/stars.jpg'); // Caminho para sua textura de estrelas

// Criando uma esfera gigante para o fundo das estrelas
const geometry = new THREE.SphereGeometry(100, 50, 50); // Criando uma esfera grande
geometry.scale(-1, 1, 1); // Inverter a esfera para que a textura fique na parte de dentro
const material = new THREE.MeshBasicMaterial({
  map: starTexture,
  side: THREE.DoubleSide, // Aplica a textura nos dois lados da esfera
});
const starBackground = new THREE.Mesh(geometry, material);
scene.add(starBackground);

// Controles da câmera
const controls = new OrbitControls(camera, renderer.domElement);

// Carregar modelos
loadModels(scene).then(() => {
  // Configurar controles
  setupControls(scene, camera, controls);

  // Loop de animação
  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    animatePlanets(scene, getSpeedFactor());
    renderer.render(scene, camera);
  };

  animate();
});
