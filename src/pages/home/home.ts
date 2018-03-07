import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dice, SimpleDice, ExplosiveDice, Sequence, FateSequence } from '../../app/dice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  available_dice: Dice[];
  staged_dice: Dice[];

  constructor(public navCtrl: NavController) {
    this.staged_dice=[];
    this.available_dice=[4,6,8,10,12,16,20,24,30].map(
      faces => {let die=new SimpleDice(faces);
        die.text=`d${faces}`;
        return die;
      });
  }

  stage(die:Dice){
    this.staged_dice.push(Object.create(die));
  }


}
