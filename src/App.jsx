import React, { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const [chars, setChars] = useState("");
  const [tweets, setTweets] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTweets((previousTweets) => {
      return [
        {
          userName: userName,
          message: chars,
          date: new Date(),
        },
        ...previousTweets,
      ];
    });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Tweeter</h1>
        <p className="subheader">
          If you're one of the lucky users in the dropdown menu, share your
          random thoughts below!
        </p>
      </div>
      <div className="top">
        <form onSubmit={handleSubmit}>
          <div className="user-dropdown">
            <div className="label">
              <label htmlFor="username">Select a username:</label>
            </div>
            <div className="userselect">
              <select name="username" id="username">
                <option value="brittany">Brittany</option>
                <option value="jason">Jason</option>
                <option value="monique">Monique</option>
                <option value="man-khoi">Man-Khoi</option>
                <option value="jasmine">Jasmine</option>
              </select>
            </div>
          </div>
          <div className="count">
            <Counter
              chars={chars}
              onChange={(input) => {
                setChars(input);
              }}
            />
          </div>
          <div className="submit-button">
            <button className="save-form" type="submit">
              Post!
            </button>
          </div>
        </form>
      </div>
      <div className="bottom">
        <div className="postList">
          <h3>Post Feed</h3>
          <ol></ol>
        </div>
      </div>
    </div>
  );
}

export default App;
