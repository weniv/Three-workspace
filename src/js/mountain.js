import * as THREE from "three";

const printMoutain = () => {
  // 텍스쳐 추가
  const loader = new THREE.TextureLoader();

  const grassBase = loader.load("./src/static/img/Grass_001_COLOR.jpg");

  grassBase.wrapT = THREE.RepeatWrapping;
  grassBase.wrapS = THREE.RepeatWrapping;
  grassBase.repeat.set(5, 2);

  // const meterials = [
  //   new THREE.MeshStandardMaterial({
  //     map: grassBase,
  //   }),
  // ];

  const meterials = new THREE.MeshStandardMaterial({
    map: grassBase,
  });

  const geometry = new THREE.CylinderGeometry(0.6, 2, 2, 8);
  const moutain = new THREE.Mesh(geometry, meterials);

  return moutain;
};

export default printMoutain();
