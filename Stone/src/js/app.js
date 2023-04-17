import * as THREE from '../../node_modules/three/build/three.module.js'
import WebGL from './webgl.js';
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls.js';
import {objectGrp,handleGreeting,handleEyeMove} from './object.js'
import {islandGrp,plantGrp} from './island.js'
import {cloudGrp,handleMove} from './cloud.js'

if (WebGL.isWebGLAvailable()) {
  // three.js 코드
  
  // scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x7CCAD5)
  // changeBackground();
  // camera
  const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
  // camera.position.set(-10,10,20);
  camera.position.set(0,30,0);
  camera.lookAt(0,0,5);

  // renderer
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  document.body.appendChild(renderer.domElement);

  const axesHelper = new THREE.AxesHelper(20);
  // axesHelper.setColors(xColor,yColor,zColor)
  scene.add(axesHelper);

  // Light
  const ambientLight = new THREE.AmbientLight(0xffffff,0.8);
  scene.add(ambientLight);

  // const directionLight = new THREE.DirectionalLight(0xffffff,1);
  // directionLight.position.set(0,10,5);
  // directionLight.castShadow = true;
  // directionLight.shadow.radius = 12;

  // directionLight.shadow.mapSize.width = 1024;
  // directionLight.shadow.mapSize.height = 1024;
  
  // scene.add(directionLight);


  const pointLigth = new THREE.PointLight(0xffffff,1);
  pointLigth.position.set(-5,20,5);
  pointLigth.castShadow = true;
  pointLigth.shadow.radius = 12;
  const plHelper = new THREE.PointLightHelper(pointLigth,10,0xff0000);
  scene.add(plHelper);

  // pointLigth.shadow.mapSize.width = 1024;
  // pointLigth.shadow.mapSize.height = 1024;
  
  scene.add(pointLigth);

  // OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 15;
  controls.maxDistance = 100;
  controls.update();
  
  // 오브젝트 추가
  scene.add(objectGrp);
  objectGrp.position.y=2.2;
  scene.add(islandGrp);
  scene.add(cloudGrp)
  plantGrp.position.y=5;
  scene.add(plantGrp)

  // 애니메이션 처리
  let time = 0
  function animate() {
    time+=0.01
    handleGreeting(time);
    handleMove(time);
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    document.body.addEventListener('mousemove',(e)=>{
      handleEyeMove(e);
    })
  }

  // 반응형 처리
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  requestAnimationFrame(animate);
  window.addEventListener('resize', onWindowResize);

} else {
  const warning = WebGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}
