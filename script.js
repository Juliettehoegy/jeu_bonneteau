//recup button with ID
let btn = document.getElementById('btn')
btn.addEventListener('click', shuffle)

let redcard = 0;

// pour avoir une carte rouge random
shuffle()
function shuffle()
{
    let allcards = document.getElementsByClassName("img_card");
    allcards[redcard].setAttribute('src', "img/black.png")
    let random = Math.floor(Math.random() * allcards.length); //un nb au hasard
    let card = allcards[random];
    card.setAttribute('src', "img/red.png");
    redcard = random
    //console.log(card); //afficher dans la console la carte choisi aléatoirement 
}

// fct pour tourner la carte 
function flip(event)
{
    let element = event.currentTarget;
    if (element.className === "card") // si l'élément est strictement de la div card
// il check si la carte est dans la position 1 (0°), si oui, il rotate à 180°,
//et s'il n'est pas en p1 (0°), alors il rotate de 180° pour revenir à 0°.
    {
         if(element.style.transform == "rotateY(0deg)") //si card est comme ça 
         {
            element.style.transform = "rotateY(180deg)"; //alors tu le transforme comme ça (allée de la carte)
         }
        else
        {
            element.style.transform = "rotateY(0deg)"; //sinon tu retourne (retour de la carte)
        }
    }
}