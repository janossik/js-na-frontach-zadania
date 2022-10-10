import * as inquirer from 'inquirer';

export const askForPrice = async (): Promise<number> => {
  const { price } = await inquirer.prompt([
    {
      type: 'number',
      name: 'price',
      message: 'What is the price of the item?',
    },
  ]);

  return Number(price);
};
