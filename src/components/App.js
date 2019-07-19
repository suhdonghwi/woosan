import React from "react";

import Recognizer from "../classes/Recognizer";
import KeywordForm from "./KeywordComponents/KeywordForm";

export default class App extends React.Component {
  constructor() {
    super();

    this.recognizer = new Recognizer();

    this.startRecognition = this.startRecognition.bind(this);
  }

  startRecognition() {
    this.recognizer.start(text => console.log(text));
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

  render() {
    return (
      <div className="App">
        <KeywordForm />
      </div>
    );
  }
}
