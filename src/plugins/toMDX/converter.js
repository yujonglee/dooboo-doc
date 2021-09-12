import { fit, range } from './util';

class Converter {
  constructor(data) {
    this.data = data;
    this.columns = [data.name, 'Necessary', 'Types', 'Description', 'Default'];

    this.columnHeads = [data.name, 'Necessary', 'Types', 'Description', 'Default'];
    this.columnDatas = [
      ({ properties }) => properties.map(({ name }) => name),
      ({ properties }) => properties.map(({ optional }) => (optional ? '' : '✓')),
      ({ properties }) => properties.map(({ type }) => type),
      undefined,
      undefined,
    ];
  }

  get columnWidths() {
    return this.columnDatas.map((func, i) => {
      if (!func) {
        return this.columnHeads[i].length;
      }

      const dataLengths = func(this.data).map((_) => _.length);

      return Math.max(...dataLengths, this.columnHeads[i].length);
    });
  }

  get header() {
    const columnInfos = this.columnDatas.map((func, i) => {
      if (!func) {
        return this.columnHeads[i];
      }

      const dataLengths = func(this.data).map((_) => _.length);

      return fit(Math.max(...dataLengths, this.columnHeads[i].length), this.columns[i]);
    });

    const columns = `| ${columnInfos.join(' | ')} |`;
    const divider = `| ${this.columnWidths.map((number) => '-'.repeat(number)).join(' | ')} |`;

    return `${columns}\n${divider}`;
  }

  get content() {
    const { properties } = this.data;

    return range(properties.length).reduce((acc, nth) => {
      const items = this.columnDatas.map((func, i) => {
        if (!func) {
          return fit(this.columnWidths[i]);
        }

        return fit(this.columnWidths[i], this.columnDatas[i](this.data)[nth]);
      });

      const row = `| ${items.join(' | ')} |\n`;

      return acc + row;
    }, '');
  }

  get result() {
    return `${this.header}\n${this.content}`;
  }
}

export default Converter;
