import * as path from "path";
import * as fs from "fs";
import * as chalk from "chalk";


class Logger {
    private readonly pathdir: string;

    constructor(pathdir: string = `${__dirname}/../logs`) {
        this.pathdir = path.resolve(pathdir);
        if (!fs.existsSync(this.pathdir)) {
            fs.mkdirSync(this.pathdir);
        }
    }

    log(message: string, fileName = "logs.log", callback?: VoidFunction): void {
        if (!fs.existsSync(path.resolve(this.pathdir, fileName))) {
            fs.writeFileSync(path.resolve(this.pathdir, fileName), "");
        }
        const preparedLog = `[${new Date().toISOString()}] ${message}\n`

        fs.appendFileSync(path.resolve(this.pathdir, fileName), preparedLog, "utf8");

        callback ? callback() : console.log(chalk.bgWhite.black(`[${new Date().toISOString()}]`), chalk.white(message));
    }

    error(message: string): void {
        this.log(message, "error.log", () => {
            console.log(chalk.bgWhite.black(`[${new Date().toISOString()}]`), chalk.red(message));
        })
    }


    info(message: string): void {
        this.log(message, "info.log", () => {
            console.log(chalk.bgWhite.black(`[${new Date().toISOString()}]`), chalk.blue(message));
        })
    }

    warn(message: string): void {
        this.log(message, "warn.log", () => {
            console.log(chalk.bgWhite.black(`[${new Date().toISOString()}]`), chalk.yellow(message));
        })
    }
}

export default Logger;