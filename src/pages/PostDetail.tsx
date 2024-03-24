import React from "react";
import { useParams } from "react-router-dom";

interface PostDetailsType {
  [key: string]: {
    id: number;
    title: string;
    content: string;
  };
}

// 가짜 포스트 상세 데이터
const postDetails: PostDetailsType = {
  1: {
    id: 1,
    title: "Post 1",
    content: "This is the content of the first post",
  },
  2: {
    id: 2,
    title: "Post 2",
    content: "This is the content of the second post",
  },
};

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = postDetails[Number(id)];

  return (
    <div>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
};

export default PostDetail;
