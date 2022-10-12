import * as path from 'path';
import * as fs from 'fs';

class Writer {
  readonly defaultPath: string;
  readonly filePath: string;
  constructor(defaultPath: string, fileName: string) {
    this.defaultPath = defaultPath;
    this.filePath = path.resolve(defaultPath, fileName);
    if (!fs.existsSync(this.defaultPath)) {
      fs.mkdirSync(this.defaultPath, { recursive: true });
    }
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, '{"auctions":[],"buyNow":[],"forFree":[]}');
    }
  }

  write(data: string): void {
    fs.writeFileSync(this.filePath, data);
  }
}

export default Writer;
