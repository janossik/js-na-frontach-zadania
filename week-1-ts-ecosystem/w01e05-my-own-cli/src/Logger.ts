import * as path from 'path';
import * as fs from 'fs';
import * as chalk from 'chalk';

class Logger {
  private readonly pathDir: string;

  constructor(pathdir = path.resolve(__dirname, `logs`)) {
    this.pathDir = path.resolve(pathdir);
    if (!fs.existsSync(this.pathDir)) {
      fs.mkdirSync(this.pathDir);
    }
  }

  log(message: string, fileName = 'logs.log', callback?: VoidFunction): void {
    if (!fs.existsSync(path.resolve(this.pathDir, fileName))) {
      fs.writeFileSync(path.resolve(this.pathDir, fileName), '');
    }
    const preparedLog = `[${new Date().toISOString()}] ${message}\n`;

    fs.appendFileSync(path.resolve(this.pathDir, fileName), preparedLog, 'utf8');
    callback != null ? callback() : console.log(chalk.bgWhite.black(`[${new Date().toISOString()}]`), chalk.white(message));
  }

  error(message: string): void {
    this.log(message, 'error.log', () => {
      console.log(chalk.bgWhite.black(`[${new Date().toISOString()}]`), chalk.red(message));
    });
  }

  info(message: string): void {
    this.log(message, 'info.log', () => {
      console.log(chalk.bgWhite.black(`[${new Date().toISOString()}]`), chalk.blue(message));
    });
  }

  warn(message: string): void {
    this.log(message, 'warn.log', () => {
      console.log(chalk.bgWhite.black(`[${new Date().toISOString()}]`), chalk.yellow(message));
    });
  }
}

export default Logger;
