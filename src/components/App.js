import React from "react";

import Recognizer from "../classes/Recognizer";
import KeywordForm from "./KeywordComponents/KeywordForm";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      keywords: []
    };

    this.recognizer = new Recognizer();

    this.startRecognition = this.startRecognition.bind(this);
    this.onKeywordUpdate = this.onKeywordUpdate.bind(this);
  }

  startRecognition() {
    this.recognizer.start(text => {
      for (var i = 0; i < this.state.keywords.length; i++) {
        if (text.replace(/ /g, "").includes(this.state.keywords[i].content)) {
          console.log("스탑 멈춰용");
        }
      }
    });
  }

  downloadFile(blob, fileName) {
    const link = document.createElement("a");

    link.href = blob;
    link.download = fileName;

    document.body.append(link);
    link.click();
    link.remove();

    window.addEventListener("focus", e => URL.revokeObjectURL(link.href), {
      once: true
    });
  }

  onKeywordUpdate(value) {
    this.setState({
      keywords: value
    });
  }

  render() {
    return (
      <div className="App">
        <KeywordForm
          keywords={this.state.keywords}
          onUpdate={this.onKeywordUpdate}
        />
        <br />
        <button onClick={this.startRecognition}> 말해봐요 </button>
      </div>
    );
  }
}
