import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  resultat: number;
  dice: Dice;

  constructor(public navCtrl: NavController) {
    this.dice = new Dice(6);
  }

  lancer() {
	this.resultat = this.dice.roll();
  }
}

class Dice {
  constructor(private faces: number) {}
  roll() {
    return  Math.floor(Math.random() * this.faces) + 1;
  }
}
