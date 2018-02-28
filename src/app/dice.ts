export interface Dice {
  roll(): number;
}

export class SimpleDice implements Dice {
  constructor(private faces: number) {}
  roll() {
    return  Math.floor(Math.random() * this.faces) + 1;
  }
}

export class Sequence implements Dice {
  constructor(private elements: Dice[]) {}

  roll() {
    return this.elements.reduce(function(total, dice) { return total + dice.roll() ; }, 0);
  }
}
