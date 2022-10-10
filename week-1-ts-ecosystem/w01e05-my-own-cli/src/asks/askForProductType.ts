import * as inquirer from 'inquirer';
import { ValueOf, PRODUCT_TYPES } from '../helpers';

export const askForProductType = async (): Promise<ValueOf<typeof PRODUCT_TYPES>> => {
  const { productType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'productType',
      message: 'What type of product do you want to generate?',
      choices: Object.values(PRODUCT_TYPES),
    },
  ]);

  return productType;
};
