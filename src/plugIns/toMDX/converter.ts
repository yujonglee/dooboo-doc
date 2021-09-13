import { fit, range } from './util';

import PlugIn from '../plugIn'
import { Props } from '../../types';

class Converter extends PlugIn{    
  constructor(data: Props) {
    super(data)
  }

  get columnWidths(): number[] {
    const { data, labels, columnGetters } = this;

    return (
      columnGetters.map((getter, columnIndex) => {
        const label = labels[columnIndex];

        if (!getter) {
          return label.length;
        }

        const columnItems = getter(data);

        return Math.max(
          label.length,
          ...columnItems.map((item) => item.length),
        );
      })
    );
  }

  get header(): string {
    const {
      data, labels, columnGetters, columnWidths,
    } = this;

    const formattedLabels = columnGetters.map((getter, columnIndex) => {
      const label = labels[columnIndex];

      if (!getter) {
        return label;
      }

      const columnItems = getter(data);

      return fit(
        Math.max(
          label.length,
          ...columnItems.map((item) => item.length),
        ),
        label,
      );
    });

    const divider = `| ${columnWidths.map((size) => '-'.repeat(size)).join(' | ')} |`;

    return `| ${formattedLabels.join(' | ')} |\n${divider}`;
  }

  get content(): string {
    const { data, columnGetters, columnWidths } = this;
    const { properties } = data;

    return (
      range(properties.length).reduce((acc, rowIndex) => {
        const items = columnGetters.map((getter, columnIndex) => {
          const width = columnWidths[columnIndex];

          if (!getter) {
            return fit(width);
          }

          const columnItems = getter(data);

          return fit(width, columnItems[rowIndex]);
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
