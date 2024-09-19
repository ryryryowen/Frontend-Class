import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../../data.json";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  justidy-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 16px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
`;

const PostContiner = styled.div`
  border: 1px solid grey;
  border-radius: 8px;
  padding: 8px 16px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 18px;
  line-height: 32px;
`;

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const PostViewPage = () => {
  const navgate = useNavigate();
  const { postId } = useParams();
  const post = data.find((item) => {
    return item.id == postId;
  });
  console.log(post);
  return (
    <Wrapper>
      <Container>
        <Button title="뒤로가기" onClick={() => navgate("/")} />
        <PostContiner>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContiner>
        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post.comments} />
        <TextInput height={40} />
        <Button title="댓글 작성하기" onClick={() => navgate("/")} />
      </Container>
    </Wrapper>
  );
};

export default PostViewPage;
