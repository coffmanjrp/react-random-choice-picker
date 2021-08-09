const pickRandomElement = (el) => {
  return el[Math.floor(Math.random() * el.length)];
};

export default pickRandomElement;
