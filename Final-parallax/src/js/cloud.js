import * as THREE from "three";

const cloudGrp = new THREE.Group();
const cloudMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  transparent: true,
  opacity: 0.8,
});

const cloudGeometry = new THREE.BoxGeometry(4, 2, 2);

const leftCloud = new THREE.Group();
const cloud1 = new THREE.Mesh(cloudGeometry, cloudMaterial);
leftCloud.add(cloud1);
const cloud2 = new THREE.Mesh(cloudGeometry, cloudMaterial);
cloud2.scale.set(1.5, 1.2, 1.2);
cloud2.position.set(-2, 1, -1);
leftCloud.add(cloud2);
leftCloud.position.set(-8, 8, 2);

const rightCloud = new THREE.Group();
const cloud3 = new THREE.Mesh(cloudGeometry, cloudMaterial);
rightCloud.add(cloud3);
rightCloud.position.set(8, 7, -3);

cloudGrp.add(leftCloud);
cloudGrp.add(rightCloud);

cloudGrp.position.set(0, -8, -18);

const handleMove = (time) => {
  leftCloud.position.x = -8 + Math.sin(time * 0.7);
  rightCloud.position.x = 8 + Math.sin(time * 0.2);
};

export { cloudGrp, handleMove };
