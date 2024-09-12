let images = [
  "img/card/card1.png",
  "img/card/card2.png",
  "img/card/card3.png",
  "img/card/card4.png",
  "img/card/card5.png",
  "img/card/card6.png",
];
let i = 0;
let ref;

function picLibrary() {
  document.getElementById("card1").src = images[i];
  if (i >= images.length) {
    i = 0;
  }
}

function start() {
  ref = setInterval(picLibrary, 200);
}

function stop() {
  clearInterval(ref);
}

const cardElement = document.getElementById("card1");
cardElement.addEventListener("mouseover", stop); // Ajouter l'écouteur d'événement
cardElement.addEventListener("mouseout", start); // Ajouter l'écouteur d'événement

// Optionnel : Démarrer l'animation au chargement

start();
