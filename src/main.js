import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import WebGL from "./WebGL.js";
import islandMesh from "./js/island.js";
import mandarinMesh from "./js/mandarin.js";
import mountainMesh from "./js/mountain.js";
import { handleMove } from "./js/cloud.js";
import { dolhareubangGrp, handleGreeting, handleEyeMove } from "./js/stone.js";

if (WebGL.isWebGLAvailable()) {
  // color
  const white = 0xffffff;
  const main = () => {
    const canvas = document.querySelector("#canvas");
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.shadowMap.enabled = true;

    const makeScene = (elem) => {
      const scene = new THREE.Scene();
      const aspect = canvas.clientWidth / canvas.clientHeight;
      const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
      camera.position.set(0, 1, 2);
      camera.lookAt(0, 0, 0);

      {
        const ambientLight = new THREE.AmbientLight(white, 0.5);
        const pointLight = new THREE.PointLight(white, 0.5);

        pointLight.position.set(0, 3, 0);
        pointLight.castShadow = true;
        pointLight.shadow.mapSize.width = 1024;
        pointLight.shadow.mapSize.height = 1024;
        scene.add(ambientLight);
        scene.add(pointLight);
      }

      // OrbitControls => ⚠️현재 모든 요소가 같이 조작됨
      // const controls = new OrbitControls(camera, renderer.domElement);
      // controls.minDistance = 1.3;
      // controls.maxDistance = 5;
      // scene.add(controls);

      return { scene, camera, elem };
    };

    const printIsland = () => {
      const obj = makeScene(document.querySelector("#island"));
      obj.scene.add(islandMesh);
      obj.mesh = islandMesh;
      return obj;
    };

    const printMandarinOne = () => {
      const obj = makeScene(document.querySelector(".mandarin_one"));
      const madarinClone = mandarinMesh.clone();
      obj.scene.add(madarinClone);
      obj.mesh = madarinClone;
      return obj;
    };

    const printMandarinTwo = () => {
      const obj = makeScene(document.querySelector(".mandarin_two"));
      const madarinClone = mandarinMesh.clone();
      obj.scene.add(madarinClone);
      obj.mesh = madarinClone;
      return obj;
    };

    const printMountainOne = () => {
      const obj = makeScene(document.querySelector(".mountain_one"));
      const mountainClone = mountainMesh.clone();
      obj.scene.add(mountainClone);
      obj.mesh = mountainClone;
      return obj;
    };

    const printMountainTwo = () => {
      const obj = makeScene(document.querySelector(".mountain_two"));
      const mountainClone = mountainMesh.clone();
      obj.scene.add(mountainClone);
      obj.mesh = mountainClone;
      return obj;
    };

    const printStoneOne = () => {
      const obj = makeScene(document.querySelector(".stone_one"));
      const stoneClone = dolhareubangGrp.clone();
      obj.scene.add(stoneClone);
      obj.mesh = stoneClone;
      return obj;
    };

    const printStoneTwo = () => {
      const obj = makeScene(document.querySelector(".stone_two"));
      const stoneClone = dolhareubangGrp.clone();
      obj.scene.add(stoneClone);
      obj.mesh = stoneClone;
      return obj;
    };

    const island = printIsland();
    const mountain_one = printMountainOne();
    const mountain_two = printMountainTwo();
    const mandarin_one = printMandarinOne();
    const mandarin_two = printMandarinTwo();
    const stone_one = printStoneOne();
    const stone_two = printStoneTwo();

    const islandPosition = () => {
      if (matchMedia("screen and (950px <= width <= 1600px)").matches) {
        island.mesh.position.set(0, -8, -18);
      } else if (matchMedia("screen and (max-width: 950px)").matches) {
        island.mesh.position.set(0, -8, -22);
      } else {
        island.mesh.position.set(0, -8, -15);
      }
    };

    // 반응형 처리
    const onWindowResize = (renderer, sceneInfo) => {
      const canvas = renderer.domElement;
      islandPosition();
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

    let time = 0;
    const animate = () => {
      time += 0.01;
      handleMove(time);
      handleGreeting(time);
      requestAnimationFrame(animate);
      document.body.addEventListener("mousemove", (e) => {
        handleEyeMove(e);
      });
    };
    animate();

    const render = (time) => {
      time *= 0.001;

      const obj = { island, mandarin_two, mountain_two };

      onWindowResize(renderer, obj);

      renderer.setScissorTest(false);
      renderer.clear(true, true);
      renderer.setScissorTest(true);

      // 오브젝트 조작
      mandarin_one.mesh.position.set(0, -0.1, 0.1);
      mountain_one.mesh.position.set(0, 0, -1.2);
      mountain_one.mesh.rotation.set(0.2, 0, 0);
      stone_one.mesh.position.set(0, -5, -6);

      mountain_two.mesh.position.set(0, 0.2, -1);
      mountain_two.mesh.rotation.set(0.2, 0, 0);
      stone_two.mesh.position.set(0, -4.5, -5);
      stone_two.mesh.rotation.set(0, 0, 0);
      mandarin_two.mesh.position.set(0, -0.2, 0);

      // 애니메이션
      mandarin_two.mesh.rotation.y = time * 0.1;
      mountain_two.mesh.rotation.y = time * 0.1;

      renderSceneInfo(island);
      renderSceneInfo(mountain_one);
      renderSceneInfo(mountain_two);
      renderSceneInfo(mandarin_one);
      renderSceneInfo(mandarin_two);
      renderSceneInfo(stone_one);
      renderSceneInfo(stone_two);

      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
  };

  main();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}
