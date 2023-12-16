import React from "react";

const Feed = ({ tweets }) => {
  return (
    <div>
      <ol>
        {tweets.map((tweet) => (
          <li key={tweet.id}>
            <span className="userName">{tweet.userName}:</span> {tweet.text}
            <div className="date">{tweet.date}</div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Feed;
