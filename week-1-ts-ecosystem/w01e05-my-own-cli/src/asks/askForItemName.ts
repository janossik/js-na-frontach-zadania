import * as inquirer from 'inquirer';

export const askForItemName = async (): Promise<string> => {
  const { itemName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'itemName',
      message: 'What is the name of the item?',
    },
  ]);

  return itemName;
};
