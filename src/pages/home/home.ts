import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  resultat: number;

  constructor(public navCtrl: NavController) {

  }

  lancer() {
	this.resultat = Math.floor(Math.random() * 6) + 1;
  }
}
