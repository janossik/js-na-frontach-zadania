import { ItemWithValue } from './ItemWithValue';

export class AuctionItem extends ItemWithValue {
  value: number;
  currency: string;
  time: number;
  constructor(name: string, amount: number, time: number, value: number, currency: string = 'PLN') {
    super(name, amount);
    this.time = time;
    this.value = value;
    this.currency = currency;
  }

  getTimeEndAuction(): Date {
    return new Date(this.time);
  }

  print(): void {
    console.log(`nazwa: ${this.name}, cena: ${this.value}, ilość: ${this.amount}, wartość: ${this.value * this.amount}`);
  }
}
