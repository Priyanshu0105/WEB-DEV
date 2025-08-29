import "./style.css";
import * as THREE from "three";
import {
  MapControls,
  OrbitControls,
} from "three/examples/jsm/controls/OrbitControls";

//--------------------------------------Scene--------------------------------------
const scene = new THREE.Scene();
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(2, 2, 2);
scene.add(directionalLight);

//-----------------------------------LoadingManager--------------------------------
const loadingManager = new THREE.LoadingManager();
loadingManager.onStart = () => {
  console.log("Start");
};
loadingManager.onLoad = () => {
  console.log("Loading . . .");
};
loadingManager.onProgress = () => {
  console.log("Progress");
};
loadingManager.onError = () => {
  console.log("Error !");
};

//--------------------------------------textureLoader---------------------------------
const textureLoader = new THREE.TextureLoader(loadingManager);
const colorTexture = textureLoader.load("/texture/color.jpg");
const bumpTexture = textureLoader.load("/texture/bump.jpg")
const displacementTexture = textureLoader.load("texture/displacementMap.jpg")

//----------------------------------------Resizing-------------------------------------
window.addEventListener("resize", () => {
  //Update Size
  aspect.width = window.innerWidth;
  aspect.height = window.innerHeight;

  //New Aspect Ratio
  camera.aspect = aspect.width / aspect.height;
  camera.updateProjectionMatrix();

  //New RendererSize
  renderer.setSize(aspect.width, aspect.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); 
});

//------------------------------------------Mesh-----------------------------------------
const geometry = new THREE.SphereBufferGeometry( 15, 16 , 164, 164 );
const material = new THREE.MeshStandardMaterial();
material.map = colorTexture 
// material.transparent = true 
// material.opacity = 0.4 
material.side = THREE.DoubleSide

material.bumpMap = bumpTexture; 
material.bumpScale = 5;
material.metalness = 0.3
material.roughness = 0.4
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//-----------------------------------------Camera----------------------------------------
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 40;
scene.add(camera);

//-----------------------------------------Renderer--------------------------------------
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);

//---------------------------------------OrbitControls-----------------------------------
const orbitControls = new OrbitControls(camera, canvas);
orbitControls.enableDamping = true;

//----------------------------------------Clock Class------------------------------------
const clock = new THREE.Clock();

//------------------------------------------Animate--------------------------------------
const animate = () => {
  //--------------------------------------GetElapsedTime---------------------------------
  const elapsedTime = clock.getElapsedTime();

  //--------------------------------------Update Controls--------------------------------
  orbitControls.update();
  mesh.rotation.y +=0.01;

  //-----------------------------------------Renderer------------------------------------
  renderer.render(scene, camera);

  //-----------------------------------RequestAnimationFrame------------------------------
  window.requestAnimationFrame(animate);
};
animate();
