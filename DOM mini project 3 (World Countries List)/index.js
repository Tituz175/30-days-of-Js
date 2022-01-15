const title = document.querySelector("h1");
const subtitle = document.getElementById("total-countries");
const sub_subtitle = document.querySelector("h3");
const author = document.querySelector("h4");
const countries_container = document.querySelector(".countries-container");
const countries_wrapper = document.querySelector(".countries-wrapper");
const totalCountry = countries.length;

document.body.style.fontFamily = "Montserrat";
document.body.style.listStyle = "none";
document.body.style.boxSizing = "border-box";

title.style.fontWeight = "400";
title.style.textAlign = "center";
title.style.letterSpacing = "2px";

subtitle.style.fontWeight = "300";
subtitle.style.textAlign = "center";
subtitle.style.letterSpacing = "5px";
subtitle.style.textTransform = "capitalize";
subtitle.innerHTML = `${subtitle.innerHTML} ${totalCountry}`;

sub_subtitle.style.fontWeight = "300";
sub_subtitle.style.textAlign = "center";
sub_subtitle.style.letterSpacing = "8px";

author.style.fontWeight = "300";
author.style.textAlign = "center";
author.style.letterSpacing = "12px";

countries_container.style.textAlign = "left";
countries_container.style.padding = "5px";
countries_container.style.width = "50%";
countries_container.style.margin = "auto";

countries_wrapper.style.display = "flex";
countries_wrapper.style.flexWrap = "wrap";
countries_wrapper.style.justifyContent = "space-between";

countries.forEach((country, i) => {
  let conElement = document.createElement("span");
  conElement.innerHTML = country;
  conElement.style.border = "1px solid #D0D7DE";
  conElement.style.borderRadius = "10px";
  conElement.style.padding = "0px 25px";
  conElement.style.textAlign = "center";
  conElement.style.margin = "2px";
  conElement.style.width = "100px";
  conElement.style.minHeight = "100px";
  conElement.style.display = "flex";
  conElement.style.alignItems = "center";
  conElement.style.justifyContent = "center";
  conElement.style.fontWeight = "400";
  conElement.style.color = "rgba(0,0,0,0.8.5)"
  countries_wrapper.appendChild(conElement);
});
