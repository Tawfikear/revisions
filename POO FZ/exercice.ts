// Exercice 1

class Personne {
    constructor( a:string,  b:string, c:number){
        this.nom=a
        this.prenom=b
        this.age=c
    }
   nom:string
   prenom:string
   age:number

   anniversaire(){
    this.age++
   }
   


}

// exercice 2

const personne1= new Personne("xavier","roy",19)
const personne2= new Personne("steph","yor",20)
const personne3= new Personne("nicolas","prince",25)

console.log(personne1,personne2,personne3)

personne1.anniversaire()
console.log(personne1.age)

// exercice 3
