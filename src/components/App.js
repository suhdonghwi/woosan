import React from "react";

import Recognizer from "../classes/Recognizer";
import RecordHelper from "../classes/RecordHelper";

import KeywordForm from "./KeywordComponents/KeywordForm";

import EmergencySender from "./EmergencySender";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      keywords: []
    };

    this.recognizer = new Recognizer();
    this.recorder = new RecordHelper();

    this.startRecognition = this.startRecognition.bind(this);
    this.onKeywordUpdate = this.onKeywordUpdate.bind(this);

    this.emergencySender = new EmergencySender();
  }

  startRecognition() {
    this.recognizer.start(async text => {
      for (var i = 0; i < this.state.keywords.length; i++) {
        if (text.replace(/ /g, "").includes(this.state.keywords[i].content)) {
          this.emergencySender.send("가은님이 위험에 처했습니다.");

          const blob = await this.recorder.startRecording(10);
          this.downloadFile(blob, new Date().toDateString());
          return;
        }
      }

      this.startRecognition();
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
        <button onClick={this.startRecognition}>멈춰봐요</button>
      </div>
    );
  }
}
