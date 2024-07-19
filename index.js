// SELECTEURS
// document.querySelector('h4').style.background = "yellow";
// const balisehtml = document.querySelector("h4");
// console.log(balisehtml);

// CLICK event

// Always declare variables at the top of the script
// Select elements and name variables meaningfully
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector("p");

// console.log(btn1, btn2);
// console.log(questionContainer);

// Inject border radius, use camel case correctly
// questionContainer.style.borderRadius = '150px';
// Always log when adding an event listener to see if it works
questionContainer.addEventListener("click", () => {
    // questionContainer.style.border = "3px solid red"; // For borders on login pages

    // To inject a CSS class when you have many styles to change, use .add, .remove, .toggle
    // Here, if the class exists, it removes it; otherwise, it adds it
    questionContainer.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
    response.classList.add("show-response");  // Use classList.add correctly
    response.style.background = "green";
});

btn2.addEventListener("click", () => {
    response.classList.add("show-response");  // Use classList.add correctly
    response.style.background = "red";
});

// #id-.class-basilse html priority in css language

// ----------------------------------------------------
// Mouse Events
const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove", (e)=>{
mousemove.style.left=e.pageX +"px";
mousemove.style.top=e.pageY +"px";
});

window.addEventListener("mousedown", ()=>{
    // console.log("test");
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", ()=>{
    // console.log("test");
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";

});

questionContainer.addEventListener("mousecenter", ()=>{
    questionContainer.style.background = "green";
});
questionContainer.addEventListener("mouseout", ()=>{
    questionContainer.style.background = "pink";
});
questionContainer.addEventListener("mouseover", ()=>{
    // questionContainer.style.transform = "rotate(2deg)";
});

//------------------------------------
//keyPress event
const keyPressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

// (key) ,key + "mp3" ; ring(e.key)si on vouudrait avoir un audio pour chaque touche on pourra renoper entrer par la lettre de la touche appuyer et modif la foncftion ring avec key parammetre et key qui est la touche tapper
const ring = ()=>{
    const audio = new Audio();
    audio.src = "./Enter.mp3";
    audio.play();
};


document.addEventListener("keypress", (e)=>{
    // console.log(e.key);
    key.textContent = e.key;

    if(e.key==="j"){
        keyPressContainer.style.background ="pink";
    } else if(e.key ==="h"){
        keyPressContainer.style.background ="teal"; 
    }else {
        keyPressContainer.style.background ="red";
    }

    ring();
    // if(e.key ==="z") ring(e.key);
});

//-------------------------
//scrollEvent

const nav = document.querySelector("nav");

window.addEventListener("scroll", ()=>{
    console.log(window.scrollY);
    if(window.scrollY > 100){
    nav.style.top = 0;
}else {
    nav.style.top ="-50px";
}
});

//------------------------------------------
// Form event
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = "";
let language = "";


inputName.addEventListener("input", (e)=>{
    pseudo = e.target.value;
});

select.addEventListener("input", (e)=>{
    //  console.log(e.target.value);
    language = e.target.value;
});

// quand on soumet ca change de page alors en affichant dans console rien napparait alors on utilise e.prevendefault pour annuler le chargement page
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    // js connait cgv , buton et checkbox pas besoin de declarer
console.log(cgv.checked);
    if(cgv.checked){
        // le div na pas d'id pas besoin de le declaré.. on peut lui injecter des balise directement avec innerhtml
        document.querySelector('form > div').innerHTML = `
            <h3>Pseudo : ${pseudo}</h3>
            <h4>Langage préféré: ${language}</h4>
        `;
    }else{
        alert('Veuillez accepter les cgv');
    }
});

//----------------------------------------------

// load event se declenche quand la page a ete chargé
window.addEventListener("load", ()=>{
    console.log("Document Chargé !");
})
//-------------------------------------------------

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("click", (e)=>{
        console.log(e.target);
        e.target.style.transform = "scale(0.7)";
    });

});
//-------------------------
// addEventListener vs onclick
// ne pas declare directement les onclick sur les elts
// document.body.onclick = function(){

// };
//Bubbling == fin(de base l'evenlistener est paramétré en mode bubling) en remontant site go make things
document.body.addEventListener("click", ()=>{
    console.log("click 1!")
});

//Usecapture  declenche en descendant
document.body.addEventListener("click", ()=>{
    console.log("click 2!")
},
true
);
// liens dans le support cours pour approfondir

//-------------------------------------
// utiliser pour qun elt n'écrase pas l'autre stitpropagation
// questionContainer.addEventListener("click", (e)=>{
//     alert("Test !");
//     e.stopPropagation(); 
// } );
    /// removeEventListener   juste bon à savoir

    //-------------------------------------------------
    // dernier chapitre  : BOM= broswer object model au dessus de tout 


// console.log(window.innerHeight);
// window.open("http://google.com", "cours js", "height=600", "width=800");
// window.close();

//évènement adossés à windows

btn2.addEventListener("click", ()=>{
    confirm("Voulez-vous vraiment cliquer ?"); 
} );

let answer;
//prompt  += pour ne pas ecrasé ce qu'il yavait avant le promt sur l'elt html
btn1.addEventListener("click", ()=>{
  answer =  prompt("Entrez votre nom ?"); 

 questionContainer.innerHTML += 
            "<h3>Bravo " + answer + "</h3>";
        
} );

setTimeout( ()=>{
    //logique à exécuter--timer compte à rebour  temps en millisecondes avant de déclencher 2s
   questionContainer.style.borderRadius = "300px"
}, 2000 );


// boucle infini
// let interval = setInterval( ()=>{
//     document.body.innerHTML += 
//     `
//     <div class = 'box'>
//         <h2>Nouvelle Boite ! </h2>
//     </div>

    
//     `;

// }, 1000 );

// window.addEventListener("click", (e)=>{
//     // e.target.remove();
// clearInterval(interval);
// });

//location
// ou on est exactement
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);

// location.replace("http://lequipe.fr");

// window.onload = () => {
//     location.replace("https://openclassrooms.com/"); 
// };

// console.log(navigator.userAgent);
// window.history.back();
// history.go(-2);
