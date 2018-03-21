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
  rolls: [Dice[], number][];
  staged: boolean = false;
  rolled: boolean = false;

  constructor(public navCtrl: NavController) {
    this.staged_dice=[];
    this.rolls=[];
    this.available_dice=[4,6,8,10,12,16,20,24,30].map(
      faces => {let die=new SimpleDice(faces);
        die.text=`d${faces}`;
        if (die.text=="d20") {
          die.markup='<img src="../../assets/imgs/d20.png">'
        } else if (die.text=="d12"){
          die.markup='<img src="../../assets/imgs/d12.png">'
        } else if (die.text=="d10"){
          die.markup='<img src="../../assets/imgs/d10.png">'
        } else if (die.text=="d8"){
          die.markup='<img src="../../assets/imgs/d8.png">'
        } else if (die.text=="d6"){
          die.markup='<img src="../../assets/imgs/d6.png">'
        } else if (die.text=="d4"){
          die.markup='<img src="../../assets/imgs/d4.png">'
        } else {
          die.markup=die.text
        }

        return die;
      });
  }

  stage(die:Dice){
    this.staged_dice.push(Object.create(die));
    this.staged = true;
  }

  roll() {
    let seq = new Sequence(this.staged_dice);
    this.rolls.push([this.staged_dice, seq.roll()]);
    this.rolled = true;
  }

}
