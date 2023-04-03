

    var scene, camera, renderer, clock, btn, mode;
    var mixers = [];
    var actions = [];

    mode = 'open';

    init();

    function init(){
        

        clock = new THREE.Clock();

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x00aaff);

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

        document.addEventListener('keydown', canlandir, false);

        loader.load('animation.glb', function(object){
            
            const solKup = object.scene.children[0];
            const sagKup = object.scene.children[1];
            const ortaZemin = object.scene.children[2];
            const ortaDuvar = object.scene.children[3];

            let mixerSolKup = new THREE.AnimationMixer(solKup);
            let mixerSagKup = new THREE.AnimationMixer(sagKup);
            let mixerOrtaZemin = new THREE.AnimationMixer(ortaZemin);
            let mixerOrtaDuvar = new THREE.AnimationMixer(ortaDuvar);

            mixers.push(mixerSolKup);
            mixers.push(mixerSagKup);
            mixers.push(mixerOrtaDuvar);


            let actionSolKup = mixerSolKup.clipAction(object.animations[1]);
            let actionSagKup = mixerSagKup.clipAction(object.animations[2]);
            let actionOrtaDuvar = mixerOrtaDuvar.clipAction(object.animations[0]);

            actionOrtaDuvar.loop = THREE.LoopOnce;
            actionSolKup.loop = THREE.LoopOnce;
            actionSagKup.loop = THREE.LoopOnce;

            actionOrtaDuvar.clampWhenFinished = true;
            actionSolKup.clampWhenFinished = true;
            actionSagKup.clampWhenFinished = true;

            actions.push(actionSolKup);
            actions.push(actionSagKup);
            actions.push(actionOrtaDuvar);

            scene.add(object.scene);
        });



        window.addEventListener('resize', resize, false);
        animate();



    }

    function animate() {
        requestAnimationFrame(animate);
        const dt = clock.getDelta();
        mixers.forEach(mixer => mixer.update(dt));
        renderer.render(scene, camera);
        
    }

    function resize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function canlandir(event){
        var keyCode = event.which;
        
        if(keyCode == 32){

            if(mode == 'open'){
                actions.forEach(action => {
                    action.reset();
                    action.timeScale = 1;
                    action.play();
                });

                mode = 'close';
                btn.innerHTML = 'GERİ'

            } else {
                actions.forEach(action => {
                    action.reset();
                    action.time = action.getClip().duration;
                    action.timeScale = -1;
                    action.play();
                });

                mode = 'open';
                btn.innerHTML = 'İLERİ'
            }

        }
    }