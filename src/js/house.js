import * as THREE from "three";
import { CSG } from "../three-csg.js";

const printHouse = () => {
  const house = new THREE.Group();
  const wall = new THREE.Group();
  const loader = new THREE.TextureLoader();
  // texure
  const wallBase = loader.load("../src/static/img/Concrete_014_4K_COLOR.jpg");
  const roofBase = loader.load(
    "../src/static/img/Thatched_Roof_001_basecolor.jpg"
  );
  // 집 몸통
  const boxGeometry = new THREE.BoxGeometry(2.8, 1.5, 2.8);
  const boxMaterial = new THREE.MeshStandardMaterial({ color: 0xf9f5eb });
  const box = new THREE.Mesh(boxGeometry, boxMaterial);
  // 지붕
  const roofGeometry = new THREE.ConeGeometry(2.2, 0.8, 4);
  const roofMaterial = new THREE.MeshStandardMaterial({
    color: 0xf9f5eb,
    map: roofBase,
  });
  const roof = new THREE.Mesh(roofGeometry, roofMaterial);
  roof.rotation.set(0, 0.79, 0);
  roof.position.set(0, 1.15, 0);
  // 대문 doorSubtract
  const doorSubtractGeometry = new THREE.BoxGeometry(1.5, 1.3, 5);
  const doorGeometry = new THREE.BoxGeometry(1.5, 1.4, 0.01);
  const doorSubtractMaterial = new THREE.MeshStandardMaterial({
    map: wallBase,
  });
  const doorMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.1,
    roughness: 0.05,
    ior: 2.5,
    thickness: 0.2,
    transmission: 1,
    side: THREE.DoubleSide,
  });

  const doorSubtract = new THREE.Mesh(
    doorSubtractGeometry,
    doorSubtractMaterial
  );
  doorSubtract.position.set(0, -0.05, -1.38);
  // 대문
  const door = new THREE.Mesh(doorGeometry, doorMaterial);
  door.position.set(0, -0.05, -1.38);

  // 물막이 Canopy
  const canopyGeometry = new THREE.BoxGeometry(1.75, 0.6, 0.05);
  const canopyMaterial = new THREE.MeshStandardMaterial({ color: 0xffacac });
  const canopy = new THREE.Mesh(canopyGeometry, canopyMaterial);
  canopy.position.set(-0.13, 0.65, -1.5);
  canopy.rotation.set(1.2, 0, 0);
  // 앨범
  const frameGeometry = new THREE.BoxGeometry(0.2, 0.3, 0.05);
  const frameMaterial = new THREE.MeshStandardMaterial({ color: 0x7c9070 });
  const frame = new THREE.Mesh(frameGeometry, frameMaterial);
  frame.position.set(1, 0.2, -1.4);
  // 초인종
  const bellGeometry = new THREE.BoxGeometry(0.08, 0.1, 0.05);
  const bellMaterial = new THREE.MeshStandardMaterial({
    color: 0xffdd83,
  });
  const bell = new THREE.Mesh(bellGeometry, bellMaterial);
  bell.position.set(1, 0.5, -1.4);

  // ✨담장 텍스처
  const baseColor = loader.load("./src/static/img/Stone_Wall_008_COLOR.jpg");
  const longWallMaterial = [
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: baseColor,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: baseColor,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: baseColor,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: baseColor,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: baseColor,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: baseColor,
    }),
  ];

  const shortWallMaterial = [
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: baseColor,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: baseColor,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: baseColor,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: baseColor,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: baseColor,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: baseColor,
    }),
  ];

  const shortFrontWallMaterial = [
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: baseColor,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: baseColor,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: baseColor,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: baseColor,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: baseColor,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: baseColor,
    }),
  ];

  // ✨담장 Geometry
  const wall_frontGeometry = new THREE.BoxGeometry(1.6, 0.5, 0.3); // 정면
  const wall_rightGeometry = new THREE.BoxGeometry(3.9, 0.5, 0.3); // 오른쪽
  const wall_backGeometry = new THREE.BoxGeometry(3.7, 0.5, 0.3); // 뒤쪽
  const wall_leftGeometry = new THREE.BoxGeometry(3.7, 0.5, 0.3); // 왼쪽
  const wall_front_leftGeometry = new THREE.BoxGeometry(1, 0.5, 0.3); // 정면 왼쪽

  // ✨담장 Mesh
  const wall_front = new THREE.Mesh(wall_frontGeometry, shortWallMaterial);
  const wall_right = new THREE.Mesh(wall_rightGeometry, longWallMaterial);
  const wall_back = new THREE.Mesh(wall_backGeometry, longWallMaterial);
  const wall_left = new THREE.Mesh(wall_leftGeometry, longWallMaterial);
  const wall_front_left = new THREE.Mesh(
    wall_front_leftGeometry,
    shortFrontWallMaterial
  );

  // texture 반복 설정
  for (let i = 0; i < 6; i++) {
    shortFrontWallMaterial[i].map.wrapT = THREE.RepeatWrapping;
    shortFrontWallMaterial[i].map.wrapS = THREE.RepeatWrapping;
    shortWallMaterial[i].map.wrapT = THREE.RepeatWrapping;
    shortWallMaterial[i].map.wrapS = THREE.RepeatWrapping;
    longWallMaterial[i].map.wrapT = THREE.RepeatWrapping;
    longWallMaterial[i].map.wrapS = THREE.RepeatWrapping;
  }
  // shortFrontWallMaterial 크기 설정
  shortFrontWallMaterial[2].map.repeat.set(3, 1);
  shortFrontWallMaterial[3].map.repeat.set(3, 1);
  shortFrontWallMaterial[4].map.repeat.set(3, 1);
  shortFrontWallMaterial[5].map.repeat.set(3, 1);
  // shortWallMaterial 크기 설정
  shortWallMaterial[2].map.repeat.set(5, 1);
  shortWallMaterial[3].map.repeat.set(5, 1);
  shortWallMaterial[4].map.repeat.set(5, 1);
  shortWallMaterial[5].map.repeat.set(5, 1);
  // longWallMaterial 크기 설정
  longWallMaterial[2].map.repeat.set(10, 1);
  longWallMaterial[3].map.repeat.set(10, 1);
  longWallMaterial[4].map.repeat.set(10, 1);
  longWallMaterial[5].map.repeat.set(10, 1);

  // ✨담장 위치
  wall_front.position.set(-1, -0.4, -2);
  wall_right.rotation.set(0, 1.58, 0);
  wall_right.position.set(-1.8, -0.4, -0.2);
  wall_back.position.set(-0.08, -0.4, 1.7);
  wall_left.rotation.set(0, 1.58, 0);
  wall_left.position.set(1.8, -0.4, 0);
  wall_front_left.position.set(1.43, -0.4, -2);

  wall.add(wall_front);
  wall.add(wall_right);
  wall.add(wall_back);
  wall.add(wall_left);
  wall.add(wall_front_left);
  wall.position.set(0, 0, 0.15);
  house.add(roof);
  house.add(door);
  // house.add(canopy);
  house.add(frame);
  house.add(bell);
  house.add(wall);

  box.updateMatrix();
  doorSubtract.updateMatrix();

  let bspBox = CSG.fromMesh(box);
  let bspDoor = CSG.fromMesh(doorSubtract);

  let bspResult = bspBox.subtract(bspDoor);

  let meshResult = CSG.toMesh(bspResult, box.matrix, doorSubtract.material);

  house.add(meshResult);

  return house;
};

const light = new THREE.PointLight(0xffffff);
light.position.set(0, 0, 0);
light.castShadow = true;

// 조명
const lightOn = (house) => {
  house.add(light);
};

const lightOff = (house) => {
  house.remove(light);
};

export { lightOn, lightOff, printHouse };
