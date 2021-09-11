import config from '../dooboo-doc.config';

const getConfig = () => {
  const { target } = config;

  return { path: target };
};

export default getConfig;
