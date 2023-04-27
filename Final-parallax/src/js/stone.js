import * as THREE from "three";

const loader = new THREE.TextureLoader();
const dolhareubangGrp = new THREE.Group();

// Material
const stoneMaterial = new THREE.MeshStandardMaterial({
  //   color: 0xaaaaaa,
  map: loader.load("./src/static/img/rock_basecolor.jpg"),
  normalMap: loader.load("./src/static/img/rock_normal.jpg"),
  roughnessMap: loader.load("./src/static/img/rock_roughness.jpg"),
  side: THREE.DoubleSide,
  transparent: true,
});

// 머리
const head = new THREE.Group();
const faceGeometry = new THREE.CylinderGeometry(2, 3, 6, 4, 1);
const face = new THREE.Mesh(faceGeometry, stoneMaterial);
face.rotation.y = Math.PI / 4;
face.position.set(0, 5.5, 0);
face.castShadow = true;
face.recieveShadow = true;

const hatGeometry = new THREE.BoxGeometry(4, 0.5, 4);
const hat = new THREE.Mesh(hatGeometry, stoneMaterial);
hat.position.y = 7;
hat.castShadow = true;
hat.recieveShadow = true;

head.add(face);
head.add(hat);
dolhareubangGrp.add(head);

// 몸통
const bodyGeometry = new THREE.CylinderGeometry(3, 4, 5, 4);
const body = new THREE.Mesh(bodyGeometry, stoneMaterial);
body.rotation.y = Math.PI / 4;
body.castShadow = true;
body.receiveShadow = true;
dolhareubangGrp.add(body);

// 팔
const armGeometry = new THREE.CylinderGeometry(1, 1, 7, 6, 1);
const armLeft = new THREE.Mesh(armGeometry, stoneMaterial);
armLeft.position.set(-2, 3.5, 0);
armLeft.rotation.z = 10.5;
armLeft.castShadow = true;
armLeft.receiveShadow = true;

const armRight = new THREE.Mesh(armGeometry, stoneMaterial);
armRight.position.set(2, 3.5, 0);
armRight.rotation.z = -10.5;
armRight.castShadow = true;
armRight.receiveShadow = true;

dolhareubangGrp.add(armLeft);
dolhareubangGrp.add(armRight);

// 눈
const eyes = new THREE.Group();

const eyeGeometry = new THREE.CapsuleGeometry(0.6, 0.4, 64, 64);
const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
const eyeLeft = new THREE.Mesh(eyeGeometry, eyeMaterial);
eyeLeft.position.set(0.5, 5.5, 1.5);
const eyeRight = new THREE.Mesh(eyeGeometry, eyeMaterial);
eyeRight.position.set(-0.5, 5.5, 1.5);
eyes.add(eyeLeft);
eyes.add(eyeRight);
dolhareubangGrp.add(eyes);

const pupils = new THREE.Group();
const pupilGeometry = new THREE.SphereGeometry(0.2);
const pupilMaterial = new THREE.MeshStandardMaterial({ color: 0x00000 });
const pupilLeft = new THREE.Mesh(pupilGeometry, pupilMaterial);
pupilLeft.position.set(0.5, 5.5, 2);
pupils.add(pupilLeft);
const pupilRight = new THREE.Mesh(pupilGeometry, pupilMaterial);
pupilRight.position.set(-0.5, 5.5, 2);
pupils.add(pupilRight);

const noseGeometry = new THREE.CylinderGeometry(0.1, 0.5, 1, 6);
const nose = new THREE.Mesh(noseGeometry, stoneMaterial);
nose.position.set(0, 5, 2);
nose.rotation.y = Math.PI / 4;
nose.castShadow = true;
dolhareubangGrp.add(nose);
dolhareubangGrp.add(pupils);

dolhareubangGrp.scale.set(0.7, 0.7, 0.7);
dolhareubangGrp.position.set(5, 2, -2);

const handleGreeting = (time) => {
  // console.log(Math.cos(time))
  // -1보다 크고, 1보다 작은 값이 찍힘
  armLeft.rotation.z -= 0.02 * Math.cos(time * 3);
  armLeft.position.y += 0.01 * Math.cos(time * 3);
  armRight.rotation.z += 0.02 * Math.cos(time * 3);
  armRight.position.y += 0.01 * Math.cos(time * 3);
};

const handleEyeMove = (e) => {
  const mouseX = e.clientX - window.innerWidth / 2;
  const mouseY = e.clientY - window.innerHeight / 2;
  pupilLeft.position.x = mouseX * 0.0005 + 0.5;
  pupilLeft.position.y = mouseY * -0.0005 + 5.5;
  pupilRight.position.x = mouseX * 0.0005 - 0.5;
  pupilRight.position.y = mouseY * -0.0005 + 5.5;
};

export { dolhareubangGrp, handleGreeting, handleEyeMove };
