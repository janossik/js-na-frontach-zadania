import * as path from 'path';
import * as fs from 'fs';

class Reader {
  readonly defaultPath: string;
  readonly filePath: string;
  constructor(defaultPath: string, fileName: string) {
    this.defaultPath = path.resolve(defaultPath);
    this.filePath = path.resolve(defaultPath, fileName);
  }

  read(): string {
    return fs.readFileSync(this.filePath, 'utf-8');
  }
}

export default Reader;
