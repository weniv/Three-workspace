import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import WebGL from "./WebGL.js";

if (WebGL.isWebGLAvailable()) {
  // scene
  const scene = new THREE.Scene();

  // camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 1;

  // renderer
  const renderer = new THREE.WebGLRenderer({
    antialias: true, // 부드러워지지만 약간의 성능저하 발생
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0xffe187);
  renderer.shadowMap.enabled = true;
  // renderer.outputEncoding = THREE.sRGBEncoding;
  document.body.appendChild(renderer.domElement);

  // OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 3;
  controls.maxDistance = 20;

  // light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  const hemisphereLight = new THREE.HemisphereLight(0xf16767, 0x3a98b9, 1);
  const pointLight = new THREE.PointLight(0xff0000, 0.7, 100);
  const rectAreaLight = new THREE.RectAreaLight(0xffffff, 1, 4, 4);
  const spotLight = new THREE.SpotLight(
    0xffffff,
    0.5,
    30,
    Math.PI * 0.1,
    0.1,
    1
  );
  spotLight.position.set(0, 3, 5);
  // directionalLight.castShadow = true;
  // rectAreaLight.position.set(0, 1, 2);
  const helper = new THREE.SpotLightHelper(spotLight);
  // shadow
  // directionalLight.castShadow = true;
  // directionalLight.shadow.mapSize.width = 1024;
  // directionalLight.shadow.mapSize.height = 1024;
  // directionalLight.shadow.radius = 5;
  scene.add(ambientLight);
  // scene.add(helper);

  const animate = () => {
    requestAnimationFrame(animate);
    // controls.update();
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
