import FCM from "fcm-push";

export default class EmergencySender {
  constructor() {
    this.serverKey =
      "AAAAopVgHyg:APA91bHEp3FkFdeWYlqUEs4wx3PQJuIoOuE5z5_VDdDsF03u9k-t4pyI4LBIVHLn2EvyDAtmQj8Y73j0Wro_5J5qcD9cy8JAqab1tI4tfBSwY-8pb6NwCigW2hVD3f-JUoqQxfrTjk6n";
    this.clientKey =
      "dqE0kxtn3kM:APA91bFHvX0yhOIXWKhZL_esdy2KS-r3jKrxj2HeCVzR2JFlXQ-0QMaimLNur9_W7s1jNKRA1s8GsG5ByK6bqKS460LdeWJN71Dumu5VfCtWZUGnKq2igVnSNBHA_vPinIL2ZtSq55jZ";

    this.fcm = new FCM(this.serverKey);
  }

  send(body) {
    const pushData = {
      to: this.clientKey,
      notification: {
        title: "우산",
        body: body,
        sound: "default",
        click_action: "FCM_PLUGIN_ACTIVITY",
        icon: "fcm_push_icon"
      },
      priority: "high",
      restricted_package_name: "com.example.woosan",
      data: {
        num: "200"
      }
    };

    this.fcm.send(pushData, function(err, response) {
      if (err) {
        console.error("Push메시지 발송에 실패했습니다.");
        console.error(err);
        return;
      }

      console.log("Push메시지가 발송되었습니다.");
      console.log(response);
    });
  }
}
