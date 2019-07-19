import React from "react";

const KeywordItem = ({ content, onRemove }) => {
  return (
    <>
      <li> {content} </li>
      <button onClick={onRemove}>X</button>
    </>
  );
};

export default KeywordItem;
