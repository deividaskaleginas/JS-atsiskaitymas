/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
  constructor(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
  }

  sum() {
    return this.number1 + this.number2;
  }
  subtraction() {
    return this.number1 - this.number2;
  }
  multiplication() {
    return this.number1 * this.number2;
  }
  division() {
    return this.number1 / this.number2;
  }
}

console.log(new Calculator(2, 2).sum());
console.log(new Calculator(2, 2).subtraction());
console.log(new Calculator(2, 2).multiplication());
console.log(new Calculator(2, 2).division());
