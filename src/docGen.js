import parse from './parse';
import toMDX from './plugins/toMDX/converter';

const Converters = {
  toMDX,
};

const docGen = ({ plugIn }) => {
  const data = parse();

  return (
    data.map((declaration) => new Converters[plugIn](declaration).result)
  );
};

export default docGen;
