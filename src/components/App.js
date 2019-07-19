import React from "react";

import Recognizer from "../classes/Recognizer";
import RecordHelper from "../classes/RecordHelper";

export default class App extends React.Component {
  constructor() {
    super();

    this.recognizer = new Recognizer();
    this.recorder = new RecordHelper();

    this.startRecognition = this.startRecognition.bind(this);
    this.stopRecognition = this.stopRecognition.bind(this);
  }

  startRecognition() {
    this.recorder.startRecording();
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

  async stopRecognition() {
    const currentDate = new Date();
    this.downloadFile(
      await this.recorder.stopRecording(),
      currentDate.toTimeString() + ".mp3"
    );
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.startRecognition}>Start Recognition</button>
        <button onClick={this.stopRecognition}>Stop Recognition</button>
      </div>
    );
  }
}
