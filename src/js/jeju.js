import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

const printJeju = () => {
  const text = new THREE.Group();
  const fontLoader = new FontLoader();

  fontLoader.load("./src/static/font/font.json", (font) => {
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

    const meterial = new THREE.MeshStandardMaterial({
      color: 0x609966,
    });
    const wrap = new THREE.Mesh(geometry, meterial);
    wrap.position.set(-15, -5, 0);
    wrap.rotation.set(-1, 0, 0);

    text.add(wrap);

    // shadow
    // text.castShadow = true;
    // text.receiveShadow = true;
  });

  return text;
};

export default printJeju();
