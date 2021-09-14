import config from '../dooboo-doc.config';

const getConfig = () => {
  const { plugIn, input, output } = config;

  return { plugIn, input, output };
};

export default getConfig;
