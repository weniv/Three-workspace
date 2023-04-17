import * as THREE from "three";

const notion = () => {
  const wrap = new THREE.Group();
  const loader = new THREE.TextureLoader();
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const planeGeometry = new THREE.PlaneGeometry(20, 20);

  // texture
  const baseColor = loader.load("../src/static/img/Hedge_BaseColor.jpg");
  const nomalMap = loader.load("../src/static/img/Hedge_Normal.jpg");
  const heightMap = loader.load("../src/static/img/Hedge_Height.png");
  const roughnessMap = loader.load("../src/static/img/Hedge_Roughness.jpg");

  const material = new THREE.MeshStandardMaterial({
    color: 0xffb4b4,
    // map: baseColor,
    // normalMap: nomalMap,
    // displacementMap: heightMap,
    // displacementScale: 0, // default: 1
    // roughnessMap: roughnessMap,
    // roughness: 0.5,
  });

  const planeMaterial = new THREE.MeshStandardMaterial({
    color: 0xb0daff,
  });

  const box = new THREE.Mesh(geometry, material);
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  const axesHelper = new THREE.AxesHelper();
  axesHelper.scale.set(3, 3, 3);
  box.rotation.set(0, 0, 1);
  plane.position.set(0, 0, -0.5);
  // box.scale.set(4, 1, 0.5);v
  wrap.add(axesHelper);

  box.castShadow = true; // 그림자를 발생시킬 물체
  plane.receiveShadow = true; // 그림자가 드리울 물체

  wrap.add(box);
  wrap.add(plane);
  wrap.rotation.set(-1, 0, 0);

  return wrap;
};

export default notion();
