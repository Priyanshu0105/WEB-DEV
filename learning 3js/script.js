import * as THREE from 'https://unpkg.com/three@0.155.0/build/three.module.js';

console.log(THREE);


//scene
const scene = new THREE.Scene()
//mesh
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color : "purple"});
const mesh = new THREE.Mesh(geometry , material);
scene.add(mesh);
//camera
const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
}
const camera = new THREE.PerspectiveCamera(75,aspect.width/aspect.height)
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera)

//renderer
const canvas = document.querySelector(".draw"); //select the canvas element
const renderer = new THREE.WebGLRenderer({canvas}); //add the WebGL renderer
renderer.setSize(aspect.width , aspect.height); //Renderer size
renderer.render(scene,camera) // display what the camera in the scene captured