
export default (min, max) => {
  const begin = Math.ceil(min);
  const end = Math.floor(max);
  return Math.floor(Math.random() * (end - begin + 1) + begin);
};
