import type { DocInterface, Getter } from '../types';

export default abstract class PlugIn {
    data: DocInterface;

    labels: string[];

    columnResolvers: Getter[];

    constructor(data: DocInterface) {
      this.data = data;
      this.labels = [data.name, 'Necessary', 'Types', 'Description', 'Default'];
      this.columnResolvers = [
        ({ properties }) => properties.map(({ name }) => name),
        ({ properties }) => properties.map(({ optional }) => (optional ? '' : '✓')),
        ({ properties }) => properties.map(({ type }) => type),
        undefined,
        undefined,
      ];
    }

    get columns() {
      const { data, labels, columnResolvers } = this;

      return labels.map((label, i) => {
        if (!columnResolvers[i]) {
          return [label];
        }

        return [label, ...columnResolvers[i]!(data)];
      });
    }
}
