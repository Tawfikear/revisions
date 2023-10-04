// creer un tableau avec des chiffres.
// afficher la somme du tableau, utiliser boucle for

//let tableau = [10,20,30,40,50];
//let somme = 0;
//for (let i=0; i<tableau.length;i++){
//somme = somme + tableau[i]
//}
//console.log(somme)


// le produit de chaque element( multiplier)
// let tableau = [10,20,30,40,50];
// let produit = 1

// for (let i=0; i<tableau.length;i++){
//     produit = produit * tableau[i]
//     }
//     console.log(produit)

//calculer la moyenne.
// let tableau = [10,20,30,40,50];
// let somme = 0
// let moyenne = 0
// for (let i=0; i<tableau.length; i++) {
//     somme = somme + tableau [i]
    
// }

//console.log (somme/tableau.length)


// tableau paire et impaire
 //let tableau = [1,2,3,4,5,6,7,8,9]
// for (let i=0; i<tableau.length; i++){
//     if( tableau[i]%2===0)
//     console.log(`${tableau[i]} est pair`)
//     else
//     console.log(`${tableau [i]} n'est pas pair`)
// }

// tableau pour compter le nombre de 5
// let tableau = [5,5,5,5,5,6,7,8,9]
// let occ = 0
// for (let i=0; i<tableau.length; i++){
//     if(tableau[i]===5)
//     occ=occ+1
// }
// console.log(occ)

// compter le nombre de lettre identique
// let phrase = "bonjour mr tawfik"
// let occ = 0
// for(let i=0; i<phrase.length; i++){
//     if(phrase[i] ==="r")
//     occ = occ+1
// }
// console.log(occ)

//mettre le nombre de lettre
// let phrase = "bonjour mr tawfik"
// let occ = 0
// for(let i=0; i<phrase.length; i++){
//     if(phrase.charAt(i)==="t"){
//         occ = occ+1

//     }
// }

// console.log(occ)

//Écris une fonction JavaScript 
//qui prend une chaîne de caractères en entrée et retourne 
//la même chaîne, mais avec les mots en ordre inversé. 
//Par exemple, "Bonjour tout le monde" devrait devenir "monde le tout Bonjour".
//1) inverser les lettres
let phrase = "bonjour tout le monde"
let phraseInverse = ""

for(let i=phrase.length-1; i>=0; i--){
    phraseInverse += phrase[i]
    
}
console.log(phraseInverse)




    







