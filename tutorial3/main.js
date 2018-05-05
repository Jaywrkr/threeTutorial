//Ordenamos variables
//Metodo init

var renderer, scene, camera, controls;

function init() {
   
    scene = new THREE.Scene();
    // camera
    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
    // #3 Posicion de cámara
    camera.position.set( 20, 20, 20 );
  
    // renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    
    // #3 Controles de movimiento
    controls = new THREE.OrbitControls(camera);
    // #3 Ejes
    scene.add( new THREE.AxesHelper( 20 ) );
    
    //var geometry = new THREE.CircleGeometry( 15, 105 );
    //var geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
    //var geometry = new THREE.PlaneGeometry( 15, 40, 32 );
    //var geometry = new THREE.RingGeometry( 1, 5, 32 );
    //var geometry = new THREE.SphereGeometry( 20, 32, 32 );
    //var geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
    //var geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
    var geometry = new THREE.BoxGeometry( 5, 5, 5 );
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    
    // mesh
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
  
    // #3 Filos al cubo 
    var geo = new THREE.EdgesGeometry( cube.geometry ); 
    var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 2 } );
    var wireframe = new THREE.LineSegments( geo, mat );
    cube.add( wireframe );
  
    //EventListener
    window.addEventListener('resize', function() {
        WIDTH = window.innerWidth;
        HEIGHT = window.innerHeight;
        renderer.setSize(WIDTH,HEIGHT);
        camera.aspect = WIDTH / HEIGHT;
        camera.updateProjectionMatrix();
    });

    // #
    //Click y cambiar colores de material
    window.addEventListener('click', function() {
        cube.material.color.setHex(Math.random() * 0xffffff);
    });
}

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}

init();
animate();






