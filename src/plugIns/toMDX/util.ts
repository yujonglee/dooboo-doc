export const fit = (standard: number, string = ' '.repeat(standard)) => {
  if (standard <= string.length) {
    return string;
  }

  return `${string}${' '.repeat(standard - string.length)}`;
};

export default {};
