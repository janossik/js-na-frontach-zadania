import { Item } from './Item';

export abstract class ItemWithValue extends Item {
  abstract value: number;
  abstract currency: string;
  constructor(name: string, amount: number) {
    super(name, amount);
  }

  print(): void {
    console.log(`nazwa: ${this.name}, ilość: ${this.amount}`);
  }
}
