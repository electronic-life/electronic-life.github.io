// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('visualization-container');
    if (!container) return;  // Exit if the container doesn't exist

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(85, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Set background color to black
    scene.background = new THREE.Color(0x000000);

    // Create white material for points
    const material = new THREE.PointsMaterial({color: 0xffffff, size: 0.1});

    // Create an array of random point positions
    const pointsArray = [];
    for (let i = 0; i < 1000; i++) {
        const x = (Math.random() - 0.5) * 10;
        const y = (Math.random() - 0.5) * 10;
        const z = (Math.random() - 0.5) * 10;
        pointsArray.push(x, y, z);
    }

    // Create a BufferGeometry and add the points to it
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(pointsArray, 3));

    // Create a Points object and add it to the scene
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Position the camera
    camera.position.z = 5;

    // Animation function
    function animate() {
        requestAnimationFrame(animate);
        
        // Rotate the points
        points.rotation.x += 0.001;
        points.rotation.y += 0.002;
        renderer.render(scene, camera);
    }

    // Start the animation
    animate();

    // Handle window resizing
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
});