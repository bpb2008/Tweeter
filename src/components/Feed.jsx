import React from "react";

const Feed = ({ tweets }) => {
  return (
    <div>
      <h3>Post Feed</h3>
      <ol>
        {tweets.map((tweet) => (
          <li key={tweet.id}>
            <span className="userName">{tweet.userName}:</span> {tweet.text}
            <br />
            <span className="date">{tweet.date}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Feed;
