export default class Recognizer {
  constructor() {
    this.transcript = "";

    const Recognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!Recognition) {
      alert(
        "이 브라우저에서는 음성 인식을 지원하지 않습니다. 크롬 브라우저로 시도해주세요."
      );
      return;
    }

    this.recognition = new Recognition();
    this.recognition.lang = "ko-KR";

    this.recognition.onspeechend = () => {
      console.log("멈춤");
    };
  }

  start(onResult) {
    if (this.listening) {
      return;
    }

    this.recognition.start();

    this.recognition.onresult = event => {
      const text = event.results[0][0].transcript;
      this.transcript = text;
      console.log("인식 : ", text);
    };

    this.recognition.onend = event => {
      onResult(this.transcript);
    };
  }
}
