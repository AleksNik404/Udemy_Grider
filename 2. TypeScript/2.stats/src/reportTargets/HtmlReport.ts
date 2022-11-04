import { OutputTarget } from '../Summary';
import fs from 'fs';

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <p>${report}</p>
      </div>
    `;

    fs.writeFile('report.html', html, (err) => {
      if (err) console.log('CHEEEEE');
    });
  }
}
