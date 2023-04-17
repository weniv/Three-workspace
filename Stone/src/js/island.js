import * as THREE from '../../node_modules/three/build/three.module.js'

// texture
const textureLoader = new THREE.TextureLoader();
const rockBase = textureLoader.load('../src/Rock_041/Rock_041_basecolor.jpg')
const rockHeight = textureLoader.load('../src/Rock_041/Rock_041_height.png')
const rockNormal = textureLoader.load('../src/Rock_041/Rock_041_normal.jpg')
const rockRoughness = textureLoader.load('../src/Rock_041/Rock_041_roughness.jpg')

// 땅
const islandGrp = new THREE.Group();
const plantMateiral  = new THREE.MeshStandardMaterial({
  color:0x52672A,
  side:THREE.DoubleSide,
})
const soilMaterial = new THREE.MeshStandardMaterial({
  color:0xDEB887
})

const baseGeometry = new THREE.IcosahedronGeometry(10);
const base = new THREE.Mesh(baseGeometry,soilMaterial);
// islandGrp.add(base);

// const plantGeometry = new THREE.CylinderGeometry(9.8,10,1,9);
const plantGeometry = new THREE.DodecahedronGeometry(9.8,2);
const plant = new THREE.Mesh(plantGeometry,plantMateiral);
plant.scale.set(1.8,0.2,1);
plant.castShadow= true;
plant.receiveShadow= true;

islandGrp.add(plant);


// 풀
const plantGrp=new THREE.Group();
const heartShape = new THREE.Shape();

heartShape.lineTo( 8,0 );
heartShape.lineTo( 6,5 );
heartShape.lineTo( 5,3 );
heartShape.lineTo( 4,5 );
heartShape.lineTo( 3,3 );
heartShape.lineTo( 2,5 );
heartShape.lineTo( 0,0 );

const geometry = new THREE.ShapeGeometry( heartShape );
const plant01 = new THREE.Mesh( geometry, plantMateiral ) ;
plant01.scale.set(0.9,0.8)
plant01.position.set(3,-5, -4);
plantGrp.add( plant01 );

const plant02 = new THREE.Mesh( geometry, plantMateiral ) ;
plant02.scale.set(0.7,0.7);
plant02.position.set(-10,-5, 4);
plantGrp.add( plant02 );

const plant03 = new THREE.Mesh( geometry, plantMateiral ) ;
plant03.scale.set(0.5,0.5);
plant03.position.set(8,-5, -1);
plantGrp.add( plant03 );

for (const plant of plantGrp.children) {
  plant.castShadow= true;
  plant.receiveShadow= true;
}
export {islandGrp, plantGrp}