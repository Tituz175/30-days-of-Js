const title = document.querySelector("h1");
const subtitle = document.querySelector("h2");
const author = document.querySelector("h3");
const container = document.querySelector(".wrapper");

document.body.style.fontFamily = "Montserrat";
document.body.style.listStyle = "none";
document.body.style.boxSizing = "border-box";

title.style.fontWeight = "400";
title.style.textAlign = "center";
title.style.letterSpacing = "2px";

subtitle.style.fontWeight = "300";
subtitle.style.textAlign = "center";
subtitle.style.letterSpacing = "5px";

author.style.fontWeight = "300";
author.style.textAlign = "center";
author.style.letterSpacing = "12px";

container.style.textAlign = "center";
container.style.padding = "5px";
container.style.width = "30%";
container.style.margin = "auto";

for (let index = 0; index <= 101; index++) {
  const element = document.createElement("span");
  element.style.width = "16%";
  element.style.display = "inline-block";
  element.style.textAlign = "center";
  element.style.fontSize = "25px";
  element.style.fontWeight = "400";
  element.style.padding = "10px 0px";
  element.style.margin = "1.5px 1.5px";
  element.textContent = index;
  element.style.color = "white";
  if (index % 2 == 0) {
    let fac = 0;
    for (let b = 2; b < index; b++) {
      if (index % b == 0) {
        fac = 1;
        break;
      }
    }
    if (index > 1 && fac == 0) {
      element.style.backgroundColor = "#fd5e53";
    } else {
      element.style.backgroundColor = "#21bf73";
    }
  } else if (index % 2 == 1) {
    let fac = 0;
    for (let b = 2; b < index; b++) {
      if (index % b == 0) {
        fac = 1;
        break;
      }
    }
    if (index > 1 && fac == 0) {
      element.style.backgroundColor = "#fd5e53";
    } else {
      element.style.backgroundColor = "#fddb3a";
    }
  }
  container.appendChild(element);
}
