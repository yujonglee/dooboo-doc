# dooboo-doc
Automated Document Generation for React Component written in Typesript. 

Learn from [buehler/node-typescript-parser](https://github.com/buehler/node-typescript-parser) when I was stucked.

(Development in progress)

# Example
```ts
interface Styles {
  container: ViewStyle;
  onElementContainer: StyleProp<ViewStyle>;
  circleColorOff?: string;
}

interface Props {
  theme?: DoobooTheme;
  styles?: Styles;
  duration?: number;
  onElement?: ReactElement;
  onPress: (item: string) => void;
}
```

```js
// dooboo-doc.config.js
const config = {
  target: './testData/interface.ts',
};

export default config;
```





This is result of `parse()` of above code.

```js
[
    {
        name: 'Styles',
        properties: [
            {
                name: 'container',
                optional: false,
                type: 'ViewStyle',
            },
            {
                name: 'onElementContainer',
                optional: false,
                type: 'StyleProp<ViewStyle>',
            },
            {
                name: 'circleColorOff',
                optional: true,
                type: 'String',
            },
        ],
    },
    {
        name: 'Props',
        properties: [
            {
                name: 'theme',
                optional: true,
                type: 'DoobooTheme',
            },
            {
                name: 'styles',
                optional: true,
                type: 'Styles',
            },
            {
                name: 'duration',
                optional: true,
                type: 'Number',
            },
            {
                name: 'onElement',
                optional: true,
                type: 'ReactElement',
            },
            {
                name: 'onPress',
                optional: false,
                type: '(String) => Void',
            },
        ],
    },
]
```

Now Plugin converts it to useful form. For example, `toMDX` plugin convert it to MDX table.

![스크린샷](https://user-images.githubusercontent.com/61503739/132982103-9f18afe9-63f6-4e47-bc7a-1b9d3406b1ae.png)