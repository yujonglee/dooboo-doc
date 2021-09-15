# dooboo-doc
Automated Document Generation for React Component written in Typescript. 

Learned from [buehler/node-typescript-parser](https://github.com/buehler/node-typescript-parser) when I was stucked.

# Example
## Overview
![Untitled Diagram drawio-3](https://user-images.githubusercontent.com/61503739/133244646-ea73ef1c-c9ea-44d5-a9eb-300ae46011d2.png)

## Install
```
git clone git@github.com:yujong-lee/dooboo-doc.git
cd dooboo-doc && yarn
```

## Config
```js
// dooboo-doc.config.ts
type Config = {
  plugIn: string
  input: string
  output: string
}

const config: Config = {
  plugIn: 'toMDX',
  input: './testData/interface.ts',
  output: './output.txt',
};

export default config;
```

Currently, only the `Interface` is supported and `Type` is not supported.

`'./testData/interface.ts'` is minified version of [SwitchToggle](https://github.com/dooboolab/dooboo-ui/blob/master/main/SwitchToggle.tsx) in `dobooo-ui`.

## Run
```
yarn docgen
```
Currently, `default value` is not supported.
[Result of toMDX plugIn](https://github.com/yujong-lee/dooboo-doc/blob/master/output.txt)
