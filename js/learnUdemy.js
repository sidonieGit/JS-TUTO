let nam = "John";
let age = 28;
let salary = 5000.23;
let arr = new Array(7, 2, 8, 1, 3, 4);
let uid = prompt("Enter User Id", "User Id");
let pwd = prompt("Enter Password", "Password");
let message = uid == "John" && pwd == "1234" ? "Welcome" : "Invalid User";
alert(message);

document.write("Name : " + nam + "<br/>");
document.write("Age : " + age + "<br/>");
document.write("Salary : " + salary + "<br/>");

document.write("<br/> <br/> Before sort...<br/>");
for (i = 0; i < 6; i++) {
  document.write(arr[i] + "<br/>");
}
for (i = 0; i < 6; i++) {
  for (j = 0; j < 5; j++) {
    if (arr[j] > arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
document.write("<br/> <br/> After sort...<br/>");
for (i = 0; i < 6; i++) {
  document.write(arr[i] + "<br/>");
}

function sayHello() {
  let usernameElement = document.getElementById("username");
  let userageElement = document.getElementById("userage");

  if (usernameElement.value == "" || userageElement.value == "") {
    return;
  } else {
    document.getElementById("sayhello").innerHTML =
      usernameElement.value + " is " + userageElement.value + " years old";
  }
}

document.getElementById("hello").addEventListener("click", sayHello);

function MouseOver() {
  document.getElementById("img1").src = "img/jsLogoYellow.png"; // Assurez-vous que le chemin est correct
}

function MouseOut() {
  document.getElementById("img1").src = "img/jslogo.png"; // Assurez-vous que le chemin est correct
}

function load() {
  document.getElementById("img1").src = "img/jsLogoYellow.png"; // Assurez-vous que le chemin est correct
}

window.onload = load; // Appel de la fonction load lorsque la fenêtre est chargée

document.getElementById("img1").addEventListener("mouseover", MouseOver);
document.getElementById("img1").addEventListener("mouseout", MouseOut);
