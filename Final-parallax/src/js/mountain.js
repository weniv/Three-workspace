import * as THREE from "../../node_modules/three/build/three.module.js";

const printMoutain = () => {
  // 텍스쳐 추가
  const loader = new THREE.TextureLoader();

  const meterials = [
    // 옆면
    new THREE.MeshBasicMaterial({
      color: 0x609966,
      // map: loader.load("../src/static/img/mountain.jpg"),
    }),
    //
    new THREE.MeshBasicMaterial({
      color: 0x609966,
      // map: loader.load("../src/static/img/mountain_top.jpg"),
    }),
    // 아랫면
    new THREE.MeshBasicMaterial({
      color: 0x609966,
    }),
  ];

  const geometry = new THREE.CylinderGeometry(0.6, 2, 2, 8);
  const moutain = new THREE.Mesh(geometry, meterials);

  return moutain;
};

export default printMoutain();
