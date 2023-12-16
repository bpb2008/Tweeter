import React, { useState } from "react";
import Counter from "./components/Counter";
import Feed from "./components/Feed";
import TweetForm from "./components/TweetForm";
import "./App.css";

function App() {
  const [tweets, setTweets] = useState([]);
  const [message, setMessage] = useState("");

  const addTweet = (tweet) => {
    setTweets((previousTweets) => [tweet, ...previousTweets]);
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
        <TweetForm
          addTweet={addTweet}
          message={message}
          setMessage={setMessage}
        />
        <Counter chars={message} />
      </div>
      <div className="bottom">
        <h3>Post Feed</h3>
        <Feed tweets={tweets} />
      </div>
    </div>
  );
}

export default App;
