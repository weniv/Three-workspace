import * as THREE from "/node_modules/three/build/three.module.js";
import { OrbitControls } from "../vendor_mods/three/examples/jsm/controls/OrbitControls.js";
import WebGL from "./WebGL.js";

if (WebGL.isWebGLAvailable()) {
  // 장면
  const scene = new THREE.Scene();
  // scene.background = new THREE.Color(0xe9a9a8);
  // scene.background = new THREE.Color(0x000000);

  // 렌더러 추가
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0xf2edc7);
  document.body.appendChild(renderer.domElement);

  // 카메라 추가
  const camera = new THREE.PerspectiveCamera(
    80,
    window.innerWidth / window.innerHeight,
    0.1,
    800
  );
  // camera.position.set(0, 0, 0);
  // camera.lookAt(new THREE.Vector3(0, 0, 0));

  // OrbitControls 추가
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 3;
  controls.maxDistance = 20;

  // 빛
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  scene.add(directionalLight);

  // 도형 추가
  const boxGeometry = new THREE.BoxGeometry(1.5, 0.3, 2.5);
  const boxMaterial = new THREE.MeshPhongMaterial({
    color: 0xc0bfbb,
  });
  const box = new THREE.Mesh(boxGeometry, boxMaterial);

  const panel = new THREE.Group();
  const outerPanelGeometry = new THREE.BoxGeometry(1.2, 0.1, 0.9);
  const outerPanelMaterial = new THREE.MeshPhongMaterial({
    color: 0x000000,
  });
  const outerPanel = new THREE.Mesh(outerPanelGeometry, outerPanelMaterial);
  outerPanel.position.set(0, 0.12, -0.6);

  const innerPanelGeometry = new THREE.BoxGeometry(0.9, 0.11, 0.8);
  const innerPanelMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff,
  });
  const innerPanel = new THREE.Mesh(innerPanelGeometry, innerPanelMaterial);
  innerPanel.position.set(0, 0.12, -0.6);

  panel.add(outerPanel, innerPanel);

  // 버튼
  const btn = new THREE.Group();
  const btnGeometry = new THREE.CylinderGeometry(0.07, 0.07, 0.1, 32);
  const btnPanelMaterial = new THREE.MeshPhongMaterial({
    color: 0xff0000,
  });
  const btnOne = new THREE.Mesh(btnGeometry, btnPanelMaterial);
  const btnTwo = new THREE.Mesh(btnGeometry, btnPanelMaterial);

  btnOne.position.set(0.5, 0.12, 0.3);
  btnTwo.position.set(0.25, 0.12, 0.4);

  btn.add(btnOne);
  btn.add(btnTwo);

  // 십자버튼
  const crossBtn = new THREE.Group();

  const crossOneGeometry = new THREE.BoxGeometry(0.3, 0.1, 0.1);
  const crossTwoGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.3);
  const crossMaterial = new THREE.MeshPhongMaterial({
    color: 0xff0000,
  });

  const crossOne = new THREE.Mesh(crossOneGeometry, crossMaterial);
  const crossTwo = new THREE.Mesh(crossTwoGeometry, crossMaterial);

  crossOne.position.set(-0.4, 0.12, 0.35);
  crossTwo.position.set(-0.4, 0.12, 0.35);

  crossBtn.add(crossOne);
  crossBtn.add(crossTwo);

  // 리셋버튼
  const reset = new THREE.Group();
  const resetGeometry = new THREE.CapsuleGeometry(0.03, 0.13, 1);
  const resetMaterial = new THREE.MeshPhongMaterial({
    color: 0xff0000,
  });

  const resetOne = new THREE.Mesh(resetGeometry, resetMaterial);
  resetOne.position.set(-0.2, 0.15, 0.8);
  resetOne.rotation.set(1.2, 0.2, 1);

  const resetTwo = new THREE.Mesh(resetGeometry, resetMaterial);
  resetTwo.position.set(-0, 0.15, 0.8);
  resetTwo.rotation.set(1.2, 0.2, 1);

  reset.add(resetOne);
  reset.add(resetTwo);

  scene.add(box);
  scene.add(panel);
  scene.add(btn);
  scene.add(crossBtn);
  scene.add(reset);

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
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
