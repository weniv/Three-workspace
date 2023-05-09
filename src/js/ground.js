import * as THREE from "three";

const printGround = () => {
  const loader = new THREE.TextureLoader();
  // texture
  const soilBase = loader.load("./src/static/img/Rock_045_BaseColor.jpg");
  const soilHeight = loader.load("./src/static/img/Rock_045_Height.png");
  const soilRough = loader.load("./src/static/img/Rock_045_Roughness.jpg");
  const grassBase = loader.load("./src/static/img/Grass_001_COLOR.jpg");
  const grassRough = loader.load("./src/static/img/Grass_001_ROUGH.jpg");

  const soilTextrue = [soilBase, soilHeight, soilRough];
  const grassTexture = [grassBase, grassRough];

  soilTextrue.forEach(
    (el) => (
      (el.wrapT = THREE.RepeatWrapping),
      (el.wrapS = THREE.RepeatWrapping),
      el.repeat.set(10, 2)
    )
  );

  grassTexture.map(
    (el) => (
      (el.wrapT = THREE.RepeatWrapping), (el.wrapS = THREE.RepeatWrapping)
    )
  );

  // 땅
  const ground = new THREE.Group();
  const plantMateiral = [
    new THREE.MeshStandardMaterial({
      map: grassBase,
      roughnessMap: grassRough,
      roughness: 1,
    }),
    new THREE.MeshStandardMaterial({
      map: grassBase,
      roughnessMap: grassRough,
      roughness: 1,
    }),
  ];

  plantMateiral[0].map.repeat.set(5, 5);
  plantMateiral[1].map.repeat.set(8, 1);

  const soilMaterial = new THREE.MeshStandardMaterial({
    map: soilBase,
    displacementMap: soilHeight,
    displacementScale: 0.01,
    roughnessMap: soilRough,
  });
  const plantGeometry = new THREE.CylinderGeometry(9, 9, 0.5, 9);

  const plant = new THREE.Mesh(plantGeometry, plantMateiral);
  plant.scale.x = 2;
  plant.receiveShadow = true;
  ground.add(plant);

  const soilGeometry = new THREE.ConeGeometry(9, 10, 9);
  const soil = new THREE.Mesh(soilGeometry, soilMaterial);
  soil.rotation.z = Math.PI;
  soil.scale.x = 2;
  soil.position.y = -5.2;
  ground.add(soil);

  return ground;
};

export default printGround();
