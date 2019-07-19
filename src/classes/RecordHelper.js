import vmsg from "vmsg";

export default class RecorderHelper {
  constructor() {
    this.recorder = new vmsg.Recorder({
      wasmURL: "https://unpkg.com/vmsg@0.3.0/vmsg.wasm"
    });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async startRecording(sec) {
    await this.recorder.initAudio();
    await this.recorder.initWorker();
    this.recorder.startRecording();

    await this.sleep(sec * 1000);

    const blob = await this.recorder.stopRecording();
    return URL.createObjectURL(blob);
  }
}
