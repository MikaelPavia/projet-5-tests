// Boucles FOR 

const passengers = [
    "Will Alexander",
    "Sarah Kate",
    "Audrey Simon",
    "Tao Perkington"

]

const max = 2;

console.log(passengers)

for (let i in passengers) {
    if (i === "0") { console.log("Bravo..." + passengers[i]) }
    else if (i < max) { console.log(i) }
    else { console.log("L'avion est plein, le passager " + passengers[i] + " ne peut pas passer") }
}

for (let passenger of passengers) {
    console.log("Embarquement du passager " + passenger);
}


/////////////////////////////////////////////////////////////////////////////////////

let placesLeft = 23;
let carsToPark = 21;
let carsParked = 0;

for (let i = 0; i < placesLeft && i < carsToPark; i++) {
    carsParked++;
}
console.log("Toutes les voitures sont garées")


/////////////////////////////////////////////////////////////////////////////////////


const cars = [
    "Audi A1",
    "Audi A3",
    "Audi RS6"
]


const carsMax = 2;


for (let car of cars) {
    console.log("Stationnement de la " + car)
}



for (let i in cars) {
    if (i == 0) { console.log("Cette " + cars[i] + " est très chouette") }
    if (i < carsMax) {
        console.log(i)
    }
    else { console.log("Il y a trop de voitures") }
}

/////////////////////////////////////////////////////////////////////////////////////


const newCar = [

    {
        brand: "Alfa Roméo",
        price: "30000"
    },

    {
        brand: "BMW",
        price: "45000"
    },

    {
        brand: "Porsche",
        price: "200000"
    },

    {
        brand: "Ferrari",
        price: "450000"
    }

]

newCar.push({
    brand: "Audi",
    price: "50000"

});

const maxPrice = 150000;

for (let i in newCar) {
    // console.log(newCar[i].brand)
    if (newCar[i].price < maxPrice) {
        console.log("Tu as les moyens d'acheter cette " + newCar[i].brand)
    }
    else { console.log("Tu n'as pas les moyens de t'acheter cette " + newCar[i].brand) }
}



console.log(newCar.length)

console.log(newCar)

console.log(newCar[2].brand + " " + newCar[2].price)


/////////////////////////////////////////////////////////////////////////////////////

const measures = [108, 111, 117, 107, 109, 114]

let sum = 0;

for (let measure of measures) {
    sum += measure;
}
console.log(sum)

console.log(sum / measures.length)

/////////////////////////////////////////////////////////////////////////////////////

let episodesHasBeenWatched = 0;
let episodesToWatch = 25;
let totalEpisodes = 25;


for (i = 0; i < totalEpisodes; i++) {
    episodesHasBeenWatched++;
    episodesToWatch--;
}
console.log("Tu as déjà regardé " + episodesHasBeenWatched + " épisodes ! ");
console.log("Il te reste " + episodesToWatch + " épisode(s) à regarder ");
console.log(i)


/////////////////////////////////////////////////////////////////////////////////////

const characters = [
    {
        name: "Harry Potter",
        status: "Wizard"
    },

    {
        name: "Ronald Weasley",
        status: "Wizard"
    },

    {
        name: "Albus Dumbledore",
        status: "Wizard"
    },

    {
        name: "Pétunia Dursley",
        status: "Muggle"
    },
    {
        name: "Ginnie Weasley",
        status: ""
    }
]

for (let i in characters) {
    if (characters[i].status === "Wizard") {
        console.log("Félicitations, tu es un sorcier " + characters[i].name + " !")
    } else if (characters[i].status == "Muggle") {
        { console.log("Désolé, il semblerait que tu sois un(e) moldu(e) " + characters[i].name + " :( ") }
    } else {
        console.log("Tu n'as pas encore 11 ans, il faut patienter encore un peu " + characters[i].name + " !")
    }


}

/////////////////////////////////////////////////////////////////////////////////////


// ^^
/////////////////////////////////////////////////////////////////////////////////////


const celestialObjects = [
    {
        name: "Sun",
        type: "Star",
        earthDistance: "0.00001581"/*année-lumière*/
    },

    {
        name: "Neptune",
        type: "Planet",
        earthDistance: "0.000474375"
    },

    {
        name: "M81",
        type: "Galaxy",
        earthDistance: "12 000 000"
    },

    {
        name: "Andromeda",
        type: "Galaxy",
        earthDistance: "2 537 000"
    }
]

const distanceReasonable = 100000;
const distanceMax = 3000000;

for (let i in celestialObjects) {
    if (celestialObjects[i].earthDistance < distanceReasonable) {
        console.log("Le voyage est possible vers l'objet "
            + celestialObjects[i].name + " qui est de type : "
            + celestialObjects[i].type + " ! :)")

    } else if (celestialObjects[i].earthDistance > distanceReasonable && celestialObjects[i].earthDistance < distanceMax) {
        console.log("Le voyage vers " + celestialObjects[i].name
            + " sera long mais c'est possible, surtout pour observer un objet de type "
            + celestialObjects[i].type)

    } else {
        console.log("Le voyage vers " + celestialObjects[i].name + " est impossible car cet objet se situe à une distance de "
            + celestialObjects[i].earthDistance
            + " années-lumières, c'est souvent le cas avec les objets de type " + celestialObjects[i].type)
    }
}





console.log("La même chose avec un for of")

for (let celestialObject of celestialObjects) {
    if (celestialObject.earthDistance < distanceReasonable) {
        console.log("Le voyage est possible vers l'objet "
            + celestialObject.name + " qui est de type : "
            + celestialObject.type + " ! :)")

    } else if (celestialObject.earthDistance > distanceReasonable && celestialObject.earthDistance < distanceMax) {
        console.log("Le voyage vers " + celestialObject.name
            + " sera long mais c'est possible, surtout pour observer un objet de type "
            + celestialObject.type)

    } else {
        console.log("Le voyage vers " + celestialObject.name + " est impossible car cet objet se situe à une distance de "
            + celestialObject.earthDistance
            + " années-lumières, c'est souvent le cas avec les objets de type " + celestialObject.type)
    }
}


/////////////////////////////////////////////////////////////////////////////////////



// BOUCLES WHILE




while (placesLeft > 0 && carsToPark > 0) {
    carsParked++; // Une voiture est garée
    carsToPark--; // Une voiture à garer en moins
    placesLeft--; // Une place disponible en moins
}

console.log(carsParked)


/////////////////////////////////////////////////////////////////////////////////////




// CONDITIONS


let age = 15
let majorityInFrance = 18
let minAgeToWatchMovie = 13

if (age > majorityInFrance || age > minAgeToWatchMovie) {
    console.log("Vous pouvez regarder ce film !")
}

else { console.log("Vous ne pouvez pas regarder ce film !") }


/////////////////////////////////////////////////////////////////////////////////////


let UserLoggedIn = false;
if (UserLoggedIn) {
    console.log("Utilisateur connecté");
} else {
    console.log("Alerte, intrus!")
}


/////////////////////////////////////////////////////////////////////////////////////


// FONCTIONS


function adders(a, b) {
    return a + b;

}

console.log(adders(10, 7))

/////////////////////////////////////////////////////////////////////////////////////

function carre(nombre) {
    return nombre * nombre
}

console.log(carre(5))

/////////////////////////////////////////////////////////////////////////////////////

function estPair(nombre) {
    if (nombre % 2 == 0) {
        console.log("Ce nombre est pair");
    } else {
        console.log("Ce nombre est impair");
    }
}

estPair(15)

/////////////////////////////////////////////////////////////////////////////////////
setTimeout(function () {
    console.log("I'm here! Sorry I'm late!")

}, 5000);

console.log("Where are you ?");

/////////////////////////////////////////////////////////////////////////////////////

console.log(Math.floor(5.95));

/////////////////////////////////////////////////////////////////////////////////////

let late = document.getElementById('late');

// setTimeout(late.style.backgroundColor = 'red', 5000)

setTimeout(function () {
    late.style.backgroundColor = 'yellow'
    late.innerHTML = ('Je suis un peu en retard mais maintenant je suis coloré !')
}, 5000);

/////////////////////////////////////////////////////////////////////////////////////
function afficherDeuxValeurs(valeur1, valeur2) {
    console.log("Ici j'affiche la " + valeur1);
    console.log("Ici j'affiche la " + valeur2);
}

afficherDeuxValeurs('Première valeur', 'Deuxième valeur');

/////////////////////////////////////////////////////////////////////////////////////

function change() {
    let carre = document.querySelector('.blue');
    carre.classList.toggle('red')
}

// SWITCH

let firstFirefighterRank = {
    name: "John Doe",
    age: 23,
    rank: "sergent"
};

switch (firstFirefighterRank.rank) {
    case 'caporal':
        console.log('Tu es caporal !');


        break;
    case 'caporal-chef':
        console.log('Tu es caporal-chef !');

        break;
    case 'sergent':
        console.log("Félicitations " + firstFirefighterRank.name +
            " tu es " + firstFirefighterRank.rank + " à " + firstFirefighterRank.age + " ans !")

        break;

    default:
        console.log('Grade inconnu');
}

/////////////////////////////////////////////////////////////////////////////////////



let secondFireFighterRank = {
    name: "John Doe",
    age: 20,
    rank: "caporal-chef"
};


switch (secondFireFighterRank.rank) {
    case 'caporal':
        console.log('Tu es caporal !');

        break;
    case 'caporal-chef':
        console.log('Félicitations ' + secondFireFighterRank.name + " tu es " + secondFireFighterRank.rank + " à " + secondFireFighterRank.age + " ans !")


        break;
    case 'sergent':
        console.log('Tu es sergent !');

        break;

    default:
        console.log("Grade inconnu");
}

/////////////////////////////////////////////////////////////////////////////////////
// OBJETS

let episode = {
    title: " La légende du kiwi ",
    duration: 45,
    hasBeenWatched: "Yes"
}

let episodeTitle = episode.title;
let episodeDuration = episode.duration;

console.log(episodeTitle);
console.log(episodeDuration);


/////////////////////////////////////////////////////////////////////////////////////


// MANIPULATION DU DOM

var div = document.getElementById('hello');
//   document.getElementsByTagName('div');
//   document.getElementsByClassName('hello');

// document.querySelector('.hello')             Pour sélectionner les éléments CSS
// document.querySelector('#hello')

// div.innerHTML = "Hello world";
div.classList.add('red')

div.classList.remove('red')
console.log(div);

var p = document.getElementById('paragraphe');
p.style.color = 'red';

/////////////////////////////////////////////////////////////////////////////////////

let btn = document.getElementById('btn');
btn.onclick = function () {
    let carre = document.querySelector('.blue');
    carre.classList.toggle('red')
}


/////////////////////////////////////////////////////////////////////////////////////



const testClick = document.getElementById('btn');

testClick.addEventListener('click', function () {
    testClick.innerHTML = "C'est cliqué !";
});


/////////////////////////////////////////////////////////////////////////////////////            
const testOver = document.getElementById('white');
testOver.addEventListener('mouseover', function () {
    testOver.innerHTML = "C'est survolé !";
    testOver.style.backgroundColor = 'red';
});


/////////////////////////////////////////////////////////////////////////////////////


const testInput = document.getElementById('email');
console.log(testInput)
testInput.addEventListener('input', function (e) {
    let value = e.target.value;
    if (value.startsWith('Hello ')) {
        isValid = true;
    } else {
        isValid = false;
    }
});


/////////////////////////////////////////////////////////////////////////////////////

let divBrands = document.getElementById('brands');

const brands = [
    " Nike",
    " Adidas",
    " Asics",
    " Under Armour",
    " Puma"
]



// divBrands.innerHTML = "<ul>";

let ul = "<ul>";

for (let i in brands) {
    // divBrands.innerHTML = divBrands.innerHTML + "<li>" + brands[i] + "</li>";
    // divBrands.innerHTML = "Voici la liste des marques que j'aime bien :" +  brands.join( );
    ul = ul + "<li>" + brands[i] + "</li>";
    console.log(brands[i])
}

ul = ul + "</ul>";
console.log(ul);
divBrands.innerHTML = ul;
// divBrands.innerHTML = divBrands.innerHTML + "</ul>";


let liste = document.createElement("ul");
console.log(liste);

liste.append("Je suis dans la liste")

divBrands.append(liste)

for (let brand of brands) {
    let elementListe = document.createElement("li");
    // elementListe.append(brand);
    elementListe.innerText = brand;
    liste.append(elementListe);
}

/////////////////////////////////////////////////////////////////////////////////////




const sentences = [
    "Je suis le paragraphe 1  ",
    "Je suis le paragraphe 2  ",
    "Je suis le paragraphe 3  ",
    "Je suis le paragraphe 4  ",
    "Je suis le paragraphe 5  ",
    "Je suis le paragraphe 6  "
]

let divParagrapheTest = document.createElement("div");

console.log(divParagrapheTest);

// paragrapheTest.append("Bonjour, je suis le nouveau paragraphe");

// divBrands.append(paragrapheTest);

for (let i in sentences) {
    let paragrapheTest = document.createElement("p")
    paragrapheTest.innerText = sentences[i];
    divParagrapheTest.append(paragrapheTest)
    if (i % 2 === 0) {
        paragrapheTest.style.color = 'red';
        paragrapheTest.innerHTML = "Je suis habillé en rouge ! "
    }
    else {
        paragrapheTest.style.color = "blue";
        paragrapheTest.innerHTML = "Je suis habillé en bleu !"
    }


}

divBrands.append(divParagrapheTest)

const boutonInverse = document.getElementById('bouton');

// boutonInverse.addEventListener('click', changeColor())



let blueText = document.getElementById('bloc_test_color_change_1');
let redText = document.getElementById('bloc_test_color_change_2');
let boutonChange2 = document.getElementById('bouton_2');
let nbClicks = 0;
blueText.style.color = 'blue';
redText.style.color = 'red';
blueText.innerHTML = "Je suis rouge !";
redText.innerHTML = "Je suis bleu !";

let paragraphes = divParagrapheTest.querySelectorAll('p');

console.log(paragraphes)

boutonChange2.addEventListener('click', function () {
    nbClicks++;

    // if (nbClicks % 2 === 0 ){
    //     blueText.style.color = 'red';
    //     blueText.innerHTML = "Je suis rouge !";

    //     redText.style.color = 'blue';
    //     redText.innerHTML = "Je suis bleu !";

    //     boutonChange2.innerHTML = "Cliquez pour les embêter à nouveau !";
    // }else {
    //     blueText.style.color = 'blue';
    //     blueText.innerHTML = "Je ne me reconnais plus :(";

    //     redText.style.color = 'red';
    //     redText.innerHTML = "Moi non plus :(";

    //     boutonChange2.innerHTML = "Cliquez ici pour rétablir les choses ! ";
    // }






    // paragraphes = Array.from(paragraphes);  Car on transforme le get element en tableau

    // for (let i in paragraphes){
    //     if (nbClicks % 2 === 0){
    //         if (i % 2 === 0){
    //             paragraphes[i].style.color = 'red';
    //         }else{
    //             console.log(paragraphes[i])
    //             paragraphes[i].style.color = 'blue';

    //         }
    //     }else{
    //         if (i % 2 === 0){
    //             paragraphes[i].style.color = 'blue';
    //         }else{
    //             console.log(paragraphes[i])
    //             paragraphes[i].style.color = 'red';
    //         }
    //     }
    // }











    // paragraphes.forEach(function(paragraphe, i){
    //     if (nbClicks % 2 === 0){
    //         if (i % 2 === 0){
    //             paragraphe.style.color = 'red';
    //         }else{
    //             console.log(paragraphes[i])
    //             paragraphe.style.color = 'blue';


    //         }
    //     }else{
    //         if (i % 2 === 0){
    //             paragraphe.style.color = 'blue';
    //         }else{
    //             console.log(paragraphes[i])
    //             paragraphe.style.color = 'red';
    //         }
    //     }
    // })

    paragraphes.forEach(function (paragraphe) {

        if (paragraphe.style.color === 'blue') {
            paragraphe.style.color = 'red';
        } else {
            paragraphe.style.color = 'blue';
        }
    })
})



// boutonFonct.addEventListener('click', function(){
//     divBtns.innerHTML = 'Coucou';
// })
// function aa () {
//     boutonFonct.addEventListener('click', function(){
//         divBtns.innerHTML = 'Coucou';
//     })
// }

// aa()

// let divBtns = document.getElementById('boutons');
// let boutonsFonctNonFonct = document.getElementsByClassName('boutons_fonct');
// let boutonFonct = document.getElementsByClassName('btn_fonct');
// let boutonNonFonct = document.getElementsByClassName('btn_non_fonct');

// boutonFonct = true;
// boutonNonFonct = false; 

// console.log(boutonFonct);
// console.log(boutonNonFonct);
// console.log(boutonsFonctNonFonct);

// boutonsFonctNonFonct.addEventListener('click', function(){
//     boutonFonct.innerHTML = "Cool";
// })




// let nonFonctionnel = document.querySelector('.btn_non_fonct');

// document.querySelectorAll('.bouton_fonct').forEach(item => {
//     item.addEventListener('click', event => {


//     })
// })




// let divBtns2 = document.getElementById('boutons_test');
// let buttonClicked = false;

// window.addEventListener('load', function(){
// console.log(buttonClicked)
// boutonFonct.addEventListener('click', function(){
//     buttonClicked = true;
//     console.log(buttonClicked);
// })})









// let a = nonFonctionnel.addEventListener('click', function(){}) == true;

// console.log(a)
// if(a === true){
//     divBtns2.innerHTML = "yesss"
// }else {
//     divBtns2.innerHTML = "noooo"
// }
// function clickChange(){
//     if (nbClicks % 2 === 0 ){
//         blueText.style.color = 'red';
//         redText.style.color = 'blue';
//     }else {
//         blueText.style.color = 'blue';
//         redText.style.color = 'red';
//     }
//     nbClicks=nbClicks+1;
// }
// console.log(nbClicks)
// boutonChange2.addEventListener('click', cccc())
// boutonChange2.innerHTML = "Alors, est-ce que ça marche ?";


/////////////////////////////////////////////////////////////////////////////////////


let x = 15;

switch (x) {
    case 2:
        console.log('x contient 2');

        break;
    case 15:
        console.log('x contient 15');

        break;

    default:
        console.log('x ne contient ni 2 ni 15');
}


function ajoute(a, b) {
    return a + b;
}



console.log(ajoute(10, 15))

function nom(prenom) {
    return "Bonjour, je m'appelle" + prenom;
}

console.log(nom(" Mika"))

function boucle(chiffre) {
    for (i = 0; i < chiffre; i++) {
        if (0 == i) {
            i += 2
        } else {
            i++
        }
        console.log(i)
    }
    return i
}
console.log(boucle(16))


// let boutons = document.getElementsByClassName("clickable")

// console.log(boutons)

// for (let i = 0; i < boutons.length; i++) {
//     console.log(boutons[i])
//     boutons[i].addEventListener('click', function() {
//         if (i != 1) {
//             alert('Ce bouton fonctionne')
//         }else {
//             alert('Celui-ci est cassé')
//         }
//     }

// )}


let boutons = document.getElementsByTagName('button')

console.log(boutons)

for (let i = 0; i < boutons.length; i++) {
    console.log(boutons[i])
    boutons[i].addEventListener('click', function() {
        if (boutons[i].this.classList.toggle === "broken") {
            alert('Ce bouton fonctionne')
        }else {
            alert('Celui-ci est cassé')
        }
    }

)}
// console.log(boutons.length)

// for (let i = 0; i < boutons.length; i++) {
//     console.log(boutons[i])
//     boutons[i].addEventListener('click', function() {
//         if (.classList.contains(broken)) {
//             alert('Ce bouton fonctionne')
//         }else {
//             alert('Celui-ci est cassé')
//         }
//     }

// )}

// let button = document.getElementsByTagName("button");
// console.log(button)
// let classes = button.classList;

// console.log(classes)
// let result = button.includes('clickable');




// let buttons = document.getElementsByTagName("p");
// let classes = buttons.classList;


// console.log(buttons)
// console.log(result)

// console.log(button.classList.contains("clickable"));

// const str = 'one two three';

// const result1 = str.includes('two');
// console.log(result1)


// for (let i in paragraphes){
//     if (nbClicks % 2 === 0){
//         if (i % 2 === 0){
//             paragraphes[i].style.color = 'red';
//         }else{
//             console.log(paragraphes[i])
//             paragraphes[i].style.color = 'blue';

//         }
//     }else{
//         if (i % 2 === 0){
//             paragraphes[i].style.color = 'blue';
//         }else{
//             console.log(paragraphes[i])
//             paragraphes[i].style.color = 'red';
//         }
//     }
// }


const promptTest = document.getElementById('prompt_test')

let promptButton = document.getElementById('prompt_button');

promptButton.addEventListener('click', function(){
    let Prompt = prompt('SHOOT or DRIBBLE')

    if (window.returnValue === 'Dribble'){
        prompt("coool") 

        if (Prompt === 'shot'){
            prompt("yesssss")
        }else {
            prompt("oopsiii")

            if (Prompt === 'pass'){
                prompt("nooooo")
            }else{
                prompt("Try again")
            }
        }

    }else {
        prompt("dommage")
    }
})

// const input = prompt("What's your name?");
// alert('Your name is' + input);