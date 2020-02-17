import { Component, OnInit } from '@angular/core';
import { AllumettesProviderService } from './service/allumettes-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

// Titre du jeu
title = 'Un petit jeu d\'allumettes';

// Nombre d'allumettes qui seront jouées
nbrAllumettes:number;

// Tableau d'entier qui représente les allumettes du jeu
allumettes:Array<number>;

// Score du premier joureur
scorePremJoueur:number = 0;

// Score du second joureur
scoreSecJoueur:number = 0;

// Message en fin de partie
messageFinPartie:string;

// Afficher ou pas le bouton passer
disableButton:boolean = true;

// Prend la valeur true si c'est au joueur 1 de jouer (init a true)
tourPremierJoueur:boolean = true;

constructor(private allumettesProvider : AllumettesProviderService) {}

ngOnInit(){
  this.getNbrAllumettes();
}

getNbrAllumettes(){
  // Réinitialisation du message de fin de partie
  this.messageFinPartie = '';

  this.disableButton = true;

  // Appel du service AllumettesProvider en asynchrone afin de récupérer le nombre d'allumettes de la partie
  this.allumettesProvider.provideAllumettes().subscribe(
    allumettes => { 
      this.allumettes = allumettes;
      this.nbrAllumettes = this.allumettes.length;
    },
    error => {
      console.log(error);
    }
  ); 
}

// Lancer un tour du jeu
JouerUnePartie (isPlayerOne:boolean, event:any){
  // Lire le nombre d'allumettes jouées
  let nbrAllumJouee = event.value;

   // Si le nombre d'allumettes restant est supérieur au nombre joué alors faire la soustraction
   if(this.allumettes.length > nbrAllumJouee ){
    this.allumettes.length = this.allumettes.length - nbrAllumJouee ;
  }
  else{
    // Sinon il ne reste plus d'allumette
    this.allumettes.length = 0;
  }

  // Remise par défaut de la valeur du boutton toggle
  event.source.buttonToggleGroup.value = undefined;

  // Vérifier si la partie est terminé
  if(this.allumettes.length === 0){
    // Incrémenter le score du joueur en cours
    this.tourPremierJoueur? this.scorePremJoueur++ : this.scoreSecJoueur++;

    // Afficher le message en fin de partie
    this.messageFinPartie="Bravo J" + (this.tourPremierJoueur? "1" : "2") + ", vous avez gangé cette partie. Cliquez ci-dessous pour passer à la manche suivante.";
    
    // Afficher le bouton passer
    this.disableButton = false;
  }

  // Passer le tour au joueur suivant
  this.tourPremierJoueur = !this.tourPremierJoueur;
}

}
