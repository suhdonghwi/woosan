import React from "react";

import KeywordItem from "./KeywordItem";

const KeywordList = ({ keywords, onRemove }) => (
  <ul>
    {keywords.map(keyword => (
      <KeywordItem
        key={keyword.id}
        content={keyword.content}
        onRemove={() => onRemove(keyword.id)}
      />
    ))}
  </ul>
);

export default KeywordList;
