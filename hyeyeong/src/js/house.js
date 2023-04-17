import * as THREE from "three";
import * as BufferGeometryUtils from "../../vendor_mods/three/examples/jsm/BufferGeometryUtils.js";
// import { wall } from "./texture/houseTexture.js";

const printHouse = () => {
  const house = new THREE.Group();
  const wall = new THREE.Group();
  const loader = new THREE.TextureLoader();
  // 집 몸통
  const boxGeometry = new THREE.BoxGeometry(2.8, 1.5, 2.8);
  const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xf9f5eb });
  const box = new THREE.Mesh(boxGeometry, boxMaterial);
  // 지붕
  const roofGeometry = new THREE.ConeGeometry(2.2, 0.8, 4);
  const roofMaterial = new THREE.MeshBasicMaterial({
    color: 0xea5455,
    // map: loader.load("../src/static/img/roof_basecolor.jpg"),
  });
  const roof = new THREE.Mesh(roofGeometry, roofMaterial);
  roof.rotation.set(0, 0.79, 0);
  roof.position.set(0, 1.15, 0);
  // 대문
  const doorGeometry = new THREE.BoxGeometry(0.6, 1.4, 0.1);
  const doorMaterial = new THREE.MeshBasicMaterial({ color: 0xffdd83 });
  const door = new THREE.Mesh(doorGeometry, doorMaterial);
  door.position.set(0, -0.05, -1.38);
  // 큰 창문
  const windowBigGeometry = new THREE.BoxGeometry(0.7, 1.4, 0.1);
  const windowMaterial = new THREE.MeshBasicMaterial({ color: 0xc9eeff });
  const windowBig = new THREE.Mesh(windowBigGeometry, windowMaterial);
  windowBig.position.set(-0.655, -0.05, -1.38);
  // 작은 창문_오른쪽
  const windowsmallGeometry = new THREE.BoxGeometry(0.25, 1.4, 0.1);
  const windowSmall_right = new THREE.Mesh(windowsmallGeometry, windowMaterial);
  windowSmall_right.position.set(0.43, -0.05, -1.38);
  // 작은 창문_왼쪽
  const windowsmall_leftGeometry = new THREE.BoxGeometry(0.2, 1.4, 0.1);
  const windowSmall_left = new THREE.Mesh(
    windowsmall_leftGeometry,
    windowMaterial
  );
  windowSmall_left.position.set(0.65, -0.05, -1.38);
  // 물막이 Canopy
  const canopyGeometry = new THREE.BoxGeometry(1.75, 0.6, 0.05);
  const canopyMaterial = new THREE.MeshBasicMaterial({ color: 0xffacac });
  const canopy = new THREE.Mesh(canopyGeometry, canopyMaterial);
  canopy.position.set(-0.13, 0.65, -1.5);
  canopy.rotation.set(1.2, 0, 0);
  // 앨범
  const frameGeometry = new THREE.BoxGeometry(0.2, 0.3, 0.05);
  const frameMaterial = new THREE.MeshBasicMaterial({ color: 0xffacac });
  const frame = new THREE.Mesh(frameGeometry, frameMaterial);
  frame.position.set(1, 0.2, -1.4);
  // 초인종
  const bellGeometry = new THREE.BoxGeometry(0.08, 0.1, 0.05);
  const bellMaterial = new THREE.MeshBasicMaterial({
    color: 0xffdd83,
  });
  const bell = new THREE.Mesh(bellGeometry, bellMaterial);
  bell.position.set(1, 0.6, -1.4);

  // ✨담장 텍스처
  const longWallMaterial = [
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: loader.load("../src/static/img/Stone_Wall_008_COLOR.jpg"),
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: loader.load("../src/static/img/Stone_Wall_008_COLOR.jpg"),
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: loader.load("../src/static/img/Stone_Wall_008_COLOR.jpg"),
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: loader.load("../src/static/img/Stone_Wall_008_COLOR.jpg"),
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: loader.load("../src/static/img/Stone_Wall_008_COLOR.jpg"),
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: loader.load("../src/static/img/Stone_Wall_008_COLOR.jpg"),
    }),
  ];

  const shortWallMaterial = [
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: loader.load("../src/static/img/Stone_Wall_008_COLOR.jpg"),
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: loader.load("../src/static/img/Stone_Wall_008_COLOR.jpg"),
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: loader.load("../src/static/img/Stone_Wall_008_COLOR.jpg"),
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: loader.load("../src/static/img/Stone_Wall_008_COLOR.jpg"),
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: loader.load("../src/static/img/Stone_Wall_008_COLOR.jpg"),
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: loader.load("../src/static/img/Stone_Wall_008_COLOR.jpg"),
    }),
  ];

  const shortFrontWallMaterial = [
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: loader.load("../src/static/img/Stone_Wall_008_COLOR.jpg"),
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: loader.load("../src/static/img/Stone_Wall_008_COLOR.jpg"),
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: loader.load("../src/static/img/Stone_Wall_008_COLOR.jpg"),
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: loader.load("../src/static/img/Stone_Wall_008_COLOR.jpg"),
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: loader.load("../src/static/img/Stone_Wall_008_COLOR.jpg"),
    }),
    new THREE.MeshStandardMaterial({
      color: 0xa9907e,
      map: loader.load("../src/static/img/Stone_Wall_008_COLOR.jpg"),
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

  house.add(box);
  house.add(roof);
  house.add(door);
  house.add(windowBig);
  house.add(windowSmall_right);
  house.add(windowSmall_left);
  house.add(canopy);
  house.add(frame);
  house.add(bell);
  house.add(wall);

  return house;
};

export default printHouse();
