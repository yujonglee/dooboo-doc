# dooboo-doc
Automated Document Generation for React Component written in Typesript. 

Learn from [buehler/node-typescript-parser](https://github.com/buehler/node-typescript-parser) when I was stucked.

(Development in progress)

# Example
## dooboo-doc.config.js
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

## testData/interface.ts
Currently, only the `Interface` is supported and `Type` is not supported.

[Test data](https://github.com/dooboolab/dooboo-ui/blob/master/main/SwitchToggle.tsx) is from `dooboo-ui/SwitchToggle`.


## Result
```
yarn docgen
```


[After toMDX PlugIn applied](https://github.com/yujong-lee/dooboo-doc/blob/master/output.txt)
