import React from "react";

import KeywordList from "./KeywordList";
import KeywordData from "./KeywordData";

export default class KeywordForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keywords: this.props.keywords,
      keywordInput: ""
    };

    this.onRemove = this.onRemove.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onRemove(id) {
    this.setState(
      {
        keywords: this.state.keywords.filter(keyword => keyword.id !== id)
      },
      () => this.props.onUpdate(this.state.keywords)
    );
  }

  handleKeyDown(event) {
    if (event.key === "Enter") {
      const newData = new KeywordData(this.state.keywordInput);
      this.setState(
        {
          keywords: this.state.keywords.concat(newData),
          keywordInput: ""
        },
        () => this.props.onUpdate(this.state.keywords)
      );
    }
  }

  handleChange(event) {
    this.setState({
      keywordInput: event.target.value
    });
  }

  render() {
    return (
      <>
        <KeywordList keywords={this.state.keywords} onRemove={this.onRemove} />
        <input
          type="text"
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
          value={this.state.keywordInput}
        />
      </>
    );
  }
}
