import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.122.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.122.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.122.0/examples/jsm/controls/OrbitControls.js';

// Get the size of the box elements
const box = document.querySelector('.box');
const boxStyles = window.getComputedStyle(box);
const boxWidth = parseFloat(boxStyles.getPropertyValue('width'));
const boxHeight = parseFloat(boxStyles.getPropertyValue('height'));

///////////////////////////////////////// COSTCO /////////////////////////////////////////

// Get the container element
const container = document.getElementById('costco');

// Create a new scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Load the glTF model
const loader = new GLTFLoader();
let model;
loader.load(
    'costco.glb',
    function (gltf) {
        model = gltf.scene;
        model.scale.set(5, 5, 5); // Scale the model bigger to its original size
        scene.add(model); // Add the loaded model to the scene

        // Event listener for mouse hover
        container.addEventListener('mouseenter', function() {
            model.scale.set(6, 6, 6); // Scale the model even bigger on hover
        });

        // Event listener for mouse leave
        container.addEventListener('mouseleave', function() {
            model.scale.set(5, 5, 5); // Reset the model scale on mouse leave
        });
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

// Position the camera
camera.position.z = 5;

// Add lights to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xefefff, 1);
dirLight.position.set(10, 10, 10);
scene.add(dirLight);

// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.maxPolarAngle = Math.PI / 2;

// Function to rotate the model
function rotateModel() {
    if (model) {
        model.rotation.y += 0.01;
    }
}

// Function to update the camera aspect ratio and renderer size on window resize
function onWindowResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

// Render the scene
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Update the orbit controls
    rotateModel(); // Rotate the model
    renderer.render(scene, camera);
}

// Event listeners
window.addEventListener('click', rotateModel);
window.addEventListener('resize', onWindowResize);

// Initial call to render the scene
animate();

///////////////////////////////////////// MCDONALD /////////////////////////////////////////

// Get the container element
const mcdonaldContainer = document.getElementById('mcdonald');

// Create a new scene, camera, and renderer
const mcdonaldScene = new THREE.Scene();
const mcdonaldCamera = new THREE.PerspectiveCamera(75, mcdonaldContainer.clientWidth / mcdonaldContainer.clientHeight, 0.1, 1000);
const mcdonaldRenderer = new THREE.WebGLRenderer();
mcdonaldRenderer.setSize(mcdonaldContainer.clientWidth, mcdonaldContainer.clientHeight);
mcdonaldContainer.appendChild(mcdonaldRenderer.domElement);

// Load the glTF model
let mcdonaldModel;
loader.load(
    'mcdonald.glb',
    function (gltf) {
        mcdonaldModel = gltf.scene;
        mcdonaldModel.scale.set(5, 5, 5); // Scale the model bigger to its original size
        mcdonaldScene.add(mcdonaldModel); // Add the loaded model to the scene

        // Event listener for mouse hover
        mcdonaldContainer.addEventListener('mouseenter', function() {
            mcdonaldModel.scale.set(6, 6, 6); // Scale the model even bigger on hover
        });

        // Event listener for mouse leave
        mcdonaldContainer.addEventListener('mouseleave', function() {
            mcdonaldModel.scale.set(5, 5, 5); // Reset the model scale on mouse leave
        });
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

// Position the camera
mcdonaldCamera.position.z = 5;

// Add lights to the scene
const mcdonaldAmbientLight = new THREE.AmbientLight(0xffffff, 0.8);
mcdonaldScene.add(mcdonaldAmbientLight);

const mcdonaldDirLight = new THREE.DirectionalLight(0xefefff, 1);
mcdonaldDirLight.position.set(10, 10, 10);
mcdonaldScene.add(mcdonaldDirLight);

// Orbit controls
const mcdonaldControls = new OrbitControls(mcdonaldCamera, mcdonaldRenderer.domElement);
mcdonaldControls.enableDamping = true;
mcdonaldControls.dampingFactor = 0.25;
mcdonaldControls.screenSpacePanning = false;
mcdonaldControls.maxPolarAngle = Math.PI / 2;

// Function to rotate the model
function rotateMcdonaldModel() {
    if (mcdonaldModel) {
        mcdonaldModel.rotation.y += 0.01;
    }
}

// Function to update the camera aspect ratio and renderer size on window resize
function onMcdonaldWindowResize() {
    mcdonaldCamera.aspect = mcdonaldContainer.clientWidth / mcdonaldContainer.clientHeight;
    mcdonaldCamera.updateProjectionMatrix();
    mcdonaldRenderer.setSize(mcdonaldContainer.clientWidth, mcdonaldContainer.clientHeight);
}

// Render the scene
function animateMcdonald() {
    requestAnimationFrame(animateMcdonald);
    mcdonaldControls.update(); // Update the orbit controls
    rotateMcdonaldModel(); // Rotate the model
    mcdonaldRenderer.render(mcdonaldScene, mcdonaldCamera);
}

// Event listeners
window.addEventListener('click', rotateMcdonaldModel);
window.addEventListener('resize', onMcdonaldWindowResize);

// Initial call to render the scene
animateMcdonald();

///////////////////////////////////////// SAFEWAY /////////////////////////////////////////

// Get the container element
const safewayContainer = document.getElementById('safeway');

// Create a new scene, camera, and renderer
const safewayScene = new THREE.Scene();
const safewayCamera = new THREE.PerspectiveCamera(75, safewayContainer.clientWidth / safewayContainer.clientHeight, 0.1, 1000);
const safewayRenderer = new THREE.WebGLRenderer();
safewayRenderer.setSize(safewayContainer.clientWidth, safewayContainer.clientHeight);
safewayContainer.appendChild(safewayRenderer.domElement);

// Load the glTF model
let safewayModel;
loader.load(
    'safeway.glb',
    function (gltf) {
        safewayModel = gltf.scene;
        safewayModel.scale.set(5, 5, 5); // Scale the model bigger to its original size
        safewayScene.add(safewayModel); // Add the loaded model to the scene

        // Event listener for mouse hover
        safewayContainer.addEventListener('mouseenter', function() {
            safewayModel.scale.set(6, 6, 6); // Scale the model even bigger on hover
        });

        // Event listener for mouse leave
        safewayContainer.addEventListener('mouseleave', function() {
            safewayModel.scale.set(5, 5, 5); // Reset the model scale on mouse leave
        });
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

// Position the camera
safewayCamera.position.z = 5;

// Add lights to the scene
const safewayAmbientLight = new THREE.AmbientLight(0xffffff, 0.8);
safewayScene.add(safewayAmbientLight);

const safewayDirLight = new THREE.DirectionalLight(0xefefff, 1);
safewayDirLight.position.set(10, 10, 10);
safewayScene.add(safewayDirLight);

// Orbit controls
const safewayControls = new OrbitControls(safewayCamera, safewayRenderer.domElement);
safewayControls.enableDamping = true;
safewayControls.dampingFactor = 0.25;
safewayControls.screenSpacePanning = false;
safewayControls.maxPolarAngle = Math.PI / 2;

// Function to rotate the model
function rotateSafewayModel() {
    if (safewayModel) {
        safewayModel.rotation.y += 0.01;
    }
}

// Function to update the camera aspect ratio and renderer size on window resize
function onSafewayWindowResize() {
    safewayCamera.aspect = safewayContainer.clientWidth / safewayContainer.clientHeight;
    safewayCamera.updateProjectionMatrix();
    safewayRenderer.setSize(safewayContainer.clientWidth, safewayContainer.clientHeight);
}

// Render the scene
function animateSafeway() {
    requestAnimationFrame(animateSafeway);
    safewayControls.update(); // Update the orbit controls
    rotateSafewayModel(); // Rotate the model
    safewayRenderer.render(safewayScene, safewayCamera);
}

// Event listeners
window.addEventListener('click', rotateSafewayModel);
window.addEventListener('resize', onSafewayWindowResize);

// Initial call to render the scene
animateSafeway();

///////////////////////////////////////// STARBUCKS /////////////////////////////////////////

// Get the container element
const starbucksContainer = document.getElementById('starbucks');

// Create a new scene, camera, and renderer
const starbucksScene = new THREE.Scene();
const starbucksCamera = new THREE.PerspectiveCamera(75, starbucksContainer.clientWidth / starbucksContainer.clientHeight, 0.1, 1000);
const starbucksRenderer = new THREE.WebGLRenderer();
starbucksRenderer.setSize(starbucksContainer.clientWidth, starbucksContainer.clientHeight);
starbucksContainer.appendChild(starbucksRenderer.domElement);

// Load the glTF model
let starbucksModel;
loader.load(
    'starbucks.glb',
    function (gltf) {
        starbucksModel = gltf.scene;
        starbucksModel.scale.set(5, 5, 5); // Scale the model bigger to its original size
        starbucksScene.add(starbucksModel); // Add the loaded model to the scene

        // Event listener for mouse hover
        starbucksContainer.addEventListener('mouseenter', function() {
            starbucksModel.scale.set(6, 6, 6); // Scale the model even bigger on hover
        });

        // Event listener for mouse leave
        starbucksContainer.addEventListener('mouseleave', function() {
            starbucksModel.scale.set(5, 5, 5); // Reset the model scale on mouse leave
        });
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

// Position the camera
starbucksCamera.position.z = 5;

// Add lights to the scene
const starbucksAmbientLight = new THREE.AmbientLight(0xffffff, 0.8);
starbucksScene.add(starbucksAmbientLight);

const starbucksDirLight = new THREE.DirectionalLight(0xefefff, 1);
starbucksDirLight.position.set(10, 10, 10);
starbucksScene.add(starbucksDirLight);

// Orbit controls
const starbucksControls = new OrbitControls(starbucksCamera, starbucksRenderer.domElement);
starbucksControls.enableDamping = true;
starbucksControls.dampingFactor = 0.25;
starbucksControls.screenSpacePanning = false;
starbucksControls.maxPolarAngle = Math.PI / 2;

// Function to rotate the model
function rotateStarbucksModel() {
    if (starbucksModel) {
        starbucksModel.rotation.y += 0.01;
    }
}

// Function to update the camera aspect ratio and renderer size on window resize
function onStarbucksWindowResize() {
    starbucksCamera.aspect = starbucksContainer.clientWidth / starbucksContainer.clientHeight;
    starbucksCamera.updateProjectionMatrix();
    starbucksRenderer.setSize(starbucksContainer.clientWidth, starbucksContainer.clientHeight);
}

// Render the scene
function animateStarbucks() {
    requestAnimationFrame(animateStarbucks);
    starbucksControls.update(); // Update the orbit controls
    rotateStarbucksModel(); // Rotate the model
    starbucksRenderer.render(starbucksScene, starbucksCamera);
}

// Event listeners
window.addEventListener('click', rotateStarbucksModel);
window.addEventListener('resize', onStarbucksWindowResize);

// Initial call to render the scene
animateStarbucks();

///////////////////////////////////////// WALGREEN /////////////////////////////////////////

// Get the container element
const walgreenContainer = document.getElementById('walgreen');

// Create a new scene, camera, and renderer
const walgreenScene = new THREE.Scene();
const walgreenCamera = new THREE.PerspectiveCamera(75, walgreenContainer.clientWidth / walgreenContainer.clientHeight, 0.1, 1000);
const walgreenRenderer = new THREE.WebGLRenderer();
walgreenRenderer.setSize(walgreenContainer.clientWidth, walgreenContainer.clientHeight);
walgreenContainer.appendChild(walgreenRenderer.domElement);

// Load the glTF model
let walgreenModel;
loader.load(
    'walgreen.glb',
    function (gltf) {
        walgreenModel = gltf.scene;
        walgreenModel.scale.set(5, 5, 5); // Scale the model bigger to its original size
        walgreenScene.add(walgreenModel); // Add the loaded model to the scene

        // Event listener for mouse hover
        walgreenContainer.addEventListener('mouseenter', function() {
            walgreenModel.scale.set(6, 6, 6); // Scale the model even bigger on hover
        });

        // Event listener for mouse leave
        walgreenContainer.addEventListener('mouseleave', function() {
            walgreenModel.scale.set(5, 5, 5); // Reset the model scale on mouse leave
        });
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

// Position the camera
walgreenCamera.position.z = 5;

// Add lights to the scene
const walgreenAmbientLight = new THREE.AmbientLight(0xffffff, 0.8);
walgreenScene.add(walgreenAmbientLight);

const walgreenDirLight = new THREE.DirectionalLight(0xefefff, 1);
walgreenDirLight.position.set(10, 10, 10);
walgreenScene.add(walgreenDirLight);

// Orbit controls
const walgreenControls = new OrbitControls(walgreenCamera, walgreenRenderer.domElement);
walgreenControls.enableDamping = true;
walgreenControls.dampingFactor = 0.25;
walgreenControls.screenSpacePanning = false;
walgreenControls.maxPolarAngle = Math.PI / 2;

// Function to rotate the model
function rotateWalgreenModel() {
    if (walgreenModel) {
        walgreenModel.rotation.y += 0.01;
    }
}

// Function to update the camera aspect ratio and renderer size on window resize
function onWalgreenWindowResize() {
    walgreenCamera.aspect = walgreenContainer.clientWidth / walgreenContainer.clientHeight;
    walgreenCamera.updateProjectionMatrix();
    walgreenRenderer.setSize(walgreenContainer.clientWidth, walgreenContainer.clientHeight);
}

// Render the scene
function animateWalgreen() {
    requestAnimationFrame(animateWalgreen);
    walgreenControls.update(); // Update the orbit controls
    rotateWalgreenModel(); // Rotate the model
    walgreenRenderer.render(walgreenScene, walgreenCamera);
}

// Event listeners
window.addEventListener('click', rotateWalgreenModel);
window.addEventListener('resize', onWalgreenWindowResize);

// Initial call to render the scene
animateWalgreen();

///////////////////////////////////////// HMART /////////////////////////////////////////

// Get the container element
const hmartContainer = document.getElementById('hmart');

// Create a new scene, camera, and renderer
const hmartScene = new THREE.Scene();
const hmartCamera = new THREE.PerspectiveCamera(75, hmartContainer.clientWidth / hmartContainer.clientHeight, 0.1, 1000);
const hmartRenderer = new THREE.WebGLRenderer();
hmartRenderer.setSize(hmartContainer.clientWidth, hmartContainer.clientHeight);
hmartContainer.appendChild(hmartRenderer.domElement);

// Load the glTF model
let hmartModel;
loader.load(
    'hmart.glb',
    function (gltf) {
        hmartModel = gltf.scene;
        hmartModel.scale.set(5, 5, 5); // Scale the model bigger to its original size
        hmartScene.add(hmartModel); // Add the loaded model to the scene

        // Event listener for mouse hover
        hmartContainer.addEventListener('mouseenter', function() {
            hmartModel.scale.set(6, 6, 6); // Scale the model even bigger on hover
        });

        // Event listener for mouse leave
        hmartContainer.addEventListener('mouseleave', function() {
            hmartModel.scale.set(5, 5, 5); // Reset the model scale on mouse leave
        });
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

// Position the camera
hmartCamera.position.z = 5;

// Add lights to the scene
const hmartAmbientLight = new THREE.AmbientLight(0xffffff, 0.8);
hmartScene.add(hmartAmbientLight);

const hmartDirLight = new THREE.DirectionalLight(0xefefff, 1);
hmartDirLight.position.set(10, 10, 10);
hmartScene.add(hmartDirLight);

// Orbit controls
const hmartControls = new OrbitControls(hmartCamera, hmartRenderer.domElement);
hmartControls.enableDamping = true;
hmartControls.dampingFactor = 0.25;
hmartControls.screenSpacePanning = false;
hmartControls.maxPolarAngle = Math.PI / 2;

// Function to rotate the model
function rotateHmartModel() {
    if (hmartModel) {
        hmartModel.rotation.y += 0.01;
    }
}

// Function to update the camera aspect ratio and renderer size on window resize
function onHmartWindowResize() {
    hmartCamera.aspect = hmartContainer.clientWidth / hmartContainer.clientHeight;
    hmartCamera.updateProjectionMatrix();
    hmartRenderer.setSize(hmartContainer.clientWidth, hmartContainer.clientHeight);
}

// Render the scene
function animateHmart() {
    requestAnimationFrame(animateHmart);
    hmartControls.update(); // Update the orbit controls
    rotateHmartModel(); // Rotate the model
    hmartRenderer.render(hmartScene, hmartCamera);
}

// Event listeners
window.addEventListener('click', rotateHmartModel);
window.addEventListener('resize', onHmartWindowResize);

// Initial call to render the scene
animateHmart();

/////////////////////////////////MODAL BOX/////////////////////////////////////////////
// Add an event listener for the click event on the '+' icon
document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', function() {
        // Get the corresponding modal box
        const modalId = this.parentElement.id + 'box';
        const modal = document.getElementById(modalId);
        // Display the modal box
        modal.style.display = 'block';

        // Add an event listener to the close button within the modal box
        const closeButton = modal.querySelector('.close');
        closeButton.addEventListener('click', function() {
            // Hide the modal box when the close button is clicked
            modal.style.display = 'none';
        });
    });
});





  
  