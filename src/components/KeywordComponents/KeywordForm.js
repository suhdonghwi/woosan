import React from "react";

import KeywordList from "./KeywordList";
import KeywordData from "./KeywordData";

export default class KeywordForm extends React.Component {
  constructor() {
    super();

    this.state = {
      keywords: [new KeywordData("asdf")]
    };

    this.onRemove = this.onRemove.bind(this);
  }

  onRemove(id) {
    this.setState({
      keywords: this.state.keywords.filter(keyword => keyword.id !== id)
    });
  }

  render() {
    return (
      <KeywordList keywords={this.state.keywords} onRemove={this.onRemove} />
    );
  }
}
