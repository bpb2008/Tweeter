import React, { useState } from "react";

const TweetForm = ({ addTweet, message, setMessage, maxChars }) => {
  const [userName, setUserName] = useState("Brittany");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.length > maxChars) {
      alert("Tweet exceeds 120 characters!");
      return;
    }

    if (userName && message) {
      const newTweet = {
        id: Date.now(),
        userName,
        text: message,
        date: new Date().toLocaleString(),
      };

      addTweet(newTweet);
      setUserName("");
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Select a Username:</label>
      <select
        name="username"
        id="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      >
        <option value="Brittany">Brittany</option>
        <option value="Jason">Jason</option>
        <option value="Monique">Monique</option>
        <option value="Man-Khoi">Man-Khoi</option>
        <option value="Jasmine">Jasmine</option>
      </select>
      <br />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="What's on your mind?"
      />
      <br />
      <button type="submit">Post!</button>
    </form>
  );
};

export default TweetForm;
