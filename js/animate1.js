let colors = ["green", "yellow", "red", "black", "light"];
let j = 0;
let ref;

function picLibrary() {
  card = document.getElementById("card");
  card.style.marginTop = "100px";
  card.style.height = "300px";
  card.style.width = "400px";
  card.style.background = colors[j];
  card.style.position = "relative";
  j++;
  if (j >= colors.length) {
    j = 0; // Réinitialiser j à 0
  }
}

function start() {
  ref = setInterval(picLibrary, 200);
}

function stop() {
  clearInterval(ref);
}

let button = document.getElementById("moveButton");
button.style.backgroundColor = "pink";
button.addEventListener("dblclick", gestionnaireAnimate);

function gestionnaireAnimate() {
  let card = document.getElementById("card");
  let position = 0; // Position initiale

  // Fonction d'animation
  function animate() {
    if (position < 500) {
      // Vérifier si la position est inférieure à 500
      position++; // Incrémenter la position
      card.style.left = position + "px"; // Déplacer l'élément vers la droite
      requestAnimationFrame(animate); // Appeler la fonction d'animation à chaque frame
    }
  }

  animate(); // Démarrer l'animation
}

const cardElement = document.getElementById("card");
if (cardElement) {
  // Vérifiez si l'élément existe
  cardElement.addEventListener("mouseover", stop); // Ajouter l'écouteur d'événement pour les couleurs
  cardElement.addEventListener("mouseout", start); // Ajouter l'écouteur d'événement pour les couleurs
}
start();
