const PostContainer = ({ userName, chars }) => {
  return (
    <div className="postContainer">
      <div className="userName">
        Posted by: <span className="userSpan">{userName}</span>
      </div>
      <div className="message">{chars}</div>
      <div className="date">{new Date()}</div>
    </div>
  );
};

export default PostContainer;
