let colorGenrator = () => {
  let source = "1234567890abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * source.length);
    let randomChar = source[randomNum];
    color += randomChar;
  }
  return color;
};
const showDateTime = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const now = new Date();
  const year = now.getFullYear();
  const month = months[now.getMonth()];
  const date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  const dateMonthYear = `${month} ${date}, ${year}`;

  const time = hours + ":" + minutes;
  const fullTime = dateMonthYear + " " + time;
  return fullTime + `:${seconds}`;
};
document.querySelector("div").setAttribute("class", "wrapper");
document.querySelector("span").setAttribute("class", "year");
document.querySelector("h1").setAttribute("id", "title");
document.querySelector("h2").setAttribute("id", "subtitle");
document.querySelector("p").setAttribute("id", "date");
document.querySelector("p").style.width = "25%";
document.querySelector("p").style.textAlign = "center";
setInterval(() => {
  let color = colorGenrator();
  let bgColor = colorGenrator();
  document.querySelector("span").style.color = color;
  document.querySelector("p").innerHTML = showDateTime();
  document.querySelector("p").style.backgroundColor = bgColor;
}, 1000);

let liElements = document.querySelectorAll("li");
liElements.forEach((element, i) => {
  element.setAttribute("class", "list");
  if (element.innerHTML.includes("Done")) {
    element.classList.add("done");
  } else if (element.innerHTML.includes("Ongoing")) {
    element.classList.add("ongoing");
  } else {
    element.classList.add("coming");
  }
});
