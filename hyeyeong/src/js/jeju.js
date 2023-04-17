import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
// https://66651.tistory.com/416?category=473767
// https://webdoli.tistory.com/46
// https://gero3.github.io/facetype.js/

const printJeju = () => {
  const text = new THREE.Group();
  const fontLoader = new FontLoader();
  const textureLoader = new THREE.TextureLoader();

  fontLoader.load("../src/static/font/font.json", (font) => {
    const geometry = new TextGeometry("HELLO JEJU", {
      font: font,
      size: 5,
      height: 1.5,
      curveSegments: 3,
      bevelEnabled: true,
      bevelThickness: 0.7,
      bevelSize: 0.7,
      bevelSegments: 2,
    });

    console.log(typeof fontLoader.load);

    const ballg = new THREE.SphereGeometry(1, 32, 16);

    // texture: 돌 혹은 풀 질감 추가하고싶음
    const textureBaseColor = textureLoader.load(
      "../src/static/img/Hedge_BaseColor.jpg"
    );
    const textureHeightMap = textureLoader.load(
      "../src/static/img/Hedge_Height.png"
    );
    const textureRoughnessMap = textureLoader.load(
      "../src/static/img/Hedge_Roughness.jpg"
    );

    const meterial = new THREE.MeshStandardMaterial({
      color: 0x609966,
      //   map: textureBaseColor,
      //   displacementMap: textureHeightMap,
      //   displacementScale: 0.1,
      //   roughnessMap: textureRoughnessMap,
    });
    const wrap = new THREE.Mesh(geometry, meterial);
    const box = new THREE.Mesh(ballg, meterial);
    wrap.position.set(-15, -5, 0);
    wrap.rotation.set(-1, 0, 0);

    text.add(wrap);
  });

  return text;
};

export default printJeju();
