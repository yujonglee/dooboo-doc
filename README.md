# dooboo-doc
Automated Document Generation for React Component written in Typescript. 

Learned from [buehler/node-typescript-parser](https://github.com/buehler/node-typescript-parser) when I was stucked.

(Development in progress)

# Example
## Overview
![Untitled Diagram drawio-3](https://user-images.githubusercontent.com/61503739/133244646-ea73ef1c-c9ea-44d5-a9eb-300ae46011d2.png)


## Config
```js
type Config = {
  input: string
  output: string
}

const config: Config = {
  input: './testData/interface.ts',
  output: './output.txt',
};
```

## Input
Currently, only the `Interface` is supported and `Type` is not supported.

`'./testData/interface.ts'` is minified version of `dooboo-ui/SwitchToggle`(https://github.com/dooboolab/dooboo-ui/blob/master/main/SwitchToggle.tsx).


## Output
```
yarn docgen
```
Currently, `default value` is not supported.
[Result of toMDX plugIn](https://github.com/yujong-lee/dooboo-doc/blob/master/output.txt)
