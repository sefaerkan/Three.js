function Chair(){

    const chair = new THREE.Group();
    
    frontSide1 = new THREE.TextureLoader().load('ahsap.jpg');

    const gbacak1 = new THREE.BoxGeometry(0.1,0.5,0.1);
    const mbacak1= new THREE.MeshBasicMaterial({map: frontSide1});
    const bacak1 = new THREE.Mesh(gbacak1,mbacak1);

    bacak1.position.set(-40,0,0.3);
    chair.add(bacak1);

    const gbacak2 = new THREE.BoxGeometry(0.1,0.5,0.1);
    const mbacak2= new THREE.MeshBasicMaterial({map: frontSide1});
    const bacak2 = new THREE.Mesh(gbacak2,mbacak2);

    bacak2.position.set(-40,0,-0.3);
    chair.add(bacak2);

    const gbacak3= new THREE.BoxGeometry(0.1,0.5,0.1);
    const mbacak3= new THREE.MeshBasicMaterial({map: frontSide1});
    const bacak3 = new THREE.Mesh(gbacak3,mbacak3);

    bacak3.position.set(-40.6,0,-0.3);
    chair.add(bacak3);
    

    const gbacak4= new THREE.BoxGeometry(0.1,0.5,0.1);
    const mbacak4= new THREE.MeshBasicMaterial({map: frontSide1});
    const bacak4 = new THREE.Mesh(gbacak4,mbacak4);

    bacak4.position.set(-40.6,0,0.3);
    chair.add(bacak4);

    const goturak= new THREE.BoxGeometry(0.9,0.11,0.9);1
    const moturak= new THREE.MeshBasicMaterial({map: frontSide1});
    const oturak = new THREE.Mesh(goturak,moturak);

    oturak.position.set(-40.3,0.31,0);
    chair.add(oturak);

    

    
    
    
    return chair;

}