export type Property = {
    name: string,
    type: string,
    optional: boolean
}

export type Props = {
    name: string,
    properties: Property[]
}

export type Getter = ((data: Props) => string[]) | undefined