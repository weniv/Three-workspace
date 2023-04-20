import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import WebGL from "./WebGL.js";
import mandarinMesh from "./js/mandarin.js";
import mountainMesh from "./js/mountain.js";

if (WebGL.isWebGLAvailable()) {
  const main = () => {
    const canvas = document.querySelector("#canvas");
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

    const makeScene = (elem) => {
      const scene = new THREE.Scene();
      const aspect = canvas.clientWidth / canvas.clientHeight;
      const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
      camera.position.set(0, 1, 2);
      //   camera.position.set(1.3, 1.8, 0.5);
      camera.lookAt(0, 0, 0);

      {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        const pointLight = new THREE.PointLight(0xffffff, 0.5);
        pointLight.position.set(0, 3, 0);
        pointLight.castShadow = true;
        scene.add(ambientLight);
        scene.add(pointLight);
      }

      return { scene, camera, elem };
    };

    const printMandarin = () => {
      const obj = makeScene(document.querySelector("#mandarin"));
      obj.scene.add(mandarinMesh);
      obj.mesh = mandarinMesh;
      return obj;
    };

    const printMountain = () => {
      const obj = makeScene(document.querySelector("#mountain"));
      obj.scene.add(mountainMesh);
      obj.mesh = mountainMesh;
      return obj;
    };

    const mandarin = printMandarin();
    const mountain = printMountain();

    // 반응형 처리
    const onWindowResize = (renderer, sceneInfo) => {
      const canvas = renderer.domElement;
      let camera;
      for (const info in sceneInfo) {
        camera = sceneInfo[info].camera;
      }
      camera.aspect = canvas.innerWidth / canvas.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    };

    renderer.domElement.addEventListener("resize", onWindowResize);

    const renderSceneInfo = (sceneInfo) => {
      const { scene, camera, elem } = sceneInfo;

      // get the viewport relative position of this element
      const { left, right, top, bottom, width, height } =
        elem.getBoundingClientRect();

      const isOffscreen =
        bottom < 0 ||
        top > renderer.domElement.clientHeight ||
        right < 0 ||
        left > renderer.domElement.clientWidth;

      if (isOffscreen) {
        return;
      }

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      const positiveYUpBottom = renderer.domElement.clientHeight - bottom;
      renderer.setScissor(left, positiveYUpBottom, width, height);
      renderer.setViewport(left, positiveYUpBottom, width, height);

      renderer.render(scene, camera);
    };

    const animate = (sceneInfo) => {
      requestAnimationFrame(animate);
    };
    animate();

    function render(time) {
      time *= 0.001;

      const obj = { mandarin, mountain };

      onWindowResize(renderer, obj);

      renderer.setScissorTest(false);
      renderer.clear(true, true);
      renderer.setScissorTest(true);

      mandarin.mesh.rotation.y = time * 0.1;
      mountain.mesh.rotation.y = time * 0.1;

      renderSceneInfo(mandarin);
      renderSceneInfo(mountain);

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  };

  main();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}