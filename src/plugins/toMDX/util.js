export const fit = (standard, string = ' '.repeat(standard)) => {
  if (standard <= string.length) {
    return string;
  }

  return `${string}${' '.repeat(standard - string.length)}`;
};

export const range = (size) => [...Array(size).keys()];

export default {};
