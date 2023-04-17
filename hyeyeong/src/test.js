import * as THREE from "/node_modules/three/build/three.module.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import WebGL from "./WebGL.js";
import tree from "./js/tree.js";
import mandarin from "./js/mandarin.js";
import mountain from "./js/mountain.js";
import jeju from "./js/jeju.js";
import house from "./js/house.js";
import notion from "./js/notion.js";

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

  // renderer
  const renderer = new THREE.WebGLRenderer({
    antialias: true, // 부드러워지지만 약간의 성능저하 발생
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0xf2edc7);
  renderer.shadowMap.enabled = true;
  document.body.appendChild(renderer.domElement);

  // OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 3;
  controls.maxDistance = 20;

  // light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.castShadow = true;
  scene.add(directionalLight);

  // mesh 추가
  const mandarin = new THREE.Group();
  const leafs = new THREE.Group();

  const circleGeometry = new THREE.TetrahedronGeometry(1, 4);
  const circleMaterial = new THREE.MeshBasicMaterial({
    color: 0xffb84c,
  });

  const circleGeometry2 = new THREE.TetrahedronGeometry(0.5, 4);

  const topGeometry = new THREE.TetrahedronGeometry(0.08, 4);
  const topMaterial = new THREE.MeshBasicMaterial({ color: 0x609966 });

  const leafGeometry = new THREE.SphereGeometry(0.15, 32, 16, 0.5, 1.5);
  const leafMaterial = new THREE.MeshBasicMaterial({
    color: 0x609966,
    side: THREE.DoubleSide,
  });

  const circle = new THREE.Mesh(circleGeometry, circleMaterial);
  const circle2 = new THREE.Mesh(circleGeometry2, circleMaterial);
  circle2.position.set(0, 0.7, 0);

  const top = new THREE.Mesh(topGeometry, topMaterial);
  const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
  top.position.set(0, 0.95, 0);
  leaf.position.set(0, 1, -0.13);
  leaf.rotation.set(-1.2, 0, 0);

  const box = new THREE.BoxHelper(leaf, 0xffff00);
  // mandarin.add(box);
  leafs.add(top);
  leafs.add(leaf);
  mandarin.add(circle);
  mandarin.add(circle2);
  mandarin.add(leafs);

  leafs.position.set(0, 0.22, 0);

  scene.add(mandarin); // mesh를 scene에 추가

  const animate = () => {
    requestAnimationFrame(animate);
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
