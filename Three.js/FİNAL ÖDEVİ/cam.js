function Windows(){

    const window = new THREE.Group();
        
    const geometry = new THREE.BoxGeometry(0.7,0.4,0.85);
    const material = new THREE.MeshPhysicalMaterial({
        metalness: 0,
        roughness:0.0,
        transmission:1,
        thickness: 0.3,
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(-40.3,0.7,0);
    window.add(mesh);   
    
    return window;
    
}