const Post = (props) => {
  const { title, text } = props;
  return (
    <div className="post">
      <div className="post-title">{title}</div>
      <div className="post-text">{text}</div>
    </div>
  );
};

export default Post;
