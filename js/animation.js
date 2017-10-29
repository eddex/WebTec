var camera, scene, renderer, id;
var box, globe, moon, skyBox;
var moonAngle = 0, boxAngle = 0;

init();
animate();

function init() {
  "use strict";
  
  // cancel previous animation
  cancelAnimationFrame( id );
  
  // CAMERA
  camera = new THREE.PerspectiveCamera( 70, getContentWidth() / getContentHeight(), 1, 6000 );
  camera.position.z = 600;

  // SCENE
  scene = new THREE.Scene();

  // BOX
  var boxTexture = new THREE.TextureLoader().load( '../img/textures/crate.gif' );

  var boxGeometry = new THREE.BoxBufferGeometry( 20, 20, 20 ); // grösse x, y, z
  var boxMaterial = new THREE.MeshBasicMaterial( { map: boxTexture } );

  box = new THREE.Mesh( boxGeometry, boxMaterial );
  scene.add( box );
  
  // GLOBE
  var globeTexture = new THREE.TextureLoader().load('../img/textures/globe.jpg');
  
  var globeGeometry = new THREE.SphereGeometry(100, 20, 20);
  var globeMaterial = new THREE.MeshBasicMaterial( { map: globeTexture } );
  
  globe = new THREE.Mesh( globeGeometry, globeMaterial );
  scene.add( globe );
  
  globe.rotation.z = 0.5;
  
  // MOON
  var moonTexture = new THREE.TextureLoader().load('../img/textures/moon.jpg');
  
  var moonGeometry = new THREE.SphereGeometry(40, 20, 20);
  var moonMaterial = new THREE.MeshBasicMaterial( { map: moonTexture } );
  
  moon = new THREE.Mesh( moonGeometry, moonMaterial );
  scene.add( moon );
  
  // SKYBOX
  var skyboxPath = '../img/textures/space_skybox/';
  var imageType = '.jpg';
  var skyBoxMaterials = [
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(skyboxPath + 'right' + imageType) }), // right
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(skyboxPath + 'left' + imageType) }), // left
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(skyboxPath + 'top' + imageType) }), // top
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(skyboxPath + 'bottom' + imageType) }), // bottom
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(skyboxPath + 'front' + imageType) }), // front
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(skyboxPath + 'back' + imageType) })  // back
  ];
  
  var skyBoxMaterial = new THREE.MeshFaceMaterial( skyBoxMaterials );
  var skyBoxGeometry = new THREE.BoxGeometry( 5000, 5000, 5000 );
  skyBox = new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
  skyBox.scale.x = -1;
  skyBox.rotation.z = 1;
  scene.add(skyBox);

  // RENDERER
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( getContentWidth(), getContentHeight() );
  document.getElementById( 'container' ).appendChild( renderer.domElement );

  // subscribe to window resize event
  window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {

  var contentWidth = getContentWidth();
  var contentHeight = getContentHeight();

  camera.aspect = contentWidth / contentHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( contentWidth, contentHeight );
}

function animate() {

  id = requestAnimationFrame( animate );

  // MOON
  moonAngle += 0.005;
  var r = 200;
  var newXY = Math.floor(r * Math.cos(moonAngle));
  var newZ = Math.floor(r * Math.sin(moonAngle));

  moon.position.x = newXY;
  moon.position.y = newXY;
  moon.position.z = newZ;
  
  moon.rotation.y += 0.005;
  
  // BOX
  boxAngle += 0.008;
  r = 120;
  newXY = Math.floor(r * Math.sin(boxAngle));
  newZ = Math.floor(r * Math.cos(boxAngle));
  
  box.position.x = newXY;
  box.position.z = newXY;
  box.position.y = newZ;
  
  box.rotation.x += 0.005;
  box.rotation.y += 0.01;
  box.rotation.z += 0.08;
  
  // GLOBE
  globe.rotation.y += 0.01;
  
  // SKYBOX
  skyBox.rotation.y += 0.0005;
  
  renderer.render( scene, camera );
}

function getContentWidth() {
  var contentDiv = document.getElementById('content');
  return contentDiv.clientWidth;
}

function getContentHeight() {
  var contentDiv = document.getElementById('content');
  return Math.floor(contentDiv.clientWidth / 4 * 3);
}