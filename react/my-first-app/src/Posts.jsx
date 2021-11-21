import { useState, useEffect } from "react";
import Post from "./Post";
// import data from "./data";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const URL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(URL);
      const data = await response.json();
      setPosts(data);
      console.log("Posts: ", data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="posts">
      {posts &&
        posts.map((post) => {
          const { id, title, body } = post;
          return <Post key={id} title={title} text={body} />;
        })}
    </div>
  );
};

export default Posts;
