import { faker } from '@faker-js/faker';
import { ValueOf, PRODUCT_TYPES } from './helpers';
import { AuctionItem } from './models/AuctionItem';
import { BuyNowItem } from './models/BuyNowItem';
import { FreeItem } from './models/FreeItem';

export const generateRandomItem = async (productType: ValueOf<typeof PRODUCT_TYPES>, count: number): Promise<AuctionItem[] | FreeItem[] | BuyNowItem[]> => {
  let items: AuctionItem[] | BuyNowItem[] | FreeItem[] = [];

  for (let i = 0; i < count; i++) {
    switch (productType) {
      case PRODUCT_TYPES.AUCTION:
        items = items as AuctionItem[];
        items.push(
          new AuctionItem(
            faker.commerce.productName(),
            Number(faker.random.numeric(2)),
            faker.datatype.datetime().getTime(),
            Number(faker.random.numeric(2)),
            'PLN'
          )
        );
        break;
      case PRODUCT_TYPES.BUT_NOW:
        items = items as BuyNowItem[];
        items.push(new BuyNowItem(faker.commerce.productName(), Number(faker.random.numeric(2)), Number(faker.random.numeric(2)), 'PLN'));
        break;
      case PRODUCT_TYPES.FREE:
        items = items as FreeItem[];
        items.push(new FreeItem(faker.commerce.productName(), Number(faker.random.numeric(2))));
        break;
    }
  }

  return items;
};
