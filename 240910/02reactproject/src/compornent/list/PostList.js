import React from "react";
import styled from "styled-components";
import Postlistitem from "./PostListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const PostList = ({ posts, onClickItem }) => {
  return (
    <Wrapper>
      {posts.map((post) => (
        <Postlistitem
          key={post.id}
          post={post}
          onClick={() => onClickItem(post)}
        />
      ))}
    </Wrapper>
  );
};

export default PostList;
