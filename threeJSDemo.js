//Variables générales
var cube, objectSize, mesh1, mesh2, mesh3, mesh4, mesh5, mesh6, mesh7, mesh8, camera, scene, renderer,content;

//Boolean pour vérification de click sur les mini cubes.
var clicked1 = clicked2 = clicked3 = clicked4 = clicked5 = clicked6 = clicked7 = clicked8 = buttonClick = false;

//Les textures des mini cubes
var texture1 = new THREE.TextureLoader().load('../integration.jpg');
var texture2 = new THREE.TextureLoader().load('../DOTNET.jpg');
var texture3 = new THREE.TextureLoader().load('../python.png');
var texture4 = new THREE.TextureLoader().load('../logo1.png');
var texture5 = new THREE.TextureLoader().load('../logo1.png');
var texture6 = new THREE.TextureLoader().load('../logo1.png');
var texture7 = new THREE.TextureLoader().load('../logo1.png');
var texture8 = new THREE.TextureLoader().load('../logo1.png');

//Gere le button fermer de la popin
function buttonClicked() {
	
	if(buttonClick == false) {
		popinhide();
	}
	else {
	buttonClick = true;
	popinshow();
	}
}

//Longueur d'un arret d'un mini cube
objectSize = 65;
var maxRotation = 2 * Math.PI;

//Affiche le contenu d'un mini cube (popin)
function popinshow(){
	//Element HTML (div) à traiter
	var div1 = document.getElementById("canvasContainer");
	var div2 = document.getElementById("popin");
	div1.style.width = "58%";
	div2.style.width = "42%";
	div2.style.display = "block";
	document.body.getElementsByTagName('canvas')[0].style.width ="100%";
}

//Cacher le contenu d'un mini cube (popin)
function popinhide(){
	document.getElementById("popin").style.width = "0%";
	document.getElementById("canvasContainer").style.width = "100%";
	document.body.getElementsByTagName('canvas')[0].style.width ="100%";
	document.getElementById("popin").style.display='none';
}

// Click handler pour Mini Cube 1 : Traitement aprés le click.
function objectClickHandler1() {
	if(clicked1 == false) {
		mesh1.position.set(objectSize/2+10, objectSize/2+10, -objectSize/2-10);
		mesh2.position.set(-objectSize/2, objectSize/2, -objectSize/2);
		mesh3.position.set(objectSize/2, -objectSize/2, objectSize/2);
		mesh4.position.set(-objectSize/2, -objectSize/2, objectSize/2);
		mesh5.position.set(objectSize/2, -objectSize/2, -objectSize/2);
		mesh6.position.set(-objectSize/2, -objectSize/2, -objectSize/2);
		mesh7.position.set(objectSize/2, objectSize/2, objectSize/2);
		mesh8.position.set(-objectSize/2, objectSize/2, objectSize/2);
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
		mesh1.position.set(objectSize/2, objectSize/2, -objectSize/2);
		clicked1 = false;
		popinhide();
	}
}

// Click handler pour Mini Cube 2 : Traitement aprés le click.
function objectClickHandler2() {
	if(clicked2 == false) {	
		mesh1.position.set(objectSize/2, objectSize/2, -objectSize/2);
		mesh2.position.set(-objectSize/2-10, objectSize/2+10, -objectSize/2-10);
		mesh3.position.set(objectSize/2, -objectSize/2, objectSize/2);
		mesh4.position.set(-objectSize/2, -objectSize/2, objectSize/2);
		mesh5.position.set(objectSize/2, -objectSize/2, -objectSize/2);
		mesh6.position.set(-objectSize/2, -objectSize/2, -objectSize/2);
		mesh7.position.set(objectSize/2, objectSize/2, objectSize/2);
		mesh8.position.set(-objectSize/2, objectSize/2, objectSize/2);		
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
		mesh2.position.set(-objectSize/2, objectSize/2, -objectSize/2);
		clicked2 = false;
		popinhide();
	}
}

// Click handler pour Mini Cube 3 : Traitement aprés le click.
function objectClickHandler3() {
	if(clicked3 == false) {
		mesh1.position.set(objectSize/2, objectSize/2, -objectSize/2);
		mesh2.position.set(-objectSize/2, objectSize/2, -objectSize/2);
		mesh3.position.set(objectSize/2+10, -objectSize/2-10, objectSize/2+10);
		mesh4.position.set(-objectSize/2, -objectSize/2, objectSize/2);
		mesh5.position.set(objectSize/2, -objectSize/2, -objectSize/2);
		mesh6.position.set(-objectSize/2, -objectSize/2, -objectSize/2);
		mesh7.position.set(objectSize/2, objectSize/2, objectSize/2);
		mesh8.position.set(-objectSize/2, objectSize/2, objectSize/2);
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
		mesh3.position.set(objectSize/2, -objectSize/2, objectSize/2);
		clicked3 = false;
		popinhide();
	}
}

// Click handler pour Mini Cube 4 : Traitement aprés le click.
function objectClickHandler4() {
	if(clicked4 == false) {
        mesh1.position.set(objectSize/2, objectSize/2, -objectSize/2);
		mesh2.position.set(-objectSize/2, objectSize/2, -objectSize/2);
		mesh3.position.set(objectSize/2, -objectSize/2, objectSize/2);
		mesh4.position.set(-objectSize/2-10, -objectSize/2-10, objectSize/2+10);
		mesh5.position.set(objectSize/2, -objectSize/2, -objectSize/2);
		mesh6.position.set(-objectSize/2, -objectSize/2, -objectSize/2);
		mesh7.position.set(objectSize/2, objectSize/2, objectSize/2);
		mesh8.position.set(-objectSize/2, objectSize/2, objectSize/2);
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
		mesh4.position.set(-objectSize/2, -objectSize/2, objectSize/2);
		clicked4 = false;
		popinhide();
	}
}

// Click handler pour Mini Cube 5 : Traitement aprés le click.
function objectClickHandler5() {
	if(clicked5 == false) {
        mesh1.position.set(objectSize/2, objectSize/2, -objectSize/2);
		mesh2.position.set(-objectSize/2, objectSize/2, -objectSize/2);
		mesh3.position.set(objectSize/2, -objectSize/2, objectSize/2);
		mesh4.position.set(-objectSize/2, -objectSize/2, objectSize/2);
		mesh5.position.set(objectSize/2+10, -objectSize/2-10, -objectSize/2-10);
		mesh6.position.set(-objectSize/2, -objectSize/2, -objectSize/2);
		mesh7.position.set(objectSize/2, objectSize/2, objectSize/2);
		mesh8.position.set(-objectSize/2, objectSize/2, objectSize/2);
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
		mesh5.position.set(objectSize/2, -objectSize/2, -objectSize/2);
		clicked5 = false;
		popinhide();
	}
}

// Click handler pour Mini Cube 6 : Traitement aprés le click.
function objectClickHandler6() {
	if(clicked6 == false) {
        mesh1.position.set(objectSize/2, objectSize/2, -objectSize/2);
		mesh2.position.set(-objectSize/2, objectSize/2, -objectSize/2);
		mesh3.position.set(objectSize/2, -objectSize/2, objectSize/2);
		mesh4.position.set(-objectSize/2, -objectSize/2, objectSize/2);
		mesh5.position.set(objectSize/2, -objectSize/2, -objectSize/2);
		mesh6.position.set(-objectSize/2-10, -objectSize/2-10, -objectSize/2-10);
		mesh7.position.set(objectSize/2, objectSize/2, objectSize/2);
		mesh8.position.set(-objectSize/2, objectSize/2, objectSize/2);
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
		mesh6.position.set(-objectSize/2, -objectSize/2, -objectSize/2);
		clicked6 = false;
		popinhide();
	}
}

// Click handler pour Mini Cube 7 : Traitement aprés le click.
function objectClickHandler7() {
	if(clicked7 == false) {
        mesh1.position.set(objectSize/2, objectSize/2, -objectSize/2);
		mesh2.position.set(-objectSize/2, objectSize/2, -objectSize/2);
		mesh3.position.set(objectSize/2, -objectSize/2, objectSize/2);
		mesh4.position.set(-objectSize/2, -objectSize/2, objectSize/2);
		mesh5.position.set(objectSize/2, -objectSize/2, -objectSize/2);
		mesh6.position.set(-objectSize/2, -objectSize/2, -objectSize/2);
		mesh7.position.set(objectSize/2+10, objectSize/2+10, objectSize/2+10);
		mesh8.position.set(-objectSize/2, objectSize/2, objectSize/2);
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
		mesh7.position.set(objectSize/2, objectSize/2, objectSize/2);
		clicked7 = false;
		popinhide();
	}
}

// Click handler pour Mini Cube 8 : Traitement aprés le click.
function objectClickHandler8() {
	if(clicked8 == false) {
        mesh1.position.set(objectSize/2, objectSize/2, -objectSize/2);
		mesh2.position.set(-objectSize/2, objectSize/2, -objectSize/2);
		mesh3.position.set(objectSize/2, -objectSize/2, objectSize/2);
		mesh4.position.set(-objectSize/2, -objectSize/2, objectSize/2);
		mesh5.position.set(objectSize/2, -objectSize/2, -objectSize/2);
		mesh6.position.set(-objectSize/2, -objectSize/2, -objectSize/2);
		mesh7.position.set(objectSize/2, objectSize/2, objectSize/2);
		mesh8.position.set(-objectSize/2-10, objectSize/2+10, objectSize/2+10);
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
		mesh8.position.set(-objectSize/2, objectSize/2, objectSize/2);
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

//Permet de Creer un matérial
function CreateMaterial(texture, color) {
	return new THREE.MeshBasicMaterial({
		map : texture,
		color : color,
		shininess: 50,
	    shading: THREE.SmoothShading
	});
}

//Creer BoxGeometry
function createBoxGeometry(){
	return new THREE.BoxGeometry(objectSize, objectSize, objectSize);
}

//Creer Mesh
function createMesh(geometry, material) {
	var mesh = new THREE.Mesh(geometry, material);
	mesh.castShadow = true;
	mesh.receiveShadow = true;
	return mesh;
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
	camera.lookAt(new THREE.Vector3(0,0,0));
	
	//Ajouter le renderer
	renderer = new THREE.WebGLRenderer({
            alpha: true,antialias: true
        });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMapType = THREE.PCFSoftShadowMap;
	// renderer.setClearColor( this.scene.fog.color1 );
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.renderReverseSided = true;
    
	//Controller
	var orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
	
	//Création des matérial pour les mini cubes
	var material1 = CreateMaterial(texture1,0xcc2900);
	var material2 = CreateMaterial(texture2,0xcc2900);
	var material3 = CreateMaterial(texture3,0xffff4d);
	var material4 = CreateMaterial(texture4,0xbf8040);
	var material5 = CreateMaterial(texture5,0x333399);
	var material6 = CreateMaterial(texture6,0x33cc33);
	var material7 = CreateMaterial(texture7,0x3399ff);
	var material8 = CreateMaterial(texture8,0xff9900);
	
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
    mesh1 = createMesh(boxGeometry1, material1);
    mesh2 = createMesh(boxGeometry2, material2);
    mesh3 = createMesh(boxGeometry3, material3);
    mesh4 = createMesh(boxGeometry4, material4);
    mesh5 = createMesh(boxGeometry5, material5);
    mesh6 = createMesh(boxGeometry6, material6);
    mesh7 = createMesh(boxGeometry7, material7);
    mesh8 = createMesh(boxGeometry8, material8);
	
	//Réglage de position des mini cubes
    mesh1.position.set(objectSize/2, objectSize/2, -objectSize/2);
	mesh2.position.set(-objectSize/2, objectSize/2, -objectSize/2);
	mesh3.position.set(objectSize/2, -objectSize/2, objectSize/2);
	mesh4.position.set(-objectSize/2, -objectSize/2, objectSize/2);
	mesh5.position.set(objectSize/2, -objectSize/2, -objectSize/2);
	mesh6.position.set(-objectSize/2, -objectSize/2, -objectSize/2);
	mesh7.position.set(objectSize/2, objectSize/2, objectSize/2);
	mesh8.position.set(-objectSize/2, objectSize/2, objectSize/2);
	
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
	
	//Ajouter les elements à la scene
	scene.add(camera);
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

//Permet l'animation du cube
function animate() {
    resizeCanvasToDisplaySize();
    renderer.render(scene, camera);
	requestAnimationFrame(animate);
	cube.rotation.y = (cube.rotation.y + 0.005) % maxRotation;
}

requestAnimationFrame(animate);

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