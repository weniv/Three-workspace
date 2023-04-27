import * as THREE from "three";

// 땅
const ground = new THREE.Group();
const islandGrp = new THREE.Group();
const plantMateiral = new THREE.MeshStandardMaterial({
  color: 0x52672a,
  side: THREE.DoubleSide,
});

const plantGeometry = new THREE.DodecahedronGeometry(9.8, 2);
const plant = new THREE.Mesh(plantGeometry, plantMateiral);
plant.scale.set(1.8, 0.2, 1);
plant.castShadow = true;
plant.receiveShadow = true;

islandGrp.add(plant);

// 풀
const plantGrp = new THREE.Group();
const heartShape = new THREE.Shape();

heartShape.lineTo(8, 0);
heartShape.lineTo(6, 5);
heartShape.lineTo(5, 3);
heartShape.lineTo(4, 5);
heartShape.lineTo(3, 3);
heartShape.lineTo(2, 5);
heartShape.lineTo(0, 0);

const geometry = new THREE.ShapeGeometry(heartShape);
const plant01 = new THREE.Mesh(geometry, plantMateiral);
plant01.scale.set(0.9, 0.8);
plant01.position.set(3, 0, -4);
plantGrp.add(plant01);

const plant02 = new THREE.Mesh(geometry, plantMateiral);
plant02.scale.set(0.7, 0.7);
plant02.position.set(-10, -0, 4);
plantGrp.add(plant02);

const plant03 = new THREE.Mesh(geometry, plantMateiral);
plant03.scale.set(0.5, 0.5);
plant03.position.set(8, 1, -1);

plantGrp.add(plant03);

for (const plant of plantGrp.children) {
  plant.castShadow = true;
  plant.receiveShadow = true;
}

const axesHelper = new THREE.AxesHelper();
plant.add(axesHelper);

ground.add(islandGrp);
ground.add(plantGrp);
ground.position.set(0, -8, -15);

export default ground;
