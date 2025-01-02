import * as THREE from 'three';

let speedFactor = 1;  // Fator de controle da velocidade da órbita
let controls;         // Controle da câmera

// Variáveis de Raycasting
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let planets = [];

export let camera;

// Função para configurar os controles da cena
export function setupControls(scene, cameraInstance, controlsInstance) {
  camera = cameraInstance;
  controls = controlsInstance;

  // Armazenar os planetas carregados na cena
  planets = scene.children.filter(child => child.type === 'Group');

  // Adicionar ouvintes de eventos
  window.addEventListener('click', onMouseClick, false);

  // Controle de velocidade usando as teclas do teclado
  window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
      speedFactor += 0.1;  // Aumentar a velocidade
    }
    if (event.key === 'ArrowDown') {
      speedFactor -= 0.1;  // Diminuir a velocidade
    }
    if (event.key === '+') {
      speedFactor += 0.1;  // Aumentar a velocidade com o + no teclado
    }
    if (event.key === '-') {
      speedFactor -= 0.1;  // Diminuir a velocidade com o - no teclado
    }

    // Limitar a velocidade mínima para 0.1
    speedFactor = Math.max(0.1, speedFactor);
  });

  // Configurar o OrbitControls
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.screenSpacePanning = false;
  controls.maxDistance = 100; // Máximo de zoom
  controls.minDistance = 10;  // Mínimo de zoom
}

// Função para detectar clique no planeta
function onMouseClick(event) {
  // Coordenadas normalizadas do mouse
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Atualizar Raycaster
  raycaster.setFromCamera(mouse, camera);

  // Verificar interseções
  const intersects = raycaster.intersectObjects(planets, true);

  if (intersects.length > 0) {
    const clickedPlanet = intersects[0].object;

    // Centralizar câmera no planeta
    const targetPosition = clickedPlanet.parent.position.clone();
    controls.target.copy(targetPosition);
    camera.position.set(targetPosition.x + 15, targetPosition.y + 10, targetPosition.z + 15);

    // Ajustar zoom
    controls.maxDistance = 30;
    controls.minDistance = 5;
  }
}

// Retorna o fator de velocidade
export function getSpeedFactor() {
  return speedFactor;
}
