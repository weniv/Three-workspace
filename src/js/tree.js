import * as THREE from "three";

const printTree = () => {
  const tree = new THREE.Group();

  // 나무줄기
  const treeGeometry = new THREE.CylinderGeometry(0.85, 1, 1.5, 32);
  const treeMaterial = new THREE.MeshBasicMaterial({ color: 0xa38049 });

  const trunk = new THREE.Group();
  const trunk_1 = new THREE.Mesh(treeGeometry, treeMaterial);
  const trunk_2 = new THREE.Mesh(treeGeometry, treeMaterial);
  const trunk_3 = new THREE.Mesh(treeGeometry, treeMaterial);
  const trunk_4 = new THREE.Mesh(treeGeometry, treeMaterial);

  trunk_2.position.set(0.1, 1.4, 0);
  trunk_2.rotation.set(0, 0, -0.1);
  trunk_3.position.set(0.3, 2.8, 0);
  trunk_3.rotation.set(0, 0, -0.2);
  trunk_4.position.set(0.6, 4.2, 0);
  trunk_4.rotation.set(0, 0, -0.3);
  trunk.add(trunk_1);
  trunk.add(trunk_2);
  trunk.add(trunk_3);
  trunk.add(trunk_4);
  for (const mesh of trunk.children) {
    mesh.castShadow = true
  }


  // 잎
  const leafGeometry_1 = new THREE.SphereGeometry(2, 32, 16, Math.PI * 0.5, 1);
  const leafGeometry_2 = new THREE.SphereGeometry(2, 32, 16, Math.PI, 1);
  const leafGeometry_3 = new THREE.SphereGeometry(2, 32, 16, Math.PI * 1.5, 1);
  const leafGeometry_4 = new THREE.SphereGeometry(2, 32, 16, Math.PI * 2, 1);
  const leafMaterial = new THREE.MeshBasicMaterial({
    color: 0x6ca06e,
    side: THREE.DoubleSide,
  });
  const leaf_1 = new THREE.Mesh(leafGeometry_1, leafMaterial);
  const leaf_2 = new THREE.Mesh(leafGeometry_2, leafMaterial);
  const leaf_3 = new THREE.Mesh(leafGeometry_3, leafMaterial);
  const leaf_4 = new THREE.Mesh(leafGeometry_4, leafMaterial);

  leaf_1.rotation.set(-1, 0, 0);
  leaf_1.position.set(0.8, 3.6, 1.5);

  leaf_2.rotation.set(0.4, 0, 0.8);
  leaf_2.position.set(2, 3.2, -0.4);

  leaf_3.rotation.set(1, -0.4, 0);
  leaf_3.position.set(1.2, 3.4, -1.2);

  leaf_4.rotation.set(-0.5, 0, -1.2);
  leaf_4.position.set(-0.5, 3.6, 0);
  const leaf = new THREE.Group();
  leaf.add(leaf_1);
  leaf.add(leaf_2);
  leaf.add(leaf_3);
  leaf.add(leaf_4);
  for (const mesh of leaf.children) {
    mesh.castShadow = true
  }

  tree.add(trunk);
  tree.add(leaf);

  leaf.rotation.set(0, 0, -0.3);
  leaf.position.set(-1.4, 0.5, 0);
  tree.position.y = -3;



  return tree;
};

export default printTree();
