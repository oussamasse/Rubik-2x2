//Variables générales
var cube, objectSize, mesh1, mesh2, mesh3, mesh4, mesh5, mesh6, mesh7, mesh8, camera, scene, renderer,content;

//Boolean pour vérification de click sur les mini cubes.
clicked1 = clicked2 = clicked3 = clicked4 = clicked5 = clicked6 = clicked7 = clicked8 = buttonClick = false;
//Les textures des mini cubes
var colours = [0xff0000, 0xd0cfcf, 0x0071ff, 0xf48e26, 0xffa500, 0xff0088,0x2A9C3C, 0x2a8a9c];

//Gere le button fermer de la popin
function buttonClicked() {
	
	if(buttonClick == false) {
		popinhide();
		var clickedItem  = [clicked1, clicked2, clicked3, clicked4, clicked5, clicked6, clicked7, clicked8];
		clickedItem.forEach(function(e) {
		  if(e == true){
		    //Réglage de position des mini cubes
			mesh1.position.set(objectSize/2+3, objectSize/2+3, -objectSize/2-3);
			mesh2.position.set(-objectSize/2-3, objectSize/2+3, -objectSize/2-3);
			mesh3.position.set(objectSize/2+3, -objectSize/2-3, objectSize/2+3);
			mesh4.position.set(-objectSize/2-3, -objectSize/2-3, objectSize/2+3);
			mesh5.position.set(objectSize/2+3, -objectSize/2-3, -objectSize/2-3);
			mesh6.position.set(-objectSize/2-3, -objectSize/2-3, -objectSize/2-3);
			mesh7.position.set(objectSize/2+3, objectSize/2+3, objectSize/2+3);
			mesh8.position.set(-objectSize/2-3, objectSize/2+3, objectSize/2+3);
		  }
		});
	}
	
}

//Longueur d'un arret d'un mini cube
objectSize = 75;
var maxRotation = 2 * Math.PI;

//Affiche le contenu d'un mini cube (popin)
function popinshow(){
	//Element HTML (div) à traiter
	var elt1 = document.getElementsByClassName("popin")[0];
	var elt2 = document.getElementsByClassName("cube")[0];
	document.body.getElementsByTagName('canvas')[0].style.transition = "width 2.0s";
	elt1.style.transition = "width 2.0s";
	// elt1.style.transition = "display 2.0s";
	elt1.style.width = "42%";
	// elt1.style.height = "100%";
	elt2.style.width = "58%";
	document.body.getElementsByTagName('canvas')[0].style.width ="100%";
	// elt1.style.display = "block";
	var btn = document.getElementsByClassName("close-classic")[0];
	btn.style.display = "block";
}

//Cacher le contenu d'un mini cube (popin)
function popinhide(){
	var elt1 = document.getElementsByClassName("popin")[0];
	var elt2 = document.getElementsByClassName("cube")[0];
	// document.body.getElementsByTagName('canvas')[0].style.transition = "width 2.0s";	
	// elt1.style.transition = "display 2.0s";
	elt1.style.transition = "width 2.0s";
	elt1.style.width = "0px";
	// elt1.style.height = "0px";
	elt2.style.width = "100%";
	document.body.getElementsByTagName('canvas')[0].style.width ="100%";
	// elt1.style.display = "none";
	var btn = document.getElementsByClassName("close-classic")[0];
	btn.style.display = "none";
	
}

// Click handler pour Mini Cube 1 : Traitement aprés le click.
function objectClickHandler1() {
	if(clicked1 == false) {
		mesh1.position.set(objectSize/2+13, objectSize/2+13, -objectSize/2-13);
		mesh2.position.set(-objectSize/2-3, objectSize/2+3, -objectSize/2-3);
		mesh3.position.set(objectSize/2+3, -objectSize/2-3, objectSize/2+3);
		mesh4.position.set(-objectSize/2-3, -objectSize/2-3, objectSize/2+3);
		mesh5.position.set(objectSize/2+3, -objectSize/2-3, -objectSize/2-3);
		mesh6.position.set(-objectSize/2-3, -objectSize/2-3, -objectSize/2-3);
		mesh7.position.set(objectSize/2+3, objectSize/2+3, objectSize/2+3);
		mesh8.position.set(-objectSize/2-3, objectSize/2+3, objectSize/2+3);
		clicked1 = true;
		clicked2 = false;
		clicked3 = false;
		clicked4 = false;
		clicked5 = false;
		clicked6 = false;
		clicked7 = false;
		clicked8 = false;
		popinshow();
		//contenu de la div
		var texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis orci diam. Vivamus dapibus nisl in bibendum blandit. Vivamus eget nisi eu eros dignissim vulputate quis dictum felis. Praesent ac mi vel purus viverra molestie pretium eget libero. Donec finibus sit amet purus nec lacinia. Aenean vitae lacus libero. Aenean nec sodales erat, eget rhoncus ipsum. Phasellus diam nulla, interdum nec lorem ac, sodales sagittis nisi. Curabitur porta non enim et dictum. Proin non mi augue. Nam nisl purus, facilisis vel orci et, aliquam varius ligula. Nulla vel volutpat purus. In posuere tincidunt maximus. Vestibulum rutrum sodales odio, at imperdiet libero placerat vitae. Etiam pulvinar libero convallis sodales placerat."+
		
		"Ut mattis ipsum in lectus hendrerit varius. Nulla facilisi. Aliquam turpis elit, ullamcorper et venenatis sed, porttitor at velit. Nam metus tortor, efficitur eu libero at, placerat viverra est. Vestibulum semper fermentum vulputate. Quisque at lectus vitae purus elementum luctus vitae quis ligula. Donec commodo erat eget eros venenatis dapibus. Suspendisse fringilla ut quam at eleifend. Nullam non velit eu arcu viverra imperdiet ac et sapien.";
		// content = texto+"</p>";
		document.getElementById("content").innerHTML = texto;
	}
	else {
		mesh1.position.set(objectSize/2+3, objectSize/2+3, -objectSize/2-3);
		clicked1 = false;
		popinhide();
	}
}

// Click handler pour Mini Cube 2 : Traitement aprés le click.
function objectClickHandler2() {
	if(clicked2 == false) {	
		mesh1.position.set(objectSize/2+3, objectSize/2+3, -objectSize/2-3);
		mesh2.position.set(-objectSize/2-13, objectSize/2+13, -objectSize/2-13);
		mesh3.position.set(objectSize/2+3, -objectSize/2-3, objectSize/2+3);
		mesh4.position.set(-objectSize/2-3, -objectSize/2-3, objectSize/2+3);
		mesh5.position.set(objectSize/2+3, -objectSize/2-3, -objectSize/2-3);
		mesh6.position.set(-objectSize/2-3, -objectSize/2-3, -objectSize/2-3);
		mesh7.position.set(objectSize/2+3, objectSize/2+3, objectSize/2+3);
		mesh8.position.set(-objectSize/2-3, objectSize/2+3, objectSize/2+3);
		clicked1 = false;
		clicked2 = true;
		clicked3 = false;
		clicked4 = false;
		clicked5 = false;
		clicked6 = false;
		clicked7 = false;
		clicked8 = false;
		popinshow();
		content = "<ul class=\"list-group\">"+
		"<li class=\"list-group-item active\">Active item 2</li>"+
		"<li class=\"list-group-item\">Second item</li>"+
		"</ul>"
		document.getElementById("content").innerHTML = content;
    }
	else {
		mesh2.position.set(-objectSize/2-3, objectSize/2+3, -objectSize/2-3);
		clicked2 = false;
		popinhide();
	}
}

// Click handler pour Mini Cube 3 : Traitement aprés le click.
function objectClickHandler3() {
	if(clicked3 == false) {
		mesh1.position.set(objectSize/2+3, objectSize/2+3, -objectSize/2-3);
		mesh2.position.set(-objectSize/2-3, objectSize/2+3, -objectSize/2-3);
		mesh3.position.set(objectSize/2+13, -objectSize/2-13, objectSize/2+13);
		mesh4.position.set(-objectSize/2-3, -objectSize/2-3, objectSize/2+3);
		mesh5.position.set(objectSize/2+3, -objectSize/2-3, -objectSize/2-3);
		mesh6.position.set(-objectSize/2-3, -objectSize/2-3, -objectSize/2-3);
		mesh7.position.set(objectSize/2+3, objectSize/2+3, objectSize/2+3);
		mesh8.position.set(-objectSize/2-3, objectSize/2+3, objectSize/2+3);
		clicked1 = false;
		clicked2 = false;
		clicked3 = true;
		clicked4 = false;
		clicked5 = false;
		clicked6 = false;
		clicked7 = false;
		clicked8 = false;
		popinshow();
		content = "<ul class=\"list-group\">"+
		"<li class=\"list-group-item active\">Active item 3</li>"+
		"<li class=\"list-group-item\">Second item</li>"+
		"</ul>"
		document.getElementById("content").innerHTML = content;
    }
	else{
		mesh3.position.set(objectSize/2+3, -objectSize/2-3, objectSize/2+3);
		clicked3 = false;
		popinhide();
	}
}

// Click handler pour Mini Cube 4 : Traitement aprés le click.
function objectClickHandler4() {
	if(clicked4 == false) {
        mesh1.position.set(objectSize/2+3, objectSize/2+3, -objectSize/2-3);
		mesh2.position.set(-objectSize/2-3, objectSize/2+3, -objectSize/2-3);
		mesh3.position.set(objectSize/2+3, -objectSize/2-3, objectSize/2+3);
		mesh4.position.set(-objectSize/2-13, -objectSize/2-13, objectSize/2+13);
		mesh5.position.set(objectSize/2+3, -objectSize/2-3, -objectSize/2-3);
		mesh6.position.set(-objectSize/2-3, -objectSize/2-3, -objectSize/2-3);
		mesh7.position.set(objectSize/2+3, objectSize/2+3, objectSize/2+3);
		mesh8.position.set(-objectSize/2-3, objectSize/2+3, objectSize/2+3);
		clicked1 = false;
		clicked2 = false;
		clicked3 = false;
		clicked4 = true;
		clicked5 = false;
		clicked6 = false;
		clicked7 = false;
		clicked8 = false;
		popinshow();
		content = "<ul class=\"list-group\">"+
		"<li class=\"list-group-item active\">Active item 4</li>"+
		"<li class=\"list-group-item\">Second item</li>"+
		"</ul>"
		document.getElementById("content").innerHTML = content;
    }
	else {
		mesh4.position.set(-objectSize/2-3, -objectSize/2-3, objectSize/2+3);
		clicked4 = false;
		popinhide();
	}
}

// Click handler pour Mini Cube 5 : Traitement aprés le click.
function objectClickHandler5() {
	if(clicked5 == false) {
        mesh1.position.set(objectSize/2+3, objectSize/2+3, -objectSize/2-3);
		mesh2.position.set(-objectSize/2-3, objectSize/2+3, -objectSize/2-3);
		mesh3.position.set(objectSize/2+3, -objectSize/2-3, objectSize/2+3);
		mesh4.position.set(-objectSize/2-3, -objectSize/2-3, objectSize/2+3);
		mesh5.position.set(objectSize/2+10, -objectSize/2-10, -objectSize/2-10);
		mesh6.position.set(-objectSize/2-3, -objectSize/2-3, -objectSize/2-3);
		mesh7.position.set(objectSize/2+3, objectSize/2+3, objectSize/2+3);
		mesh8.position.set(-objectSize/2-3, objectSize/2+3, objectSize/2+3);
		clicked1 = false;
		clicked2 = false;
		clicked3 = false;
		clicked4 = false;
		clicked5 = true;
		clicked6 = false;
		clicked7 = false;
		clicked8 = false;
		popinshow();
		content = "<ul class=\"list-group\">"+
		"<li class=\"list-group-item active\">Active item 5</li>"+
		"<li class=\"list-group-item\">Second item</li>"+
		"</ul>"
		document.getElementById("content").innerHTML = content;
    }
	else {
		mesh5.position.set(objectSize/2+3, -objectSize/2-3, -objectSize/2-3);
		clicked5 = false;
		popinhide();
	}
}

// Click handler pour Mini Cube 6 : Traitement aprés le click.
function objectClickHandler6() {
	if(clicked6 == false) {
        mesh1.position.set(objectSize/2+3, objectSize/2+3, -objectSize/2-3);
		mesh2.position.set(-objectSize/2-3, objectSize/2+3, -objectSize/2-3);
		mesh3.position.set(objectSize/2+3, -objectSize/2-3, objectSize/2+3);
		mesh4.position.set(-objectSize/2-3, -objectSize/2-3, objectSize/2+3);
		mesh5.position.set(objectSize/2+3, -objectSize/2-3, -objectSize/2-3);
		mesh6.position.set(-objectSize/2-13, -objectSize/2-13, -objectSize/2-13);
		mesh7.position.set(objectSize/2+3, objectSize/2+3, objectSize/2+3);
		mesh8.position.set(-objectSize/2-3, objectSize/2+3, objectSize/2+3);
		clicked1 = false;
		clicked2 = false;
		clicked3 = false;
		clicked4 = false;
		clicked5 = false;
		clicked6 = true;
		clicked7 = false;
		clicked8 = false;
		popinshow();
		content = "<ul class=\"list-group\">"+
		"<li class=\"list-group-item active\">Active item 6</li>"+
		"<li class=\"list-group-item\">Second item</li>"+
		"</ul>"
		document.getElementById("content").innerHTML = content;
    }
	else {
		mesh6.position.set(-objectSize/2-3, -objectSize/2-3, -objectSize/2-3);
		clicked6 = false;
		popinhide();
	}
}

// Click handler pour Mini Cube 7 : Traitement aprés le click.
function objectClickHandler7() {
	if(clicked7 == false) {
        mesh1.position.set(objectSize/2+3, objectSize/2+3, -objectSize/2-3);
		mesh2.position.set(-objectSize/2-3, objectSize/2+3, -objectSize/2-3);
		mesh3.position.set(objectSize/2+3, -objectSize/2-3, objectSize/2+3);
		mesh4.position.set(-objectSize/2-3, -objectSize/2-3, objectSize/2+3);
		mesh5.position.set(objectSize/2+3, -objectSize/2-3, -objectSize/2-3);
		mesh6.position.set(-objectSize/2-3, -objectSize/2-3, -objectSize/2-3);
		mesh7.position.set(objectSize/2+13, objectSize/2+13, objectSize/2+13);
		mesh8.position.set(-objectSize/2-3, objectSize/2+3, objectSize/2+3);
		clicked1 = false;
		clicked2 = false;
		clicked3 = false;
		clicked4 = false;
		clicked5 = false;
		clicked6 = false;
		clicked7 = true;
		clicked8 = false;
		popinshow();
		content = "<ul class=\"list-group\">"+
		"<li class=\"list-group-item active\">Active item 7</li>"+
		"<li class=\"list-group-item\">Second item</li>"+
		"</ul>"
		document.getElementById("content").innerHTML = content;
    }
	else {
		mesh7.position.set(objectSize/2+3, objectSize/2+3, objectSize/2+3);
		clicked7 = false;
		popinhide();
	}
}

// Click handler pour Mini Cube 8 : Traitement aprés le click.
function objectClickHandler8() {
	if(clicked8 == false) {
        mesh1.position.set(objectSize/2+3, objectSize/2+3, -objectSize/2-3);
		mesh2.position.set(-objectSize/2-3, objectSize/2+3, -objectSize/2-3);
		mesh3.position.set(objectSize/2+3, -objectSize/2-3, objectSize/2+3);
		mesh4.position.set(-objectSize/2-3, -objectSize/2-3, objectSize/2+3);
		mesh5.position.set(objectSize/2+3, -objectSize/2-3, -objectSize/2-3);
		mesh6.position.set(-objectSize/2-3, -objectSize/2-3, -objectSize/2-3);
		mesh7.position.set(objectSize/2+3, objectSize/2+3, objectSize/2+3);
		mesh8.position.set(-objectSize/2-13, objectSize/2+13, objectSize/2+13);
		clicked1 = false;
		clicked2 = false;
		clicked3 = false;
		clicked4 = false;
		clicked5 = false;
		clicked6 = false;
		clicked7 = false;
		clicked8 = true;
		popinshow();
		content = "<ul class=\"list-group\">"+
		"<li class=\"list-group-item active\">Active item 8</li>"+
		"<li class=\"list-group-item\">Second item</li>"+
		"</ul>"
		document.getElementById("content").innerHTML = content;
    }
	else {
		mesh8.position.set(-objectSize/2-3, objectSize/2+3, objectSize/2+3);
		clicked8 = false;
		popinhide();
	}
}

// Aprés redimensionnement
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.getElementsByTagName('canvas')[0].style.width ="100%";
}

//Creer BoxGeometry
function createBoxGeometry(){
	return new THREE.BoxGeometry(objectSize, objectSize, objectSize, 10, 10, 10);
}

//Creer Mesh
function createMesh(geometry, material) {
	var mesh = new THREE.Mesh(geometry, material);
	mesh.castShadow = true;
	mesh.receiveShadow = true;
	return mesh;
}

//Permet la creation des texture
function createTexture(txt){
	var dynamicTexture	= new THREEx.DynamicTexture(512, 512);
	dynamicTexture.context.font	= "bolder 55px Verdana";
	// dynamicTexture.canvas.color = "0x0071ff";
	dynamicTexture.texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
	dynamicTexture.clear('white').drawText(txt, undefined, 256, 'black');
	return dynamicTexture;
}
	
//Fonction initiale
function init() {
	//Ajouter une scene
	scene = new THREE.Scene();
	
	//Ajouter une camera
	camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 250;
	camera.position.y = 150;
	camera.position.x = 150;
	camera.lookAt(scene.position);
	
	//Ajouter le renderer
	renderer = new THREE.WebGLRenderer({
            alpha: true,antialias: true
        });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor( 0xffffff);
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.BasicShadowMap;
	// renderer.shadowMap.renderReverseSided = true;
	
	//Create a PointLight and turn on shadows for the light
	// LIGHTS
	ambientLight = new THREE.AmbientLight(0xffffff, 1);
	// ambientLight.position.set(150,150,150);
	scene.add(ambientLight);
	
	light1 = new THREE.PointLight(0xffffff, 0.8, 18);
	light1.position.set(0,0,0);
	light1.castShadow = true;
	// Will not light anything closer than 0.1 units or further than 25 units
	light1.shadow.camera.near = camera.near;
	light1.shadow.camera.far = camera.far;
	scene.add(light1);
    
	//Controller
	var orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
	
	//Texture
	dynamicTexture1 = createTexture("Integration");
	dynamicTexture2 = createTexture("Web");
	dynamicTexture3 = createTexture("Big Data");
	dynamicTexture4 = createTexture("DevOps");
	dynamicTexture5 = createTexture("Langage");
	dynamicTexture6 = createTexture("Database");
	dynamicTexture7 = createTexture("Message Broker");
	dynamicTexture8 = createTexture("TTest");
	
	//Creation des materials pour chaques faces de cube
	var cube1Materials = [
	new THREE.MeshPhongMaterial({map : dynamicTexture1.texture, color : colours[0], side: THREE.DoubleSide}),
	new THREE.MeshPhongMaterial({map : dynamicTexture1.texture, color : colours[0], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({color : colours[0], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({color : colours[0], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({map : dynamicTexture1.texture, color : colours[0], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({map : dynamicTexture1.texture, color : colours[0], side: THREE.DoubleSide})];
	
	var cube2Materials = [
	new THREE.MeshPhongMaterial({map : dynamicTexture2.texture, color : colours[1], side: THREE.DoubleSide}),
	new THREE.MeshPhongMaterial({map : dynamicTexture2.texture, color : colours[1], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({color : colours[1], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({color : colours[1], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({map : dynamicTexture2.texture, color : colours[1], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({map : dynamicTexture2.texture, color : colours[1], side: THREE.DoubleSide})];
	
	var cube3Materials = [
	new THREE.MeshPhongMaterial({map : dynamicTexture3.texture, color : colours[2], side: THREE.DoubleSide}),
	new THREE.MeshPhongMaterial({map : dynamicTexture3.texture, color : colours[2], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({color : colours[2], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({color : colours[2], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({map : dynamicTexture3.texture, color : colours[2], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({map : dynamicTexture3.texture, color : colours[2], side: THREE.DoubleSide})];
	
	var cube4Materials = [
	new THREE.MeshPhongMaterial({map : dynamicTexture4.texture, color : colours[3], side: THREE.DoubleSide}),
	new THREE.MeshPhongMaterial({map : dynamicTexture4.texture, color : colours[3], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({color : colours[3], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({color : colours[3], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({map : dynamicTexture4.texture, color : colours[3], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({map : dynamicTexture4.texture, color : colours[3], side: THREE.DoubleSide})];
	
	var cube5Materials = [
	new THREE.MeshPhongMaterial({map : dynamicTexture5.texture, color : colours[4], side: THREE.DoubleSide}),
	new THREE.MeshPhongMaterial({map : dynamicTexture5.texture, color : colours[4], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({color : colours[4], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({color : colours[4], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({map : dynamicTexture5.texture, color : colours[4], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({map : dynamicTexture5.texture, color : colours[4], side: THREE.DoubleSide})];
	
	var cube6Materials = [
	new THREE.MeshPhongMaterial({map : dynamicTexture6.texture, color : colours[5], side: THREE.DoubleSide}),
	new THREE.MeshPhongMaterial({map : dynamicTexture6.texture, color : colours[5], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({color : colours[5], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({color : colours[5], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({map : dynamicTexture6.texture, color : colours[5], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({map : dynamicTexture6.texture, color : colours[5], side: THREE.DoubleSide})];
	
	var cube7Materials = [
	new THREE.MeshPhongMaterial({map : dynamicTexture7.texture, color : colours[6], side: THREE.DoubleSide}),
	new THREE.MeshPhongMaterial({map : dynamicTexture7.texture, color : colours[6], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({color : colours[6], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({color : colours[6], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({map : dynamicTexture7.texture, color : colours[6], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({map : dynamicTexture7.texture, color : colours[6], side: THREE.DoubleSide})];
	
	var cube8Materials = [
	new THREE.MeshPhongMaterial({map : dynamicTexture8.texture, color : colours[7], side: THREE.DoubleSide}),
	new THREE.MeshPhongMaterial({map : dynamicTexture8.texture, color : colours[7], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({color : colours[7], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({color : colours[7], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({map : dynamicTexture8.texture, color : colours[7], side: THREE.DoubleSide}), //null texture
	new THREE.MeshPhongMaterial({map : dynamicTexture8.texture, color : colours[7], side: THREE.DoubleSide})];
	
    // Création des geometries
    var boxGeometry1 = createBoxGeometry();
    var boxGeometry2 = createBoxGeometry();
    var boxGeometry3 = createBoxGeometry();
    var boxGeometry4 = createBoxGeometry();
    var boxGeometry5 = createBoxGeometry();
    var boxGeometry6 = createBoxGeometry();
    var boxGeometry7 = createBoxGeometry();
    var boxGeometry8 = createBoxGeometry();
	
	//Création des mini cubes
    mesh1 = createMesh(boxGeometry1, cube1Materials);
    mesh2 = createMesh(boxGeometry2, cube2Materials);
    mesh3 = createMesh(boxGeometry3, cube3Materials);
    mesh4 = createMesh(boxGeometry4, cube4Materials);
    mesh5 = createMesh(boxGeometry5, cube5Materials);
    mesh6 = createMesh(boxGeometry6, cube6Materials);
    mesh7 = createMesh(boxGeometry7, cube7Materials);
    mesh8 = createMesh(boxGeometry8, cube8Materials);
	
	
	//Réglage de position des mini cubes
    mesh1.position.set(objectSize/2+3, objectSize/2+3, -objectSize/2-3);
	mesh2.position.set(-objectSize/2-3, objectSize/2+3, -objectSize/2-3);
	mesh3.position.set(objectSize/2+3, -objectSize/2-3, objectSize/2+3);
	mesh4.position.set(-objectSize/2-3, -objectSize/2-3, objectSize/2+3);
	mesh5.position.set(objectSize/2+3, -objectSize/2-3, -objectSize/2-3);
	mesh6.position.set(-objectSize/2-3, -objectSize/2-3, -objectSize/2-3);
	mesh7.position.set(objectSize/2+3, objectSize/2+3, objectSize/2+3);
	mesh8.position.set(-objectSize/2-3, objectSize/2+3, objectSize/2+3);
	
	//ClickHandler des mini cubes
	mesh1.callback = objectClickHandler1;
	mesh2.callback = objectClickHandler2;
	mesh3.callback = objectClickHandler3;
	mesh4.callback = objectClickHandler4;
	mesh5.callback = objectClickHandler5;
	mesh6.callback = objectClickHandler6;
	mesh7.callback = objectClickHandler7;
	mesh8.callback = objectClickHandler8;
 
    //Ajout du cube general avec les mini cubes
    cube = new THREE.Object3D();
	cube.add(mesh1);
	cube.add(mesh2);
	cube.add(mesh3);
	cube.add(mesh4);
	cube.add(mesh5);
	cube.add(mesh6);
	cube.add(mesh7);
	cube.add(mesh8);

	cube.castShadow = true;
	cube.receiveShadow = true;
	
	//Create a helper for the shadow camera (optional)
	// var helper = new THREE.CameraHelper( light.shadow.camera );
	// scene.add(	helper);
	
	//Ajouter les elements à la scene
	scene.add(cube);
    
    //Element HTML concerné
    var container = document.getElementById('canvasContainer');
	container.appendChild(renderer.domElement);
	
	//Camera controls
	function enableCameraControl() {
		orbitControl.noRotate = false;
	}

	function disableCameraControl() {
		orbitControl.noRotate = true;
	}

    window.addEventListener('resize', onWindowResize, false);
}

//Permet de parametrer les dimensions
function resizeCanvasToDisplaySize() {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (canvas.width !== width ||canvas.height !== height) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}

//Permet l'animation du cube
function animate() {
    renderer.render(scene, camera);
	requestAnimationFrame(animate);
	resizeCanvasToDisplaySize();
	cube.rotation.y = (cube.rotation.y + 0.005) % maxRotation;
	cube.position.set(0,0,0);
}

requestAnimationFrame(animate);

//Traitement lors du chargement de page
window.onload = function() {
    init();
    animate();

    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();

    function onDocumentMouseDown(event) {
        event.preventDefault();

        mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
        mouse.y =  - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        meshObjects = [mesh1, mesh2, mesh3, mesh4, mesh5, mesh6, mesh7, mesh8]; // three.js objects with click handlers we are interested in
        
        var intersects = raycaster.intersectObjects(meshObjects);

        if (intersects.length > 0) {
            intersects[0].object.callback();
        }

    }

    function onDocumentMouseMove(event) {
        event.preventDefault();

        mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
        mouse.y =  - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
		var meshes = [mesh1, mesh2, mesh3, mesh4, mesh5, mesh6, mesh7, mesh8];
        var intersects = raycaster.intersectObjects([mesh1, mesh2, mesh3, mesh4, mesh5, mesh6, mesh7, mesh8]);
        var canvas = document.body.getElementsByTagName('canvas')[0];
		
        if (intersects.length > 0) {
            //intersects[0].object.rotation.x += .005;
			switch(meshes) {
				case meshes[1] : $('[data-toggle="popover"]').popover();break;
				default : break;
			}
            canvas.style.cursor = "pointer";
        } else {
            canvas.style.cursor = "default";
        }

    }

    document.addEventListener('mousedown', onDocumentMouseDown, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
};