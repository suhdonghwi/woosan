import React from "react";

import KeywordList from "./KeywordList";
import KeywordData from "./KeywordData";

export default class KeywordForm extends React.Component {
  constructor() {
    super();

    this.state = {
      keywords: [new KeywordData("asdf")]
    };
  }

  render() {
    return <KeywordList keywords={this.state.keywords} />;
  }
}
