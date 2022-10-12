import * as path from 'path';
import CartItemHandling from '../CartItemHandling';
import Logger from '../Logger';

export const PRODUCT_TYPES = {
  AUCTION: 'auctions',
  BUT_NOW: 'buyNow',
  FREE: 'forFree',
} as const;

export const YES_OR_NO = {
  YES: 'Yes',
  NO: 'No',
} as const;

export type ValueOf<T> = T[keyof T];

export const cartItems = new CartItemHandling(path.resolve(__dirname, '..', 'persistent-data'), 'cart-items.json');

export const logger = new Logger();
