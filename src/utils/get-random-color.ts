const getRandomColor = (): string => {
  const letters: string = '0123456789ABCDEF';
  let color: string = '#';
  const COLOR_LENGTH: number = 6;

  for (let i = 0; i < COLOR_LENGTH; i += 1) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

export default getRandomColor;
