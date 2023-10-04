export class Voiture {
    constructor(private service:string){}//entre parenthése ce sont des arguments ou parametres
    public marque:string // je definie une propriété public
    private run:boolean // je definie une propriété private
    
    
    start(){ // je definie une methode
        this.run=true // this pour apeller et assigner une valeur
        var car:string
    }

    stop(){// je definie une methode
        this.run=false // this pour apeller et assigner une valeur
    }
    

}

const voiture1 = new Voiture("") // je creer une constante pour stocker mon objet Voiture et new c'est pour instancier la class

voiture1.marque="mercedes" //j'assigne une valeur a la propriéte marque
voiture1.start() // j'apelle la methode start
voiture1.stop()  // j'apelle la methode stop

