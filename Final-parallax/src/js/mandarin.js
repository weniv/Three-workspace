import * as THREE from "three";

const printMandarin = () => {
  const mandarin = new THREE.Group();
  const leafs = new THREE.Group();

  const loader = new THREE.TextureLoader();
  const circleGeometry = new THREE.TetrahedronGeometry(1, 4);
  const circleMaterial = new THREE.MeshStandardMaterial({
    color: 0xffb84c,
  });

  const circleGeometry2 = new THREE.TetrahedronGeometry(0.5, 4);

  const topGeometry = new THREE.TetrahedronGeometry(0.08, 4);
  const topMaterial = new THREE.MeshStandardMaterial({ color: 0x609966 });

  const leafGeometry = new THREE.SphereGeometry(0.15, 32, 16, 0.5, 1.5);
  const leafMaterial = new THREE.MeshBasicMaterial({
    color: 0x609966,
    side: THREE.DoubleSide,
  });

  // Mesh 병합
  const circle1 = new THREE.Mesh(circleGeometry, circleMaterial);
  const circle2 = new THREE.Mesh(circleGeometry2, circleMaterial);
  circle2.position.set(0, 0.7, 0);

  const top = new THREE.Mesh(topGeometry, topMaterial);
  const leaf = new THREE.Mesh(leafGeometry, leafMaterial);

  top.position.set(0, 0.95, 0);
  leaf.position.set(0, 1, -0.13);
  leaf.rotation.set(-1.2, 0, 0);

  leafs.add(top);
  leafs.add(leaf);
  mandarin.add(circle1);
  mandarin.add(circle2);
  mandarin.add(leafs);

  leafs.position.set(0, 0.22, 0);

  // shadow 관련
  top.castShadow = true;
  leaf.castShadow = true;
  circle1.castShadow = true;
  circle2.castShadow = true;
  circle1.receiveShadow = true;
  circle2.receiveShadow = true;

  return mandarin;
};

export default printMandarin();
