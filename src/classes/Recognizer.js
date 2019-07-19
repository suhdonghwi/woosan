export default class Recognizer {
  constructor() {
    this.transcript = "";
    this.lastStartedAt = 0;

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

  start(onEnd) {
    if (this.listening) {
      return;
    }

    this.lastStartedAt = new Date().getTime();

    this.recognition.start();

    this.recognition.onresult = event => {
      const text = event.results[0][0].transcript;
      this.transcript = text;
      console.log("인식 : ", text);
    };

    this.recognition.onend = event => {
      onEnd(this.transcript);
      const timeSinceLast = new Date().getTime() - this.lastStartedAt;
      if (timeSinceLast < 1000) {
        setTimeout(function() {
          this.start(onEnd);
        }, 1000 - timeSinceLast);
      } else {
        this.start(onEnd);
      }
    };
  }
}
