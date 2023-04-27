import * as THREE from "three";
import ground from "./ground.js";
import { cloudGrp } from "./cloud.js";

const printIsland = () => {
  const island = new THREE.Group();

  island.add(ground);
  island.add(cloudGrp);

  return island;
};

export default printIsland();
