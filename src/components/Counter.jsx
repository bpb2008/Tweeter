const Counter = ({ chars, onChange }) => {
  const maxChars = 120;

  const handleCharChange = (e) => {
    const input = e.target.value;
    const charsLeft = maxChars - input.length;
    onChange(input);
  };

  return (
    <>
      <textarea
        onChange={handleCharChange}
        placeholder="What's on your mind?"
        name="message"
        id="message"
        value={chars}
      />
      <p>
        Characters Left:{" "}
        <span style={chars < 0 ? { color: "red" } : { color: "black" }}>
          {chars}
        </span>
      </p>
    </>
  );
};

export default Counter;
