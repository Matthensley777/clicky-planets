

var getPlanets = document.getElementById('showPlanets');
var planetHolderDiv = document.getElementById('planetHolder');

var planets = [
	{
		name:"Mercury",
		url: "https://www.nasa.gov/sites/default/files/mercury_1.jpg"
	},
	{
		name:"Venus",
		url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg"
	},
	{
		name:"Earth",
		url: "https://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg"
	},
	{
		name:"Mars",
		url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mars_23_aug_2003_hubble.jpg/275px-Mars_23_aug_2003_hubble.jpg"
	},
	{
		name:"Jupiter",
		url: "https://svs.gsfc.nasa.gov/vis/a010000/a012000/a012021/JupiterThumbnailSmall.png"
	},
	{
		name:"Saturn",
		url: "http://nssdc.gsfc.nasa.gov/image/planetary/saturn/saturn.jpg"
	},
	{
		name:"Uranus",
		url: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg"
	},
	{
		name:"Neptune",
		url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/260px-Neptune_Full.jpg"
	},

];

function writeToDom(){
	planetHolderDiv.innerHTML = "";
	for(i = 0; i < planets.length; i++){
	var newPlanet ="";
	newPlanet+= `<div class="planetBox", id="planetBox-${i}">`
	newPlanet+=`<div class="planetName"> ${planets[i].name} </div>`;
	newPlanet+= `</div>`
	planetHolderDiv.innerHTML += newPlanet;
}
}

getPlanets.addEventListener("click", writeToDom);








