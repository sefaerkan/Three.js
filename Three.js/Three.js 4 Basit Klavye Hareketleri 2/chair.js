function Chair(){

    const chair = new THREE.Group();
    //Bacaklar
    const gbacak1 = new THREE.BoxGeometry(1,5,1);
    const mbacak1= new THREE.MeshBasicMaterial({color: 0xffff00});
    const bacak1 = new THREE.Mesh(gbacak1,mbacak1);

    bacak1.position.set(-2.5,0,-2.5);
    chair.add(bacak1);

    const gbacak2 = new THREE.BoxGeometry(1,5,1);
    const mbacak2= new THREE.MeshBasicMaterial({color: 0xffff00});
    const bacak2 = new THREE.Mesh(gbacak2,mbacak2);

    bacak2.position.set(2.5,0,-2.5);
    chair.add(bacak2);

    const gbacak3 = new THREE.BoxGeometry(1,5,1);
    const mbacak3= new THREE.MeshBasicMaterial({color: 0xffff00});
    const bacak3 = new THREE.Mesh(gbacak3,mbacak3);

    bacak3.position.set(2.5,0,2.5);
    chair.add(bacak3);

    const gbacak4= new THREE.BoxGeometry(1,5,1);
    const mbacak4= new THREE.MeshBasicMaterial({color: 0xffff00});
    const bacak4 = new THREE.Mesh(gbacak4,mbacak4);

    bacak4.position.set(-2.5,0,2.5);
    chair.add(bacak4);

    //Oturak
    const goturak= new THREE.BoxGeometry(6,1,6);
    const moturak= new THREE.MeshBasicMaterial({color: 0xff0000});
    const oturak = new THREE.Mesh(goturak,moturak);

    oturak.position.set(0,3,0);
    chair.add(oturak);

    //Sırt
    const gsırt= new THREE.BoxGeometry(6,6,1);
    const msırt= new THREE.MeshBasicMaterial({color: 0xff00ff});
    const sırt = new THREE.Mesh(gsırt,msırt);

    sırt.position.set(0,6,-3);
    chair.add(sırt);

    
    
    
    return chair;

}