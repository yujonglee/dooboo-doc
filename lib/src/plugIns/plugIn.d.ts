import type { Props, Getter } from '../types';
export default abstract class PlugIn {
    data: Props;
    labels: string[];
    columnGetters: Getter[];
    constructor(data: Props);
}
