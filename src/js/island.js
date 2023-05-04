import * as THREE from "three";
import ground from "./ground.js";
import { cloudGrp } from "./cloud.js";
import { dolhareubangGrp } from "./stone.js";
import { house } from "./lightmode.js";
import text from "./jeju.js";
import tree from "./tree.js";
import mandarin from "./mandarin.js";
import mountain from "./mountain.js";

const printIsland = () => {
  const island = new THREE.Group();

  let mandarinCloneOne = mandarin.clone();
  let mandarinCloneTwo = mandarin.clone();
  let mountainClone = mountain.clone();
  let dolhareubangClone = dolhareubangGrp.clone();
  let treeCloneOne = tree.clone();
  let treeCloneTwo = tree.clone();

  island.add(text);
  island.add(treeCloneOne);
  island.add(treeCloneTwo);
  island.add(house);
  island.add(mandarinCloneOne);
  island.add(mandarinCloneTwo);
  island.add(mountainClone);
  island.add(cloudGrp);
  island.add(ground);
  island.add(dolhareubangClone);

  // 집
  house.rotation.set(0, -2.5, 0);
  house.scale.set(1.4, 1.4, 1.4);
  house.position.set(-8, 1.2, 2);

  // 한라산
  mountainClone.scale.set(3, 3, 3);
  mountainClone.position.set(1, 3, -2);

  // 돌하르방
  dolhareubangClone.scale.set(0.35, 0.35, 0.35);
  dolhareubangClone.position.set(4, 1, 4);

  //  나무
  treeCloneOne.scale.set(0.45, 0.5, 0.5);
  treeCloneOne.rotation.set(0, 3.3, 0);
  treeCloneOne.position.set(9, 0.5, 3);

  treeCloneTwo.scale.set(0.45, 0.6, 0.5);
  treeCloneTwo.rotation.set(0, 3.3, 0);
  treeCloneTwo.position.set(10, 0.5, 6);

  // 한라봉
  mandarinCloneOne.scale.set(0.4, 0.45, 0.45);
  mandarinCloneOne.position.set(-10, 0.8, 6);

  mandarinCloneTwo.scale.set(0.4, 0.45, 0.45);
  mandarinCloneTwo.position.set(-8.5, 0.8, 7);

  //   글자
  text.scale.set(0.2, 0.2, 0.2);
  text.rotation.set(1, 0, 0);
  text.position.set(-0.5, 1.3, 9);

  // 전체 섬 조작
  island.rotation.set(-0.2, 0, 0);

  return island;
};

export default printIsland();
