import { AuctionItem } from './models/AuctionItem';
import { FreeItem } from './models/FreeItem';
import { BuyNowItem } from './models/BuyNowItem';
import Reader from './Reader';
import Writer from './Writer';

class CartItemHandling {
  private readonly auctions: AuctionItem[] = [];
  private readonly buyNow: BuyNowItem[] = [];
  private readonly forFree: FreeItem[] = [];
  private readonly writer: Writer;
  private readonly reader: Reader;
  constructor(defaultPath: string, fileName: string) {
    this.writer = new Writer(defaultPath, fileName);
    this.reader = new Reader(defaultPath, fileName);
    this.load();
  }

  isObjectAuction(value: unknown): value is {
    name: string;
    amount: number;
    value: number;
    currency: string;
    time: number;
  } {
    return typeof value === 'object' && value !== null && 'name' in value && 'amount' in value && 'value' in value && 'currency' in value && 'time' in value;
  }

  isObjectBuyNow(value: unknown): value is { name: string; amount: number; value: number; currency: string } {
    return typeof value === 'object' && value !== null && 'name' in value && 'amount' in value && 'value' in value && 'currency' in value;
  }

  isObjectFreeItem(value: unknown): value is { name: string; amount: number } {
    return typeof value === 'object' && value !== null && 'name' in value && 'amount' in value;
  }

  isObjectData(value: unknown): value is { auctions: unknown[]; buyNow: unknown[]; forFree: unknown[] } {
    if (typeof value !== 'object' || value === null) return false;
    if (!('auctions' in value) || !('buyNow' in value) || !('forFree' in value)) return false;
    const tempValue = value as { auctions: unknown; buyNow: unknown; forFree: unknown };
    if (!Array.isArray(tempValue.auctions) || !Array.isArray(tempValue.buyNow) || !Array.isArray(tempValue.forFree)) return false;
    return true;
  }

  load(): void {
    const data = this.reader.read();
    const parsedData = JSON.parse(data);

    if (!this.isObjectData(parsedData)) {
      throw new Error('Invalid data');
    }

    if (Boolean(parsedData.auctions) && Array.isArray(parsedData.auctions) && parsedData.auctions.length > 0) {
      parsedData.auctions.forEach((item) => {
        if (!this.isObjectAuction(item)) return;

        const { name, amount, value, currency, time } = item;
        this.addItem(new AuctionItem(name, amount, time, value, currency));
      });
    }
    if (Boolean(parsedData.buyNow) && Array.isArray(parsedData.buyNow) && parsedData.buyNow.length > 0) {
      parsedData.buyNow.forEach((item) => {
        if (!this.isObjectBuyNow(item)) return;
        const { name, amount, value, currency } = item;
        this.addItem(new BuyNowItem(name, amount, value, currency));
      });
    }
    if (Boolean(parsedData.forFree) && Array.isArray(parsedData.forFree) && parsedData.forFree.length > 0) {
      parsedData.forFree.forEach((item) => {
        if (!this.isObjectFreeItem(item)) return;
        const { name, amount } = item;
        this.addItem(new FreeItem(name, amount));
      });
    }
    this.save();
  }

  save(): void {
    const data = {
      auctions: this.auctions,
      buyNow: this.buyNow,
      forFree: this.forFree,
    };
    this.writer.write(JSON.stringify(data));
  }

  addItem(item: AuctionItem | BuyNowItem | FreeItem, save = true): void {
    if (item instanceof AuctionItem) {
      this.auctions.push(item);
    } else if (item instanceof BuyNowItem) {
      this.buyNow.push(item);
    } else if (item instanceof FreeItem) {
      this.forFree.push(item);
    } else {
      throw new Error("Item isn't an instance of AuctionItem, NowItem or FreeItem");
    }
    save && this.save();
  }

  addItems(items: AuctionItem[] | BuyNowItem[] | FreeItem[], save = true): void {
    items.forEach((item) => this.addItem(item, false));
    save && this.save();
  }
}

export default CartItemHandling;
