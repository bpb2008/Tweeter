export const MAX_MESSAGE_LENGTH = 120;

const Counter = ({ chars }) => {
  const charsLeft = MAX_MESSAGE_LENGTH - chars.length;

  return (
    <p>
      Characters Left:{" "}
      <span style={charsLeft < 0 ? { color: "red" } : { color: "black" }}>
        {charsLeft}
      </span>
    </p>
  );
};

export default Counter;
