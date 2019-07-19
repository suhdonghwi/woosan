import React from "react";

import Recognizer from "../classes/Recognizer";

export default class App extends React.Component {
  constructor() {
    super();

    this.recognizer = new Recognizer();
    console.log(this.recognizer);

    this.startRecognition = this.startRecognition.bind(this);
  }

  startRecognition() {
    this.recognizer.start(text => {
      console.log("인식됨 : " + text);
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.startRecognition}>Start Recognition</button>
      </div>
    );
  }
}
