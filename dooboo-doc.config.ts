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
