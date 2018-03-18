export interface Dice {
  roll(): number;
}

export class SimpleDice implements Dice {
  text: string;
  constructor(private faces: number) {}
  roll() {
    return  Math.floor(Math.random() * this.faces) + 1;
  }
}

export class ExplosiveDice implements Dice {
  private dice: Dice;

  constructor(private faces: number) {
    this.dice = new SimpleDice(this.faces);
  }

  roll() {
    let result = 0;
    let last_roll = this.faces;

    while(last_roll == this.faces) {
      last_roll = this.dice.roll();
      result += last_roll;
    }
  }
}

export class Sequence implements Dice {
  constructor(private elements: Dice[]) {}

  roll() {
    return this.elements.reduce(function(total, dice) { return total + dice.roll() ; }, 0);
  }
}

class FateDice implements Dice {
  private dice: Dice;

  constructor() {
    this.dice = new SimpleDice(3);
  }

  roll() {
    return this.dice.roll() - 2;
  }
}

export class FateSequence implements Dice {
  private sequence: Sequence;

  constructor() {
    this.sequence = new Sequence([new FateDice(), new FateDice(), new FateDice(), new FateDice()]);
  }

  roll() {
    return this.sequence.roll();
  }
}
