import * as THREE from 'https://unpkg.com/three@0.155.0/build/three.module.js';
 


console.log(THREE);


//scene
const scene = new THREE.Scene()
//group 
const group = new THREE.Group();
//mesh
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color : "purple"});
const mesh = new THREE.Mesh(geometry , material);

mesh.position.z =1;
// mesh.rotation.y = Math.PI * 0.25;
// mesh.rotation.x = Math.PI * 0.9;


//adding another mesh
const geometry2 = new THREE.BoxGeometry(1,1,1);
const material2 = new THREE.MeshBasicMaterial({color: "yellow"});
const mesh2 = new THREE.Mesh(geometry2,material2);
mesh2.position.y = 2;

group.add(mesh,mesh2)
scene.add(group);
group.position.x = 3;
//Axes Helper 
const axeshelper = new THREE.AxesHelper(10);
scene.add(axeshelper);
//camera
const aspect = {
    width: window.innerWidth,
    height: window.innerHeight
}
const camera = new THREE.PerspectiveCamera(75,aspect.width/aspect.height)
camera.position.z = 5;
camera.position.x = 1;
camera.position.y = 1;

scene.add(camera)

//renderer
const canvas = document.querySelector(".draw"); //select the canvas element
const renderer = new THREE.WebGLRenderer({canvas}); //add the WebGL renderer
renderer.setSize(aspect.width , aspect.height); //Renderer size
 // display what the camera in the scene captured

 //Clock Class
 const clock = new THREE.Clock()
//animate

const animate = () => {
    // Get Elapsed Time
    const elapsedTime = clock.getElapsedTime();
    console.log(elapsedTime)
    mesh.rotation.x = elapsedTime ;
    mesh.position.x +=0.01;
    mesh2.rotation.z += 2;
    // camera.position.x += 0.01;
    // camera.position.z +=0.01;
    renderer.render(scene,camera)
    window.requestAnimationFrame(animate);
}
animate();

//function will get called 60 times per second on some devices and 120 times on others  0.01 x 60 = 0.6 on X || 0.01 x 120 = 1.2 on X
