export declare type Property = {
    name: string;
    type: string;
    optional: boolean;
};
export declare type Props = {
    name: string;
    properties: Property[];
};
export declare type Getter = ((data: Props) => string[]) | undefined;
