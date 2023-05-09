import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";

const printMandarin = () => {
  const mandarin = new THREE.Group();
  const leafs = new THREE.Group();

  // texture
  const loader = new THREE.TextureLoader();
  const baseColor = loader.load("./src/static/img/orange_basecolor.jpg");
  const rough = loader.load("./src/static/img/orange_rough.jpg");

  baseColor.wrapS = THREE.RepeatWrapping;
  baseColor.wrapT = THREE.RepeatWrapping;
  baseColor.repeat.set(5, 5);
  // circle
  const circleGeometry = new THREE.IcosahedronGeometry(1, 2);
  const circleGeometry2 = new THREE.IcosahedronGeometry(0.5, 2);
  circleGeometry2.translate(0, 0.7, 0);

  const circleGeometries = [circleGeometry, circleGeometry2];
  const mergedGeometrie = mergeGeometries(circleGeometries);
  const circleMaterial = new THREE.MeshStandardMaterial({
    // color: 0xffb84c,
    map: baseColor,
    roughnessMap: rough,
    roughness: 0.5,
  });

  const mergeCircle = new THREE.Mesh(mergedGeometrie, circleMaterial);

  // leaf
  const topGeometry = new THREE.TetrahedronGeometry(0.08, 4);
  const topMaterial = new THREE.MeshStandardMaterial({ color: 0x609966 });
  const leafGeometry = new THREE.SphereGeometry(0.15, 32, 16, 0.5, 1.5);
  const leafMaterial = new THREE.MeshBasicMaterial({
    color: 0x609966,
    side: THREE.DoubleSide,
  });
  const top = new THREE.Mesh(topGeometry, topMaterial);
  const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
  top.position.set(0, 0.95, 0);
  leaf.position.set(0, 1, -0.13);
  leaf.rotation.set(-1.2, 0, 0);

  leafs.add(top);
  leafs.add(leaf);
  mandarin.add(mergeCircle);
  mandarin.add(leafs);
  leafs.position.set(0, 0.22, 0);

  // shadow 관련
  top.castShadow = true;
  leaf.castShadow = true;
  mergeCircle.castShadow = true;
  mergeCircle.receiveShadow = true;
  mandarin.castShadow = true;
  mandarin.receiveShadow = true;

  return mandarin;
};

export default printMandarin();
