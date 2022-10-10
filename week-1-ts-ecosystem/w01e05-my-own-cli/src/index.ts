import { faker } from '@faker-js/faker';
import * as inquirer from 'inquirer';
import { AuctionItem } from './models/AuctionItem';
import { BuyNowItem } from './models/BuyNowItem';
import { FreeItem } from './models/FreeItem';

import * as asks from './asks';
import { generateRandomItem } from './generateRandomItem';
import { cartItems, logger, PRODUCT_TYPES, YES_OR_NO } from './helpers';

faker.setLocale('pl');
// eslint-disable-next-line @typescript-eslint/no-var-requires
inquirer.registerPrompt('date', require('inquirer-date-prompt'));

const generateItems = async (): Promise<void> => {
  const productType = await asks.askForProductType();
  const itemRandom = await asks.askForItemRandom();

  if (itemRandom === YES_OR_NO.YES) {
    const itemCount = await asks.askForItemCount();
    const items = await generateRandomItem(productType, itemCount);
    cartItems.addItems(items);
    logger.info(`Crafted items of type ${productType}: ${JSON.stringify(items.map((item) => item.id))}`);
  } else {
    const itemName = await asks.askForItemName();
    const itemAmount = await asks.askForItemAmout();

    if (productType === PRODUCT_TYPES.AUCTION) {
      const date = await asks.askForDate();
      const price = await asks.askForPrice();
      const itemCurrency = await asks.askForCurrency();

      cartItems.addItem(new AuctionItem(itemName, itemAmount, date.getTime(), price, itemCurrency));
      logger.info(`Crafted item of type ${productType}: ${JSON.stringify(new AuctionItem(itemName, itemAmount, date.getTime(), price, itemCurrency))}`);
    } else if (productType === PRODUCT_TYPES.BUT_NOW) {
      const price = await asks.askForPrice();
      const itemCurrency = await asks.askForCurrency();

      cartItems.addItem(new BuyNowItem(itemName, itemAmount, price, itemCurrency));
      logger.info(`Crafted item of type ${productType}: ${JSON.stringify(new BuyNowItem(itemName, itemAmount, price, itemCurrency))}`);
    } else if (productType === PRODUCT_TYPES.FREE) {
      cartItems.addItem(new FreeItem(itemName, itemAmount));
      logger.info(`Crafted item of type ${productType}: ${JSON.stringify(new FreeItem(itemName, itemAmount))}`);
    }
  }

  const { nextAction } = await inquirer.prompt([
    {
      type: 'list',
      name: 'nextAction',
      message: 'Do you want generate more items?',
      choices: [YES_OR_NO.YES, YES_OR_NO.NO],
      default: YES_OR_NO.YES,
    },
  ]);

  if (nextAction === YES_OR_NO.YES) {
    void generateItems();
  } else {
    process.exit(0);
  }
};

try {
  void generateItems();
} catch (e) {
  logger.error(JSON.stringify(e));
}
