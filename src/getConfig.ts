import config from '../dooboo-doc.config';

const getConfig = () => {
  const { input, output } = config;

  return { input, output };
};

export default getConfig;
