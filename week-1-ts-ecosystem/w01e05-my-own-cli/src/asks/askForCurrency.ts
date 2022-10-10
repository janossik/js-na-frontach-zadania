import * as inquirer from 'inquirer';

export const askForCurrency = async (): Promise<string> => {
  const { itemCurrency } = await inquirer.prompt([
    {
      type: 'list',
      name: 'itemCurrency',
      message: 'What is the currency of the item?',
      choices: ['PLN', 'USD', 'EUR'],
      default: 'PLN',
    },
  ]);

  return itemCurrency;
};
