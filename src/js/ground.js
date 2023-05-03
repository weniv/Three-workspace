import * as THREE from "three";

const printGround = () => {
  // 땅
  const ground = new THREE.Group();
  const plantMateiral = new THREE.MeshStandardMaterial({
    color: 0x6CA06E,
    side: THREE.DoubleSide,
  })
  const soilMaterial = new THREE.MeshStandardMaterial({
    color: 0xDEB887
  })
  const plantGeometry = new THREE.CylinderGeometry(9, 9, 0.5, 9);
  const plant = new THREE.Mesh(plantGeometry, plantMateiral);
  plant.scale.x = 2;
  plant.castShadow = true;
  plant.receiveShadow = true;
  ground.add(plant);

  const soilGeometry = new THREE.ConeGeometry(9, 10, 9)
  const soil = new THREE.Mesh(soilGeometry, soilMaterial);
  soil.rotation.z = Math.PI;
  soil.scale.x = 2;
  soil.position.y = -5.2;
  ground.add(soil);

  return ground;
};

export default printGround();