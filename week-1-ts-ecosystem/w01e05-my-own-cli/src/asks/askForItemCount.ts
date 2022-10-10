import * as inquirer from 'inquirer';

export const askForItemCount = async (): Promise<number> => {
  const { itemCount } = await inquirer.prompt([
    {
      type: 'number',
      name: 'itemCount',
      message: 'Do you want generate random item?',
      default: 1,
    },
  ]);
  return Number(itemCount);
};
