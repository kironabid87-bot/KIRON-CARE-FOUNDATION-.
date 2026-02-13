import * as THREE from 'https://cdn.skypack.dev/three';
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000);
const renderer=new THREE.WebGLRenderer({alpha:true});
renderer.setSize(innerWidth,innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z=5;
const geo=new THREE.TorusGeometry(1,0.4,16,100);
const mat=new THREE.MeshStandardMaterial({color:0x5b5fc7});
const torus=new THREE.Mesh(geo,mat);
scene.add(torus);
const light=new THREE.PointLight(0xffffff);
light.position.set(5,5,5);
scene.add(light);
function animate(){requestAnimationFrame(animate);torus.rotation.x+=0.01;torus.rotation.y+=0.01;renderer.render(scene,camera)}
animate();
