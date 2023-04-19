import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import WebGL from "./WebGL.js";
import mandarin from "./js/mandarin.js";

if (WebGL.isWebGLAvailable()) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1.3, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#mandarin"),
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  //   renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.shadowMap.enabled = true;
  renderer.setClearColor(0x000000, 0);
  camera.position.set(0, 1, 1);

  // OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 2.5;
  controls.maxDistance = 5;

  // ligth
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  const pointLight = new THREE.PointLight(0xffffff, 0.5);
  pointLight.position.set(0, 3, 0);
  pointLight.castShadow = true;
  scene.add(ambientLight);
  scene.add(pointLight);

  // mesh
  scene.add(mandarin);

  const animate = () => {
    requestAnimationFrame(animate);
    mandarin.rotation.y += 0.01;
    controls.update();
    renderer.render(scene, camera);
  };
  animate();

  // 반응형 처리
  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener("resize", onWindowResize);
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}
