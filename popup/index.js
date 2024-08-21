console.log("扩展左侧边栏宽度");

document.addEventListener("DOMContentLoaded", () => {
  const jwtBtn = document?.getElementById("jwtBtn");
  jwtBtn?.addEventListener("click", () => {
    // window.open("https://jwt.io/", "_blank");
    chrome.tabs.create({ url: "https://jwt.io/" });
  });
});

// const plugin_search_but = document.getElementById("plugin_search_but");
// plugin_search_but.onclick = function () {
//   alert("plugin_search_inp的值为：" + plugin_search_inp.value.trim());
//   console.log("chrome", chrome);
//   chrome.runtime.sendMessage({
//     action: "fromPopup",
//     message: "Hello from Popup!",
//   });
// };
