import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dice, SimpleDice, Sequence } from '../../app/dice';

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
	let faces = parseInt(this.input_faces);
	this.dice = new Sequence([new SimpleDice(faces), new SimpleDice(faces)]);
  }
}



