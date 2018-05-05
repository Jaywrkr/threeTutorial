//Scene
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//nuevo
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 50;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 30, 30, 30 );
//var geometry = new THREE.CircleGeometry( 15, 105 );
//var geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
//var geometry = new THREE.PlaneGeometry( 15, 40, 32 );
//var geometry = new THREE.RingGeometry( 1, 5, 32 );
//var geometry = new THREE.SphereGeometry( 20, 32, 32 );
//var geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
//var geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );

var material = new THREE.MeshBasicMaterial( 
  { 
    color: 0x00ff00 
 } );

var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var animate = function () {
				requestAnimationFrame( animate );
        cube.rotation.x += 0.1;
				cube.rotation.y += 0.1;
				renderer.render(scene, camera);
};
animate()


//EventListener
window.addEventListener('resize', function() {
		WIDTH = window.innerWidth;
		HEIGHT = window.innerHeight;
		renderer.setSize(WIDTH,HEIGHT);
		camera.aspect = WIDTH / HEIGHT;
		camera.updateProjectionMatrix();
});
