import React from "react";
import { Link } from "react-router-dom";

// 가짜 포스트 데이터
const posts = [
  { id: 1, title: "Post 1", summary: "This is the first post" },
  { id: 2, title: "Post 2", summary: "This is the second post" },
];

const Posts: React.FC = () => {
  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.summary}</p>
          <Link to={`/posts/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
