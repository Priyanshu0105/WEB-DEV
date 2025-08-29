import * as THREE from 'https://unpkg.com/three@0.155.0/build/three.module.js';

console.log(THREE);
//scene 
const scene = new THREE.Scene();

//mesh
const geometry = new THREE.BufferGeometry();
const verticesArray = new Float32Array([
    0,0,0,
    1,0,0,
    0,1,0
]);

const positionAttribute = new THREE.BufferAttribute(verticesArray , 3);
geometry.setAttribute('position' , positionAttribute)
const material = new THREE.MeshBasicMaterial({color : "yellow"});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 0;
mesh.position.y = 0;
mesh.position.z = 0;
// mesh.rotation.y = Math.PI* 0.9;

scene.add(mesh);

//camera

const aspect = {
    width : window.innerWidth,
    height : window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75 , aspect.width/aspect.height)
camera.position.z = 5;
scene.add(camera);
//renderer

const canvas = document.querySelector(".draw")
const renderer = new THREE.WebGLRenderer({canvas})

renderer.setSize(aspect.width , aspect.height)
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();