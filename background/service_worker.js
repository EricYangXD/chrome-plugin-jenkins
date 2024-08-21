// import "./module_1.js";
// import "./module_2.js";

console.log("service_worker.js");

// setInterval(() => {
//   chrome.notifications.create(
//     {
//       type: "basic",
//       title: "Notifications Title",
//       message: "Notifications message to display",
//       iconUrl: "../icons/icon.png"
//     },
//     (notificationId) => {
//       console.log('notificationId-->', notificationId)
//     }
//   );
// }, 3000)

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === "fromPopup") {
    chrome.notifications.create(
      {
        type: "basic",
        title: "Notifications Title",
        message: "Notifications message to display",
        iconUrl: "../icons/icon.png",
      },
      (notificationId) => {
        console.log("notificationId-->", notificationId);
      }
    );
  }
});
