// generate a function to get a random number from 1 to 123
const random = (): number => Math.floor(Math.random() * 123) + 1;

export const RandomFox = (): JSX.Element => {
  const image: string = `https://randomfox.ca/images/${random()}.jpg`;

  return (
    <img
      width={320}
      height="auto"
      className="rounded"
      src={image}
      alt="random fox"
    />
  );
};
