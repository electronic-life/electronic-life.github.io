const features = [
    { title: "Social Good", excerpt: "We believe in socially impactful and sustainable AI practices." },
    { title: "Research Led", excerpt: "Our focus is on critical, creative, and collaborative approaches to AI research and development." },
    { title: "Open and Inclusive", excerpt: "We work with key partners across arts, education and technology domains" }
];

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Set background color to black
scene.background = new THREE.Color(0x000000);

// Create white material for points and lines
const pointMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });
const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.7, transparent: true, linewidth: 2 });

// Create points and lines
const points = [];
const radius = 0.75;
for (let i = 0; i < features.length; i++) {
    const angle = (2 * Math.PI * i) / features.length;
    const x = Math.sin(angle) * radius;
    const y = Math.cos(angle) * radius;
    const z = (Math.random() - 0.5) * 2;
    points.push(new THREE.Vector3(x, y, z));
}

const pointsGeometry = new THREE.BufferGeometry().setFromPoints(points);
const pointCloud = new THREE.Points(pointsGeometry, pointMaterial);
scene.add(pointCloud);

// Connect all points with lines
const lineGeometry = new THREE.BufferGeometry();
const linePositions = [];
for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
        linePositions.push(points[i].x, points[i].y, points[i].z);
        linePositions.push(points[j].x, points[j].y, points[j].z);
    }
}
lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
scene.add(lines);

// Position the camera
camera.position.z = 3;

// Create text overlays
features.forEach((feature, index) => {
    const overlay = document.createElement('div');
    overlay.className = 'text-overlay';
    overlay.innerHTML = `<h3>${feature.title}</h3><p>${feature.excerpt}</p>`;
    overlay.style.opacity = '0';
    document.getElementById('canvas-container').appendChild(overlay);
});

// Animation function
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate the points and lines
    pointCloud.rotation.x += 0.0025;
    pointCloud.rotation.y += 0.005;
    lines.rotation.x += 0.0025;
    lines.rotation.y += 0.005;

    // Update text overlay positions
    updateOverlayPositions();

    renderer.render(scene, camera);
}

function updateOverlayPositions() {
    const overlays = document.getElementsByClassName('text-overlay');
    for (let i = 0; i < points.length; i++) {
        const vector = points[i].clone();
        vector.applyMatrix4(pointCloud.matrixWorld);
        vector.project(camera);

        const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const y = (-(vector.y * 0.5) + 0.5) * window.innerHeight;

        overlays[i].style.left = `${x - 100}px`; // Center horizontally
        overlays[i].style.top = `${y - 50}px`;  // Center vertically
        overlays[i].style.opacity = vector.z < 1 ? '1' : '0';
    }
}

// Start the animation
animate();

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});