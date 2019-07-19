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

  async stopRecognition() {
    console.log(await this.recorder.stopRecording());
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
