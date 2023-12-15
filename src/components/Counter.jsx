export const maxChars = 120;

const Counter = ({ chars, onChange }) => {
  const charsLeft = maxChars - chars.length;

  return (
    <>
      <p>
        Characters Left:{" "}
        <span style={charsLeft < 0 ? { color: "red" } : { color: "black" }}>
          {charsLeft}
        </span>
      </p>
    </>
  );
};

export default Counter;
