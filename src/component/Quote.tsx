import quote from "../assets/images/quote.webp";

export const Quote = () => {
  return (
    <img
      src={quote}
      alt="quote"
      className="aspect-square"
      width={25}
      height={25}
    />
  );
};
