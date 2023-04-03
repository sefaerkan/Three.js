function Chair() {

    const chair = new THREE.Group();

    //Gövde

    const gbacak1 = new THREE.BoxGeometry(3,4,1);
	const mbacak1 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
	const bacak1 = new THREE.Mesh( gbacak1, mbacak1 );
	bacak1.position.set(1, 0, 0);
	chair.add( bacak1 );

	//Kafa
	const geometry = new THREE.CircleGeometry( 1, 50 );
	const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
	const circle = new THREE.Mesh( geometry, material );
	circle.position.set(1,3,0);
	chair.add( circle );

	//Bacak1
	const gbacak2 = new THREE.BoxGeometry( 1, 2, 0 )
	const mbacak2 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	const bacak2 = new THREE.Mesh( gbacak2, mbacak2 );
	bacak2.position.set(0, -3, 0);
	chair.add( bacak2 );

	//Bacak2
	const gbacak3 = new THREE.BoxGeometry( 1, 2, 0 )
	const mbacak3 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	const bacak3 = new THREE.Mesh( gbacak3, mbacak3 );
	bacak3.position.set(2, -3, 0);
	chair.add( bacak3 );

	//Kol1
	const gbacak4 = new THREE.BoxGeometry( 7, 2, 0 )
	const mbacak4 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
	const bacak4 = new THREE.Mesh( gbacak4, mbacak4 );
	bacak4.position.set(5, 1, -15);
	chair.add( bacak4 );

	//Kol2
	const gbacak5 = new THREE.BoxGeometry( 4.2, 2, 0 )
	const mbacak5 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
	const bacak5 = new THREE.Mesh( gbacak5, mbacak5 );
	bacak5.position.set(-3, 1, -15);
	chair.add( bacak5 );

	return chair;
}