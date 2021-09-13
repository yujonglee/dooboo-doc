import PlugIn from '../plugIn';
import { Props } from '../../types';
declare class Converter extends PlugIn {
    constructor(data: Props);
    get columnWidths(): number[];
    get header(): string;
    get content(): string;
    get result(): string;
}
export default Converter;
