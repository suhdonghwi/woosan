import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid #dee2e6;
  border-radius: 0.2rem;

  background-color: #f8f9fa;

  padding: 0.5rem;

  margin-bottom: 0.5rem;
`;

const Item = styled.li`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.2rem;

  margin-right: auto;
`;

const Button = styled.button`
  background-color: #ffe3e3;
  color: #ff6b6b;
  border: 1px solid #ffa8a8;
  border-radius: 0.2rem;

  padding: 0.2rem 0.5rem;
`;

const KeywordItem = ({ content, onRemove }) => {
  return (
    <Container>
      <Item> {content} </Item>
      <Button onClick={onRemove}>삭제</Button>
    </Container>
  );
};

export default KeywordItem;
