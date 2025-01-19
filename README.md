# **Simulação do Sistema Solar 3D**

Este projeto é uma simulação interativa do sistema solar construída com **Three.js**, permitindo visualizar os planetas em movimento orbital, ajustar a velocidade de translação e explorar a cena com controles de câmera. O projeto inclui recursos avançados, como **MSAA** e **FXAA**, para melhorar a qualidade gráfica.

---

## **Estrutura do Projeto**
Abaixo estão os arquivos principais e suas responsabilidades:

### 1. **main.js**
Controla a inicialização do cenário, renderização e integração dos componentes.

- Configuração do renderizador com MSAA e FXAA.
- Adição de luzes (ambiental e direcional).
- Inclusão de um fundo de estrelas utilizando uma esfera invertida.
- Controle de câmera com **OrbitControls**.
- Loop de animação para atualização constante da cena.

### 2. **animation.js**
Gerencia o movimento orbital e a rotação dos planetas.

- Simula a translação (órbita) e a rotação de cada planeta com base no tempo.
- Utiliza o objeto `planetData` para definir as velocidades.

### 3. **config.js**
Armazena configurações globais do sistema solar.

- Facilita ajustes de parâmetros como distâncias entre os planetas, velocidades e luzes.

### 4. **controls.js**
Gerencia a interação do usuário com a cena.

- Permite alterar a velocidade de translação com as teclas "+" e "-".
- Implementa controles de câmera com o mouse (zoom e rotação).

### 5. **loaders.js**
Carrega os modelos 3D dos planetas.

- Utiliza **GLTFLoader** para carregar os arquivos `.glb`.
- Adiciona os modelos à cena com posicionamento inicial.

### 6. **index.html**
Estrutura base para renderização no navegador.

- Contém o elemento `<canvas>` onde a cena 3D é renderizada.
- Adapta o layout para exibição em tela cheia.

---

## **Funcionalidades Principais**
1. **Visualização Interativa**
   - Use o mouse para rotacionar, aproximar ou afastar a câmera.
   - Use botao esquerdo do mouse para arrastar a tela.
2. **Movimento dos Planetas**
   - Os planetas orbitam o sol com velocidades distintas.
3. **Ajuste de Velocidade**
   - Alteração da velocidade global de translação com as teclas "+" e "-".
4. **Efeitos Visuais**
   - MSAA e FXAA para suavização de bordas.
   - Fundo estelar para maior imersão.

---

## **Requisitos do Sistema**
- **Navegador:** Chrome, Firefox ou Edge (com suporte a WebGL).

---

## **Instruções de Uso**
1. No VS Code, digite:

- npm install
- npm vite
- npx vite

2. Explore a cena usando o mouse (rotacionar, dar zoom).
3. Ajuste a velocidade dos planetas com as teclas "+" e "-".

---

## **Tecnologias Utilizadas**
- **Three.js:** Biblioteca de gráficos 3D.
- **GLTFLoader:** Carregamento de modelos 3D.
- **OrbitControls:** Interatividade da câmera.
- **FXAA e MSAA:** Melhorias gráficas.

---

## **Possíveis Melhorias**
1. Adicionar informações sobre cada planeta ao clicar.
2. Implementar efeitos de iluminação realista, como reflexos e sombras.

---

