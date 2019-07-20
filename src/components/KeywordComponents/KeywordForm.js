import React from "react";
import styled from "styled-components";

import KeywordList from "./KeywordList";
import KeywordData from "./KeywordData";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: left;
`;

const Label = styled.label`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;

  color: #495057;

  margin-bottom: 0.3rem;
  margin-top: 1.5rem;
`;

const Input = styled.input`
  border: none;
  outline: none;

  box-shadow: 0px 3px 6px #dee2e6;

  font-size: 1.3rem;
  font-family: "Noto Sans KR", sans-serif;

  padding: 0.5rem 0.5rem;
`;

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
      <Container>
        <Label htmlFor="keywordInput">키워드 설정</Label>
        <KeywordList keywords={this.state.keywords} onRemove={this.onRemove} />
        <Input
          id="keywordInput"
          type="text"
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
          value={this.state.keywordInput}
        />
      </Container>
    );
  }
}
