import React from "react";

import KeywordItem from "./KeywordItem";

const KeywordList = ({ keywords }) => (
  <ul>
    {keywords.map(keyword => (
      <KeywordItem key={keyword.id} content={keyword.content} />
    ))}
  </ul>
);

export default KeywordList;
