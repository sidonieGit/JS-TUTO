// Tableau de couleurs à utiliser pour l'animation
let colors = ["green", "yellow", "red", "black", "light"];
let j = 0; // Index pour suivre la couleur actuelle
let ref; // Référence pour l'intervalle d'animation
let isDragging = false; // État pour déterminer si l'élément est en train d'être déplacé
let offsetX, offsetY; // Décalages pour le déplacement de l'élément
let mouseOver = false; // Variable pour suivre l'état de survol de la souris

// Fonction qui gère l'animation lors d'un double clic
function gestionnaireAnimate() {
  let card = document.getElementById("card"); // Récupère l'élément à animer
  let position = 0; // Position initiale pour l'animation
  card.innerHTML = "Vous venez de faire un double clic"; // Affiche un message sur l'élément

  // Fonction d'animation
  function animate() {
    if (position < 500) {
      // Vérifie si la position est inférieure à 500
      position++; // Incrémente la position
      card.style.left = position + "px"; // Déplace l'élément vers la droite
      requestAnimationFrame(animate); // Appelle la fonction d'animation à chaque frame

      // Si la souris est au-dessus de l'élément, arrête l'animation
      if (mouseOver) {
        stop(); // Arrête l'animation
        card.style.transform = "none"; // Réinitialise la transformation
        card.style.borderRadius = "none"; // Réinitialise le border-radius
      }
    }
  }

  animate(); // Démarre l'animation
}

// Fonction pour changer les propriétés de l'élément
function picLibrary() {
  let card = document.getElementById("card"); // Récupère l'élément à styliser
  card.style.marginTop = "100px"; // Position verticale
  card.style.height = "300px"; // Hauteur de l'élément
  card.style.width = "400px"; // Largeur de l'élément
  card.style.textAlign = "center"; // Centre le texte
  card.style.paddingTop = "100px"; // Espacement supérieur
  card.style.background = colors[j]; // Change la couleur de fond en fonction de l'index j

  // Si la souris est au-dessus de l'élément, arrête l'animation
  if (mouseOver) {
    stop(); // Arrête l'animation
  }

  card.style.position = "relative"; // Nécessaire pour utiliser 'left' et 'top'
  j++; // Incrémente l'index de couleur
  if (j >= colors.length) {
    j = 0; // Réinitialise à 0 si l'index dépasse la longueur du tableau
  }
}

// Fonction pour styliser l'élément avec des coins arrondis
function picLibraryRounded() {
  let card = document.getElementById("card"); // Récupère l'élément à styliser
  card.style.marginTop = "100px"; // Position verticale
  card.style.height = "300px"; // Hauteur de l'élément
  card.style.width = "400px"; // Largeur de l'élément
  card.style.borderRadius = "50%"; // Arrondit les coins
  card.style.transform = "rotate(300deg)"; // Applique une rotation
  card.style.background = colors[j]; // Change la couleur de fond

  // Si la souris est au-dessus de l'élément, arrête l'animation
  if (mouseOver) {
    stop(); // Arrête l'animation
  }

  card.style.position = "relative"; // Nécessaire pour utiliser 'left' et 'top'
  j++; // Incrémente l'index de couleur
  if (j >= colors.length) {
    j = 0; // Réinitialise à 0 si l'index dépasse la longueur du tableau
  }
}

// Fonction pour démarrer l'animation avec picLibrary
function start() {
  ref = setInterval(picLibrary, 200); // Démarre un intervalle qui appelle picLibrary toutes les 200 ms
}

// Fonction pour démarrer l'animation avec picLibraryRounded
function startClick() {
  let card = document.getElementById("card"); // Récupère l'élément
  ref = setInterval(picLibraryRounded, 200); // Démarre un intervalle qui appelle picLibraryRounded
  card.innerHTML = "Bravo, vous venez de faire un clic"; // Affiche un message
}

// Fonction pour arrêter l'animation
function stop() {
  clearInterval(ref); // Arrête l'intervalle d'animation
}

// Fonction pour gérer l'événement de survol
function onMouseOver() {
  mouseOver = true; // Met à jour l'état lorsque la souris est au-dessus
  let card = document.getElementById("card");
  card.innerHTML = "Survole"; // Change le texte affiché
  card.style.transform = "none"; // Réinitialise la transformation
  card.style.borderRadius = "none"; // Réinitialise le border-radius
  stop(); // Arrête l'animation
}

// Fonction pour gérer l'événement de sortie de la souris
function onMouseOut() {
  mouseOver = false; // Met à jour l'état lorsque la souris sort
  let card = document.getElementById("card");
  card.innerHTML =
    "Merci de passer au prochain événement <br> Maintenez la souris et déplacez l'élément"; // Affiche un message
  start(); // Redémarre l'animation
}

// Fonction pour gérer l'événement de début de déplacement
function onMouseDown(e) {
  isDragging = true; // Indique que l'élément est en cours de déplacement
  offsetX = e.clientX - e.target.offsetLeft; // Calcule le décalage horizontal
  offsetY = e.clientY - e.target.offsetTop; // Calcule le décalage vertical
}

// Fonction pour gérer le déplacement de l'élément
function onMouseMove(e) {
  if (isDragging) {
    // Si l'élément est en cours de déplacement
    let card = document.getElementById("card"); // Récupère l'élément
    card.style.left = e.clientX - offsetX + "px"; // Met à jour la position horizontale
    card.style.top = e.clientY - offsetY + "px"; // Met à jour la position verticale
  }
}

// Fonction pour gérer la fin du déplacement
function onMouseUp() {
  isDragging = false; // Indique que l'élément n'est plus en cours de déplacement
}

// Ajout des écouteurs d'événements
const cardElement = document.getElementById("card"); // Récupère l'élément
if (cardElement) {
  cardElement.addEventListener("mouseover", onMouseOver);
  cardElement.addEventListener("mouseout", onMouseOut);
  cardElement.addEventListener("mousedown", onMouseDown);
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
  document.addEventListener("click", startClick);
  document.addEventListener("dblclick", gestionnaireAnimate);
}

// Démarre l'animation au chargement de la page
start();
