import PlugIn from '../plugIn';

import { range } from '../commonUtils';
import { fit } from './util';

class Converter extends PlugIn {
  get columnWidths(): number[] {
    const { columns } = this;

    return (
      columns.map((column) => Math.max(...column.map((item) => item.length)))
    );
  }

  get header(): string {
    const { labels, columns, columnWidths } = this;

    const formattedLabels = columns.map((column, i) => {
      const label = labels[i];

      return fit(
        Math.max(...column.map((item) => item.length)),
        label,
      );
    });

    const divider = `| ${columnWidths.map((size) => '-'.repeat(size)).join(' | ')} |`;

    return `| ${formattedLabels.join(' | ')} |\n${divider}`;
  }

  get content(): string {
    const { data, columns, columnWidths } = this;
    const { properties } = data;

    return (
      range(properties.length).reduce((acc, rowIndex) => {
        const items = columns.map((column, colIndex) => {
          const width = columnWidths[colIndex];

          if (columns.length === 1) {
            return fit(width);
          }

          return fit(width, column[rowIndex + 1]);
        });

        const row = `| ${items.join(' | ')} |\n`;

        return acc + row;
      }, '')
    );
  }

  get result(): string {
    return `${this.header}\n${this.content}`;
  }
}

export default Converter;
