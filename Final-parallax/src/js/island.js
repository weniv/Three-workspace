import * as THREE from "three";
import ground from "./ground.js";
import { cloudGrp } from "./cloud.js";
import { dolhareubangGrp } from "./stone.js";
import house from "./house.js";
import text from "./jeju.js";
import tree from "./tree.js";

const printIsland = () => {
  const island = new THREE.Group();

  island.add(text);
  island.add(tree);
  island.add(house);
  island.add(ground);
  island.add(cloudGrp);
  island.add(dolhareubangGrp);

  island.position.set(0, -8, -15);

  return island;
};

export default printIsland();
