//importing class and land lists from modules

import { landOne, landTwo } from "./landTypes.js";
import { classHS, aspects } from "./classpects.js";

//setting up blank variables for later randomised outputs to be saved to.
let randClass = ""
let randAspect = ""
let randLandOne = ""
let randLandTwo = ""

const classpectRand = list => {
    let listLen = list.length;
    let rand = Math.floor(Math.random()*listLen);
    let randItem = list[rand]
    return randItem
}

//calling the classpect randomiser on the random class variable and assigning the output to it.
randClass = classpectRand(classHS)
//console.log(randClass)

//calling the classpect randomiser on the random aspect variable and assigning the output to it.
randAspect = classpectRand(aspects)
//console.log(randAspect)


const landRandomiser = () => {
    //setting up empty arrays to be filled with whichever land arrays match the random aspect chosen earlier.
    let landOneArr = []
    let landTwoArr = []
    //switch statement assigning the matching land arrays to the empty arrays.
    switch (randAspect) {
        case 'Blood':
            landOneArr = landOne.Blood;
            landTwoArr = landTwo.Blood;
            break;
        case 'Breath':
            landOneArr = landOne.Breath;
            landTwoArr = landTwo.Breath;
            break;
        case 'Doom':
            landOneArr = landOne.Doom;
            landTwoArr = landTwo.Doom;
            break;
        case 'Heart':
            landOneArr = landOne.Heart;
            landTwoArr = landTwo.Heart;
            break;
        case 'Hope':
            landOneArr = landOne.Hope;
            landTwoArr = landTwo.Hope;
            break;
        case 'Life':
            landOneArr = landOne.Life;
            landTwoArr = landTwo.Life;
            break;
        case 'Light':
            landOneArr = landOne.Light;
            landTwoArr = landTwo.Light;
            break;
        case 'Mind':
            landOneArr = landOne.Mind;
            landTwoArr = landTwo.Mind;
            break;
        case 'Rage':
            landOneArr = landOne.Rage;
            landTwoArr = landTwo.Rage;
            break;
        case 'Space':
            landOneArr = landOne.Space;
            landTwoArr = landTwo.Space;
            break;
        case 'Time':
            landOneArr = landOne.Time;
            landTwoArr = landTwo.Time;
            break;
        case 'Void':
            landOneArr = landOne.Void;
            landTwoArr = landTwo.Void;
            break;
        default:
            landOneArr = "ERROR";
            landTwoArr = "ERROR";
            break;
    }
    //setting the length for the randomizer as more lands may be added in future, so the length will not always be known.
    let lenOne = landOneArr.length
    let lenTwo = landTwoArr.length
    //generating different random numbers so you're less likely to get repeats
    let randNumOne = Math.floor(Math.random()*lenOne)
    let randNumTwo = Math.floor(Math.random()*lenTwo)
    //assigning outputs to blank variables for lands
    randLandOne = landOneArr[randNumOne]
    randLandTwo = landTwoArr[randNumTwo]
}

landRandomiser()
//console.log(randLandOne)
//console.log(randLandTwo)

const randAll = () => {
    randClass = classpectRand(classHS)
    randAspect = classpectRand(aspects)
    landRandomiser()
    let output = `You are the ${randClass} of ${randAspect} and your land is the Land of ${randLandOne} and ${randLandTwo}.`
    document.getElementById("output").innerText = output
}



console.log(`You are the ${randClass} of ${randAspect} and your land is the Land of ${randLandOne} and ${randLandTwo}.`)

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("generateBtn").addEventListener("click", randAll);
});