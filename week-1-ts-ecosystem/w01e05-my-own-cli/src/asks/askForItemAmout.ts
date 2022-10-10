import * as inquirer from 'inquirer';

export const askForItemAmout = async (): Promise<number> => {
  const { itemAmount } = await inquirer.prompt([
    {
      type: 'number',
      name: 'itemAmount',
      message: 'How many items do you want to add?',
      default: 1,
    },
  ]);

  return Number(itemAmount);
};
