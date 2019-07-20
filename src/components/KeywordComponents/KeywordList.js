import React from "react";
import styled from "styled-components";

import KeywordItem from "./KeywordItem";

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const KeywordList = ({ keywords, onRemove }) => (
  <List>
    {keywords.map(keyword => (
      <KeywordItem
        key={keyword.id}
        content={keyword.content}
        onRemove={() => onRemove(keyword.id)}
      />
    ))}
  </List>
);

export default KeywordList;
