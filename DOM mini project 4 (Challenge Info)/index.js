const wrapper = document.querySelector(".wrapper");
const title = document.createElement("h1");
const year = document.createElement("span");
const subTitle = document.createElement("h2");
const date = document.createElement("p");
const listContainer = document.createElement("div");
const challenges = asabenehChallenges2020.challenges;
const authorFirstname = asabenehChallenges2020.author.firstName;
const authorLastname = asabenehChallenges2020.author.lastName;
const authorTitles = asabenehChallenges2020.author.titles;
const authorSkills = asabenehChallenges2020.author.skills;
const authorQualifications = asabenehChallenges2020.author.qualifications;
const authorSociallinks = asabenehChallenges2020.author.socialLinks;

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

document.body.style.fontFamily = "Montserrat";
// document.body.style.textAlign = "center";
document.body.style.padding = "0";
document.body.style.margin = "0";

year.innerHTML = asabenehChallenges2020.challengeYear;
year.style.fontSize = "96px";
year.style.fontWeight = "700";
setInterval(() => {
  year.style.color = colorGenrator();
  date.innerHTML = showDateTime();
  date.style.backgroundColor = colorGenrator();
}, 1000);

title.innerHTML = `${asabenehChallenges2020.challengeTitle} in `;
title.style.fontWeight = "500";
title.appendChild(year);

subTitle.innerHTML = asabenehChallenges2020.challengeSubtitle;
subTitle.style.fontWeight = "300";
subTitle.style.textDecoration = "underline";

date.style.padding = "10px";
date.fontWeight = "400";
date.style.margin = "auto auto";
date.style.width = "12%";
date.style.boxSizing = "border-box";

listContainer.style.width = "50%";
listContainer.style.margin = "16px auto";

console.log(challenges);
challenges.forEach((challenge) => {
  let challengeContainer = document.createElement("div");
  challengeContainer.style.display = "flex";
  challengeContainer.style.justifyItems = "center";
  challengeContainer.style.justifyContent = "space-between";
  challengeContainer.style.padding = "25px";
  challengeContainer.style.margin = "3px";
  challengeContainer.style.fontWeight = "300";
  challengeContainer.style.fontSize = "16px";
  challengeContainer.style.letterSpacing = "0.0625em";
  let challengeName = document.createElement("div");
  challengeName.innerHTML = challenge.name;
  challengeName.style.display = "flex";
  challengeName.style.justifyItems = "center";
  challengeName.style.alignSelf = "center";
  challengeContainer.appendChild(challengeName);
  let challengeTopics = document.createElement("details");
  challenge.topics.forEach((topic, i) => {
    if (i == 0) {
      let firstTopic = document.createElement("summary");
      firstTopic.innerHTML = topic;
      firstTopic.style.margin = "10px auto";
      firstTopic.style.textAlign = "left";
      challengeTopics.appendChild(firstTopic);
    } else if (i != 0) {
      let otherTopic = document.createElement("p");
      otherTopic.innerHTML = topic;
      otherTopic.style.margin = "10px auto";
      otherTopic.style.textAlign = "left";
      challengeTopics.appendChild(otherTopic);
    }
  });
  challengeContainer.appendChild(challengeTopics);
  let challengeStatus = document.createElement("div");
  challengeStatus.innerHTML = challenge.status;
  challengeStatus.style.display = "flex";
  challengeStatus.style.justifyItems = "center";
  challengeStatus.style.alignSelf = "center";
  if (challenge.status == "Done") {
    challengeContainer.style.backgroundColor = "#21bf73";
  } else if (challenge.status == "Ongoing") {
    challengeContainer.style.backgroundColor = "#fddb3a";
  } else {
    challengeContainer.style.backgroundColor = "#fd5e53";
  }
  challengeContainer.appendChild(challengeStatus);
  listContainer.appendChild(challengeContainer);
});

let authorName = document.createElement("h2");
authorName.style.fontWeight = "600";
authorName.textContent = `${authorFirstname} ${authorLastname}`;

let socialContainer = document.createElement("div");
socialContainer.style.display = "flex";
socialContainer.style.justifyContent = "center";

authorSociallinks.forEach((social) => {
  let socialAnchor = document.createElement("a");
  socialAnchor.setAttribute("href", social.url);
  socialAnchor.setAttribute("_target", "blank");
  let socialIcon = document.createElement("i");
//   socialIcon.innerHTML = social.fontawesomeIcon
//   socialIcon.innerHTML = social.fontawesomeIcon
//   socialIcon.setAttribute("class", `${social.fontawesomeIcon.slice(11, -2)}`);
//   socialAnchor.appendChild(socialIcon)
socialAnchor.innerHTML = social.fontawesomeIcon
  socialContainer.appendChild(socialAnchor)
  console.log(`${social.fontawesomeIcon}`)
});

wrapper.style.textAlign = "center";

wrapper.appendChild(title);
wrapper.appendChild(subTitle);
wrapper.appendChild(date);
wrapper.appendChild(listContainer);
wrapper.appendChild(authorName);
wrapper.appendChild(socialContainer);
