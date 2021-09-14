import getConfig from './getConfig';
import parse from './parse';
import toMDX from './plugIns/toMDX/converter';

const Converters: {[name: string]: any} = {
  toMDX,
};

const docGen = () => {
  const { plugIn } = getConfig();
  const data = parse();

  return (
    data.map(
      (declaration) => new (Converters[plugIn])(declaration).result,
    )
  );
};

export default docGen;
