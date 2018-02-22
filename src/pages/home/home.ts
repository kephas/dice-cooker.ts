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
    this.input_faces = 6;
    this.update();
  }

  lancer() {
	this.resultat = this.dice.roll();
  }

  update() {
  this.dice = new Dice(parseInt(this.input_faces));
  }
}

class Dice {
  constructor(private faces: number) {}
  roll() {
    return  Math.floor(Math.random() * this.faces) + 1;
  }
}
