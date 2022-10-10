import * as inquirer from 'inquirer';

export const askForDate = async (): Promise<Date> => {
  const { date } = await inquirer.prompt([
    {
      type: 'date',
      name: 'date',
      message: 'When will the auction end?',
    },
  ]);

  return date;
};
