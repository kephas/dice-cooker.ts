export interface Dice {
  roll(): number;
}

export class SimpleDice implements Dice {
  constructor(private faces: number) {}
  roll() {
    return  Math.floor(Math.random() * this.faces) + 1;
  }
}

export class ExplosiveDice implements Dice {
  private dice: Dice;

  constructor(private faces: numbre) {
    this.dice = new SimpleDice(faces);
  }

  roll() {
    let result = 0;
    let last_roll = faces;

    while(last_roll == faces) {
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
