export interface Dice {
  roll(): number;
}

export class Sequence implements Dice {
  constructor(private elements: Dice[]) {}

  roll() {
	return this.elements.reduce(function(total, dice) { return total + dice.roll() ; }, 0);
  }
}
