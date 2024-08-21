console.log("this is content js");
// console.log("document", document);
// console.log("location", location);
// console.log("window", window);

const JENKINS_URL = "//build.脱敏.io/";
const url = location.href;
console.log(url);

if (url.includes(JENKINS_URL)) {
  const sidePanel = document.getElementById("side-panel");
  sidePanel.style.width = "450px";

  const buildRowCells = document.querySelectorAll(".build-row-cell");
  for (let i = 0; i < buildRowCells.length; i++) {
    buildRowCells[i].style.display = "flex";
    buildRowCells[i].style.flexDirection = "column";
    handleDivs(buildRowCells[i].childNodes[0]);
    handleLink(buildRowCells[i].childNodes[1]);
  }
}

function handleDivs(divs) {
  divs.style.width = "100%";
  for (let i = 0; i < divs.childNodes.length; i++) {
    divs.childNodes[i].style.width = "100%";
  }
}

function handleLink(divs) {
  divs.style.width = "100%";
  divs.style.textAlign = "end";
  divs.childNodes[0].style = "margin-right: 0px !important;";
}
