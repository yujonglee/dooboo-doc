import type { Props, Getter } from '../types';

export default abstract class PlugIn {
    data: Props;
    labels: string[];
    columnGetters: Getter[];
    
    constructor(data: Props) {
        this.data = data;
        this.labels = [data.name, 'Necessary', 'Types', 'Description', 'Default'];
        this.columnGetters = [
          ({ properties }) => properties.map(({ name }) => name),
          ({ properties }) => properties.map(({ optional }) => (optional ? '' : '✓')),
          ({ properties }) => properties.map(({ type }) => type),
          undefined,
          undefined,
        ];
    }
}