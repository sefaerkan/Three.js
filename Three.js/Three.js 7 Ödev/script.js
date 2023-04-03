

    var scene, camera, renderer, clock, btn, mode;
    var gunes,gunes1,gunes2,gunes3,gunes4,gunes5;
    var mixers = [];
    var actions = [];
    var agirlikMerkez=[];
    var elementler=[];
    mode = 'open';

    init();

    function init(){
        

        clock = new THREE.Clock();

        scene = new THREE.Scene();
        scene.background = new THREE.Color(000000);

        camera = new THREE.PerspectiveCamera( 90 , window.innerWidth / window.innerHeight, 0.1, 100 );
        camera.position.set(0,3,10);
        camera.rotation.set(Math.PI/4, 0,0);

        const ambient = new THREE.HemisphereLight(0xffffbb, 0x080820);
        scene.add(ambient);

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0,1,15);
        scene.add(light);

        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setClearColor(new THREE.Color(0xaabbff));
        document.body.appendChild( renderer.domElement );

        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.target.set(1,2,0);
        controls.update();

        const buyukluk = 100;
        const bolumler = 100;
        const izgara = new THREE.GridHelper( buyukluk, bolumler);
        scene.add(izgara);


        btn = document.getElementById('btn');

        const assetPach = '';
        const loader = new THREE.GLTFLoader();
        loader.setPath(assetPach);

        document.addEventListener('keydown',canlandir=>{
 
            actions.forEach(action => {
                action.play();
                action.timescale=1;
            });
            for (var i = 0; i < elementler.length; i++) {
                var agirlikMerkezi = new THREE.Object3D();
                agirlikMerkezi.add(elementler[i]);
                agirlikMerkez.push(agirlikMerkezi);
                scene.add(agirlikMerkezi);
            }
        });

        loader.load('deneme.glb', function(object){
            
            gunes = object.scene.children[0];
            gunes1 = object.scene.children[1];
            gunes2 = object.scene.children[2];
            gunes3 = object.scene.children[3];
            gunes4 = object.scene.children[4];
            gunes5 = object.scene.children[5];
            
            for (var i = 0; i < 6; i++) {
                elementler.push(object.scene.children[i]);
            }
            
            let mixerGunes = new THREE.AnimationMixer(gunes);
            let mixerGunes1 = new THREE.AnimationMixer(gunes1);
            let mixerGunes2 = new THREE.AnimationMixer(gunes2);
            let mixerGunes3 = new THREE.AnimationMixer(gunes3);
            let mixerGunes4 = new THREE.AnimationMixer(gunes4);
            let mixerGunes5 = new THREE.AnimationMixer(gunes5);

            mixers.push(mixerGunes);
            mixers.push(mixerGunes1);
            mixers.push(mixerGunes2);
            mixers.push(mixerGunes3);
            mixers.push(mixerGunes4);
            mixers.push(mixerGunes5);

            let gunesAction = mixerGunes.clipAction(object.animations[0]);
            let gunes1Action = mixerGunes1.clipAction(object.animations[1]);
            let gunes2Action = mixerGunes2.clipAction(object.animations[2]);
            let gunes3Action = mixerGunes3.clipAction(object.animations[3]);
            let gunes4Action = mixerGunes4.clipAction(object.animations[4]);
            let gunes5Action = mixerGunes5.clipAction(object.animations[5]);

            gunesAction.loop = THREE.LoopOnce;
            gunes1Action.loop = THREE.LoopOnce;
            gunes2Action.loop = THREE.LoopOnce;
            gunes3Action.loop = THREE.LoopOnce;
            gunes4Action.loop = THREE.LoopOnce;
            gunes5Action.loop = THREE.LoopOnce;

            actions.push(gunesAction);
            actions.push(gunes1Action);
            actions.push(gunes2Action);
            actions.push(gunes3Action);
            actions.push(gunes4Action);
            actions.push(gunes5Action);
        

            scene.add(object.scene);
        });

        window.addEventListener('resize', resize, false);
        animate();
    }

    function animate() {
        requestAnimationFrame(animate);
        const dt = clock.getDelta();
        mixers.forEach(mixer => mixer.update(dt));


        agirlikMerkez.forEach(element => {
            if (agirlikMerkez[0].children[0]) {
                agirlikMerkez[0].rotation.y += 0.019;
            }
            if (agirlikMerkez[1].children[0]) {
                agirlikMerkez[1].rotation.y += 0.00298;
            }
            if (agirlikMerkez[2].children[0]) {
                agirlikMerkez[2].rotation.y += 0.0035;
            }
            if (agirlikMerkez[3].children[0]) {
                agirlikMerkez[3].rotation.y += 0.00241;
            }
            if (agirlikMerkez[4].children[0]) {
                agirlikMerkez[4].rotation.y += 0.00479;
            }
            if (agirlikMerkez[5].children[0]) {
                agirlikMerkez[5].rotation.y += 0.00298;
            }
        });

        renderer.render(scene, camera);
        
    }

    function resize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

   