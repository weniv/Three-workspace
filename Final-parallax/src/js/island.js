import * as THREE from "three";
import ground from "./ground.js";

const printIsland = () => {
  const island = new THREE.Group();

  island.add(ground);

  return island;
};

export default printIsland();
