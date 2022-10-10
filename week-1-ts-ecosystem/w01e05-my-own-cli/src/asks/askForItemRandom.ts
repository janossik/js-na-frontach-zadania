import * as inquirer from 'inquirer';
import { YES_OR_NO } from '../helpers';

export const askForItemRandom = async (): Promise<string> => {
  const { itemRandom } = await inquirer.prompt([
    {
      type: 'list',
      name: 'itemRandom',
      message: 'Do you want generate random item?',
      choices: [YES_OR_NO.YES, YES_OR_NO.NO],
      default: YES_OR_NO.YES,
    },
  ]);

  return itemRandom;
};
