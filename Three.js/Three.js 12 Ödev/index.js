window.addEventListener('load', init, false);

function init() {
    
    createScene();
    createLights();
    createObject();
    createControl();
    loop();
    renderer.render(scene, camera);
}

var scene, camera, fieldOfView, aspectRatio, nearPlane, farPlane, HEIGHT, WIDTH, renderer, container;
 
function createScene() {
   
   HEIGHT = window.innerHeight;
   WIDTH = window.innerWidth;
   
   scene = new THREE.Scene();
   scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);
   aspectRatio = WIDTH/HEIGHT;
   fieldOfView = 45;
   nearPlane = 0.1;
   farPlane = 100;
   camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
   
   camera.position.x = 0;
   camera.position.z = 5;
   camera.position.y = 0;
   
   renderer = new THREE.WebGLRenderer({
       alpha: true,
       antialias: true,
   })
   renderer.setSize(WIDTH, HEIGHT);
   renderer.shadowMap.enabled = true;
   container = document.getElementById("world");
   container.appendChild(renderer.domElement);
   
    window.addEventListener("resize", handleWindowResize, false);
           
}

function handleWindowResize() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect=WIDTH/HEIGHT;
    camera.updateProjectionMatrix();
}

function createLights() {
    
    const light = new THREE.DirectionalLight(0xfff0dd,1);
    light.position.set(0,5,10);
    scene.add(light);
    
}

function createControl() {
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target.set(0,0,0);
    controls.update();
}
function loop(){
        
        mesh.rotation.x += 0.01;
        mesh1.rotation.y += 0.01;
	renderer.render(scene, camera);
	requestAnimationFrame(loop);
}

var mesh;

function createObject() {
    
    const geometry = new THREE.IcosahedronGeometry(1,0);
    const material = new THREE.MeshPhysicalMaterial({
        metalness: 0,
        roughness:0.0,
        transmission:2,
        thickness: 0.2,
    });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    mesh.position.set(0,-1,0);

    const geometry1 = new THREE.IcosahedronGeometry(1,0);
    const material1 = new THREE.MeshPhysicalMaterial({
        metalness: 0,
        roughness:0.0,
        transmission:1,
        thickness: 0.2,
    });
    mesh1 = new THREE.Mesh(geometry1, material1);
    scene.add(mesh1);
    mesh1.position.set(0,1.5,0);

    
    const bgTexture = new THREE.TextureLoader().load("su.jpg");
    const bgGeometry = new THREE.PlaneGeometry(5,5);
    const bgMaterial = new THREE.MeshBasicMaterial({map: bgTexture, side: THREE.DoubleSide});
    const bgMesh = new THREE.Mesh(bgGeometry, bgMaterial);
    bgMesh.position.set(0,0.2,0);
    scene.add(bgMesh);
}




