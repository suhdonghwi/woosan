import FCM from "fcm-push";

export default class EmergencySender {
  constructor() {
    // You need to set these to actually run woosan
    this.serverKey = "";
    this.clientKey = "";

    this.fcm = new FCM(this.serverKey);
  }

  send(body) {
    navigator.geolocation.getCurrentPosition(
      position => {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        console.log(latitude);
        console.log(longitude);
        console.log(position.coords.accuracy);

        const pushData = {
          to: this.clientKey,
          notification: {
            title: "우산",
            body: body,
            sound: "default",
            icon: "ic_stat_name"
          },
          priority: "high",
          restricted_package_name: "com.example.woosan",
          data: {
            latitude: String(latitude),
            longitude: String(longitude)
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
      },
      err => {
        console.warn(err);
      },
      {
        enableHighAccuracy: true
      }
    );
  }
}
