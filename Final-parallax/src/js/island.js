import * as THREE from "three";
import ground from "./ground.js";
import { cloudGrp } from "./cloud.js";
import { dolhareubangGrp } from "./stone.js";
import house from "./house.js";

const printIsland = () => {
  const island = new THREE.Group();

  island.add(ground);
  island.add(house);
  island.add(cloudGrp);
  island.add(dolhareubangGrp);

  island.position.set(0, -8, -15);

  return island;
};

export default printIsland();