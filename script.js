
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

// les petits chats qui bougent
// import des objets 
import images from "./_shared/img/chats/*.jpg";

// nbr image = 11 
let nbrImage = countKey(images)
window.addEventListener("load", ()=>{

	afficheImage();
});
// je récupère le nb de clé dans mon objet
function countKey (obj){
	return Object.keys(obj).length;
}
// je mélange mes images
let randomizeCat = (cat)=>{
	let i = 0;
	let j = 0;
	let temp;
	for (let elem in cat) {

		i = nbrImage-1;
		j = Math.floor(Math.random() * (nbrImage));

		temp = cat["chat"+i];
		
		cat["chat"+i] = cat["chat"+j];
		
		cat["chat"+j] = temp;

		
	}
	return cat;
}


// je crée une sting pour afficher les images
let afficheImage = ()=> {

	let toAdd = "";
	for (let i = 0; i < nbrImage; i++) {
		toAdd += "<img src='"+images["chat"+i]+"'/>"

	}
	document.querySelector("#cat").innerHTML = toAdd;
}

// faire une fonction qui efface toutes les images 
let deleteImage =()=>{

	let ImageCats = document.getElementById('cat');

	while (ImageCats.firstChild) {
		ImageCats.removeChild(ImageCats.firstChild);

	};
}
// au click
// je randomize les images
// je les efface
// je les affiche randomizé 
document.querySelector("#btn").addEventListener("click", () => {
	randomizeCat(images);
	deleteImage();
	afficheImage();

});
console.log("Hey look in your browser console. It works!");

