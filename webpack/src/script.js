import "./style.css";
import * as THREE from "three";
import {
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
const snowTexture = textureLoader.load("/texture/alphaSnow.jpg")
// const colorTexture = textureLoader.load("/texture/color.jpg");
// const bumpTexture = textureLoader.load("/texture/bump.jpg")
// // const displacementTexture = textureLoader.load("texture/displacementMap.jpg")

// const cubeTextureLoader = new THREE.CubeTextureLoader();
// const env = cubeTextureLoader.load([
//   "/texture/env/px.png" ,
//   "/texture/env/nx.png" ,
//   "/texture/env/py.png" ,
//   "/texture/env/ny.png" ,
//   "/texture/env/pz.png" ,
//   "/texture/env/nz.png" ,
  
// ])
// scene.background = env;
// const matcapload = textureLoader.load("texture/mat3.png")

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
// const geometry = new THREE.SphereBufferGeometry(15, 164, 164);
// const material = new THREE.MeshStandardMaterial();
// // material.map = colorTexture 
// // material.transparent = true 
// // material.opacity = 0.4 
// material.side = THREE.DoubleSide

// // material.bumpMap = bumpTexture; 
// // material.bumpScale = 5;
// material.metalness = 1
// material.roughness = 0.1
// material.envMap= env;
// // material.map = matcapload;

// const geometry = new THREE.PlaneBufferGeometry(1,1);
const geometry = new THREE.BufferGeometry()
const verticesAmount = 1000;
const positionArray = new Float32Array(verticesAmount * 3);
for(let i = 0 ; i< verticesAmount * 3 ; i++){
  positionArray[i] = (Math.random()- 0.5)*8;

}
geometry.setAttribute("position" , new THREE.BufferAttribute(positionArray , 3))
const material = new THREE.PointsMaterial()
const points = new THREE.Points(geometry,material);
material.size = 0.05;
// material.map = snowTexture;
material.alphaMap = snowTexture;
material.transparent = true;
material.depthTest = false;

// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh)
scene.add(points);




//-----------------------------------------Camera----------------------------------------
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height , 0.01, 100);
camera.position.z = 1;
scene.add(camera);

//-----------------------------------------Renderer--------------------------------------
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas , alpha: true });
renderer.setSize(aspect.width, aspect.height);

//---------------------------------------OrbitControls-----------------------------------
const orbitControls = new OrbitControls(camera, canvas);
orbitControls.enableDamping = true;
orbitControls.autoRotate = true;
orbitControls.autoRotateSpeed =0.9;
//----------------------------------------Clock Class------------------------------------
const clock = new THREE.Clock();

//------------------------------------------Animate--------------------------------------
const animate = () => {
  //--------------------------------------GetElapsedTime---------------------------------
  const elapsedTime = clock.getElapsedTime();

  //--------------------------------------Update Controls--------------------------------
  orbitControls.update();

  // mesh.rotation.y +=0.01;

  //-----------------------------------------Renderer------------------------------------
  renderer.render(scene, camera);

  //-----------------------------------RequestAnimationFrame------------------------------
  window.requestAnimationFrame(animate);
};
animate();
