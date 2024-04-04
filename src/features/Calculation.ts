import { IShow } from "./IShow";

export type Operation = "add" | "substraction" | "scalar multiply";

export class Calculation implements IShow {
  private arrayFirst: Array<number>;
  private arraySecond: Array<number>;
  private operation: Operation;
  private result: Array<number>;

  constructor(
    arrayFirst: Array<number>,
    arraySecond: Array<number>,
    operation: Operation
  ) {
    this.arrayFirst = arrayFirst;
    this.arraySecond = arraySecond;
    this.operation = operation;
    this.result = [];
  }
  public show(): Array<number> {
    this.calculateResult();
    return this.result;
  }

  private calculateResult() {
    switch (this.operation) {
      case "add":
        this.result = this.addArrays();
        break;
      case "substraction":
        this.result = this.subArrays();
        break;
      case "scalar multiply":
        this.result = this.mulArrays();
        break;
    }
  }

  private addArrays(): Array<number> {
    let temp = [];
    for (let i = 0; i < this.arrayFirst.length; i++) {
      temp[i] = this.arrayFirst[i] + this.arraySecond[i];
    }
    return temp;
  }
  private subArrays(): Array<number> {
    let temp = [];

    for (let i = 0; i < this.arrayFirst.length; i++) {
      temp[i] = this.arrayFirst[i] - this.arraySecond[i];
    }
    return temp;
  }
  private mulArrays(): Array<number> {
    let sum = 0;
    for (let i = 0; i < this.arrayFirst.length; i++) {
      sum += this.arrayFirst[i] * this.arraySecond[i];
    }
    return [sum];
  }
}
