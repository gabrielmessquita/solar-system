import * as THREE from 'three';
import { loadModels } from './loaders.js';
import { animatePlanets } from './animation.js';
import { setupControls, getSpeedFactor } from './controls.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';

// Configuração da cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('solar-system'), antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.9; // Ajustar exposição para melhorar o brilho
camera.position.set(0, 20, 50);

// MSAA: Habilitar no renderizador
renderer.capabilities.isWebGL2 ? renderer.antialias = true : null;

// Luz ambiente
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Intensidade aumentada
scene.add(ambientLight);

// Luz direcional
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6); // Intensidade aumentada
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

// Luz de preenchimento
const fillLight = new THREE.PointLight(0xffffff, 0.5);
fillLight.position.set(-10, 5, -10);
scene.add(fillLight);

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

// Adicionar FXAA (Fast Approximate Anti-Aliasing)
const fxaaPass = new THREE.ShaderPass(FXAAShader);
const composer = new THREE.EffectComposer(renderer);
composer.addPass(new THREE.RenderPass(scene, camera));
composer.addPass(fxaaPass);

// Atualizar FXAA quando a tela for redimensionada
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
  composer.setSize(width, height);
});

// Renderização com FXAA
const render = () => {
  composer.render();
  requestAnimationFrame(render);
};
render();
