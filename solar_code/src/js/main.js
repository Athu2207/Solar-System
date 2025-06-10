import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import * as dat from "dat.gui";
import { TextureLoader } from "three";



const stars = new URL("../img/universe.jpg", import.meta.url).href;
const sunimg=new URL("../img/sun.jpg", import.meta.url).href;
const mercury=new URL("../img/mercury.jpg", import.meta.url).href;
const venus=new URL("../img/venus.jpg", import.meta.url).href;
const earth=new URL("../img/earth.jpg", import.meta.url).href;
const mars=new URL("../img/mars.jpg", import.meta.url).href;
const jupiter=new URL("../img/jupiter.jpg", import.meta.url).href;
const saturn=new URL("../img/saturn.webp", import.meta.url).href;
const saturnring=new URL("../img/saturnring.jpeg", import.meta.url).href;
const uranus=new URL("../img/uranus.jpeg", import.meta.url).href;
const neptune=new URL("../img/uranus.jpeg", import.meta.url).href;
const moon=new URL("../img/moon.jpeg", import.meta.url).href;

const renderer=new THREE.WebGLRenderer();
renderer.physicallyCorrectLights = true;



renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)
renderer.shadowMap.enabled=true;
const scene=new THREE.Scene();
const gui=new dat.GUI();

const camera=new THREE.PerspectiveCamera(
    45,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
)


const orbit=new OrbitControls(camera,renderer.domElement);
const cubetexture=new THREE.CubeTextureLoader()
scene.background=cubetexture.load([
    stars,
    stars,
    stars,
    stars,
    stars,
    stars
])

camera.position.set(-90,180,180)
orbit.update()

const amblight=new THREE.AmbientLight(0xFFFFFF,0.2);
scene.add(amblight)


const textloader=new THREE.TextureLoader();

//sun
const sungeo=new THREE.SphereGeometry(40,30,30)
const sunplot= new THREE.MeshBasicMaterial({
    map:textloader.load(sunimg),
 
})
const sun=new THREE.Mesh(sungeo,sunplot)
scene.add(sun)

//mercury
const mercurygeo=new THREE.SphereGeometry(3,30,30)
const mercuryplot=new THREE.MeshStandardMaterial({
    map:textloader.load(mercury)
})

const mer=new THREE.Mesh(mercurygeo,mercuryplot)
const mercuryplanet=new THREE.Object3D()
mercuryplanet.add(mer)
scene.add(mercuryplanet)

mer.position.x=80

//venus
const venusgeo=new THREE.SphereGeometry(4,30,30)
const venusplot=new THREE.MeshStandardMaterial({
    map:textloader.load(venus)
})

const ven=new THREE.Mesh(venusgeo,venusplot)
const venusplanet=new THREE.Object3D();
venusplanet.add(ven)
scene.add(venusplanet)

ven.position.x=120

//earth
const earthgeo=new THREE.SphereGeometry(8,30,30)
const earthplot=new THREE.MeshStandardMaterial({
    map:textloader.load(earth)
})

const ear=new THREE.Mesh(earthgeo,earthplot)
const earthplanet=new THREE.Object3D();
earthplanet.add(ear)
scene.add(earthplanet)
ear.position.x=160


//moon
const moongeo=new THREE.SphereGeometry(2,30,30)
const moonplot=new THREE.MeshStandardMaterial({
    map:textloader.load(moon)
})

const mo=new THREE.Mesh(moongeo,moonplot)
const moonplanet=new THREE.Object3D()
moonplanet.add(mo)
earthplanet.add(moonplanet)
mo.position.x=190









//mars
const marsgeo=new THREE.SphereGeometry(8,30,30)
const marsplot=new THREE.MeshStandardMaterial({
    map:textloader.load(mars)
})

const mar=new THREE.Mesh(marsgeo,marsplot)
const marsplanet=new THREE.Object3D();
marsplanet.add(mar)
scene.add(marsplanet)

mar.position.x=210
mar.orbit=true

//jupiter
const jupitergeo=new THREE.SphereGeometry(12,30,30)
const jupiterplot=new THREE.MeshStandardMaterial({
    map:textloader.load(jupiter)
})

const jup=new THREE.Mesh(jupitergeo,jupiterplot)
const jupiterplanet=new THREE.Object3D()
jupiterplanet.add(jup)
scene.add(jupiterplanet)

jup.position.x=250

//saturn
const saturngeo=new THREE.SphereGeometry(7,30,30)
const saturnplot=new THREE.MeshStandardMaterial({
    map:textloader.load(saturn)
})

const sat=new THREE.Mesh(saturngeo,saturnplot)
const saturnplanet=new THREE.Object3D();
saturnplanet.add(sat)
scene.add(saturnplanet)

sat.position.x=330


//saturn ring
const satringgeo=new THREE.RingGeometry(15,20,64)
const satringplot=new THREE.MeshStandardMaterial({
    map:textloader.load(saturnring),
    color:0xFFFFFF,
    side:THREE.DoubleSide
})
const ring=new THREE.Mesh(satringgeo,satringplot)
const ringobj=new THREE.Object3D()
ringobj.add(ring)
sat.add(ringobj)
ring.rotation.x = -Math.PI / 2;


//uranus
const uranusgeo=new THREE.SphereGeometry(6,30,30)
const uranusplot=new THREE.MeshStandardMaterial({
    map:textloader.load(uranus)
})

const ura=new THREE.Mesh(uranusgeo,uranusplot)
const uranusplanet=new THREE.Object3D();
uranusplanet.add(ura)
scene.add(uranusplanet)

ura.position.x=380

//neptune
const neptunegeo=new THREE.SphereGeometry(8,30,30)
const neptuneplot=new THREE.MeshStandardMaterial({
    map:textloader.load(neptune)
})

const nep=new THREE.Mesh(neptunegeo,neptuneplot)
const neptuneplanet=new THREE.Object3D();
neptuneplanet.add(nep)
scene.add(neptuneplanet)

nep.position.x=420

//ptlight
const ptlight=new THREE.PointLight(0xFFFFFF,50000,2800)
ptlight.position.copy(sun.position);
scene.add(ptlight); 

//gui options
const options={
    speedmercury:0.1,
    speedvenus:0.1,
    speedearth:0.1,
    speedmars:0.1,
    speedjupiter:0.1,
    speedsaturn:0.1,
    speeduranus:0.1,
    speedneptune:0.1
  
}
gui.add(options, "speedmercury", 0.001, 0.1).name("Mercury Orbit Speed");
gui.add(options, "speedvenus", 0.001, 0.1).name("Venus Orbit Speed");
gui.add(options, "speedearth", 0.001, 0.1).name("Earth Orbit Speed");
gui.add(options, "speedmars", 0.001, 0.1).name("Mars Orbit Speed");
gui.add(options, "speedjupiter", 0.001, 0.1).name("Jupiter Orbit Speed");
gui.add(options, "speedsaturn", 0.001, 0.1).name("Saturn Orbit Speed");
gui.add(options, "speeduranus", 0.001, 0.1).name("Uranus Orbit Speed");
gui.add(options, "speedneptune", 0.001, 0.1).name("Neptune Orbit Speed");




function animate(){
    sun.rotateY(0.001)
    mercuryplanet.rotateY(options.speedmercury)
    venusplanet.rotateY(options.speedvenus)
    earthplanet.rotateY(options.speedearth)
    ear.rotateY(0.04)
    marsplanet.rotateY(options.speedmars)
    mer.rotateY(0.05)
    ven.rotateY(0.05)
    mar.rotateY(0.002)
    jupiterplanet.rotateY(options.speedjupiter)
    jup.rotateY(0.01)
    sat.rotateY(0.04)
    saturnplanet.rotateY(options.speedsaturn)
    ringobj.rotateY(0)
    ura.rotateY(0.01)
    uranusplanet.rotateY(options.speeduranus)
    nep.rotateY(0.001)
    neptuneplanet.rotateY(options.speedneptune)
    renderer.render(scene,camera)
}

renderer.setAnimationLoop(animate)