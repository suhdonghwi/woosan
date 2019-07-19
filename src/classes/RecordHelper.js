import vmsg from "vmsg";

export default class RecorderHelper {
  constructor() {
    this.recorder = new vmsg.Recorder({
      wasmURL: "https://unpkg.com/vmsg@0.3.0/vmsg.wasm"
    });
  }

  async startRecording() {
    await this.recorder.initAudio();
    await this.recorder.initWorker();
    this.recorder.startRecording();
  }

  async stopRecording() {
    const blob = await this.recorder.stopRecording();

    return URL.createObjectURL(blob);
  }
}
