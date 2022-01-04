function getValue(){
	var randomArray = new Array("Avestruz", "Águia", "Burro", "Borboleta", "Cachorro", "Cabra", "Carneiro", 
	"Camelo", "Cobra", "Coelho", "Cavalo", "Elefante", "Galo", "Gato", "Jacaré", "Leão", "Macaco", "Porco", 
	"Pavão", "Peru", "Touro", "Tigre", "Urso", "Veado", "Vaca");
	var random = randomArray[Math.floor(Math.random() * randomArray.length)];

	document.getElementById("message").innerHTML = random;
}
