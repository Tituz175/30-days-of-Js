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
const authorBio = asabenehChallenges2020.author.bio;
const author = asabenehChallenges2020.author;

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
title.style.textAlign = "center";

subTitle.innerHTML = asabenehChallenges2020.challengeSubtitle;
subTitle.style.fontWeight = "300";
subTitle.style.textDecoration = "underline";
subTitle.style.letterSpacing = "0.0625em";
subTitle.style.textAlign = "center";

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

let aboutSection = document.createElement("section");

let authorName = document.createElement("h2");
authorName.style.fontWeight = "600";
authorName.style.margin = "0px auto";
authorName.textContent = `${authorFirstname} ${authorLastname}`;
authorName.style.textAlign = "center";

let socialContainer = document.createElement("div");
socialContainer.style.display = "flex";
socialContainer.style.justifyContent = "center";

authorSociallinks.forEach((social) => {
  let socialAnchor = document.createElement("a");
  socialAnchor.style.margin = "auto 4px";
  socialAnchor.style.fontSize = "30px";
  socialAnchor.style.color = "rgba(0,0,0,0.6)";
  socialAnchor.setAttribute("href", social.url);
  socialAnchor.setAttribute("target", "blank");
  socialAnchor.innerHTML = social.fontawesomeIcon;
  socialContainer.appendChild(socialAnchor);
});

let bioContainer = document.createElement("p");
bioContainer.style.width = "45%";
bioContainer.style.textAlign = "center";
bioContainer.style.margin = "0px auto";
bioContainer.style.marginBottom = "40px"
bioContainer.style.padding = "15px 8px 5px";
bioContainer.style.fontWeight = "400"
bioContainer.textContent = authorBio;

let cv = document.createElement("div");
cv.style.width = "50%";
cv.style.display = "flex";
cv.style.justifyContent = "space-around";
cv.style.alignItems = "left";
cv.style.margin = "0px auto";

let titlesContainer = document.createElement("div");
let titleFirstelement = document.createElement("h4");
titleFirstelement.style.margin = "8px auto"
titleFirstelement.textContent = "Titles";
titleFirstelement.style.fontWeight = "600"
titlesContainer.appendChild(titleFirstelement);

authorTitles.forEach(([icon, title], i) => {
  let eachTitle = document.createElement("div");
  eachTitle.style.margin = "2px auto"
  let iconElement = document.createElement("span");
  let titleElement = document.createElement("span");
  iconElement.textContent = icon;
  titleElement.textContent = title;
  titleElement.style.fontWeight = "300"
  titleElement.style.marginLeft = "10px"
  eachTitle.append(iconElement);
  eachTitle.append(titleElement);
  titlesContainer.append(eachTitle);
});

let skillsContainer = document.createElement("div");

let skillFirstelement = document.createElement("h4");
skillFirstelement.textContent = "Skills";
skillFirstelement.style.margin = "8px auto"
skillFirstelement.style.fontWeight = "600"
skillsContainer.appendChild(skillFirstelement);

authorSkills.forEach((skill, i) => {
  let checkIcon = "✅";
  let eachSkill = document.createElement("div");
  eachSkill.style.margin = "2px auto"
  let iconElement = document.createElement("span");
  let skillElement = document.createElement("span");
  iconElement.textContent = checkIcon;
  skillElement.textContent = skill;
  skillElement.style.fontWeight = "300"
  skillElement.style.marginLeft = "10px"
  eachSkill.append(iconElement);
  eachSkill.append(skillElement);
  skillsContainer.append(eachSkill);
});

let qualificationsContainer = document.createElement("div");

let qualificationFirstelement = document.createElement("h4");
qualificationFirstelement.textContent = "Qualifications";
qualificationFirstelement.style.margin = "8px auto"
qualificationFirstelement.style.fontWeight = "600"
qualificationsContainer.appendChild(qualificationFirstelement);

authorQualifications.forEach((qualification, i) => {
  let firstIcon = "📖";
  let restIcon = "👨‍🎓";
  let eachQualification = document.createElement("div");
  eachQualification.style.margin = "2px auto"
  let iconElement = document.createElement("span");
  let qualificationElement = document.createElement("span");
  i == 0
    ? (iconElement.textContent = firstIcon)
    : (iconElement.textContent = restIcon);
    qualificationElement.textContent = qualification
    qualificationElement.style.fontWeight = "300"
    qualificationElement.style.marginLeft = "10px"
    eachQualification.append(iconElement)
    eachQualification.append(qualificationElement)
    qualificationsContainer.append(eachQualification)
});

cv.appendChild(titlesContainer);
cv.appendChild(skillsContainer);
cv.appendChild(qualificationsContainer);

aboutSection.appendChild(authorName);
aboutSection.appendChild(socialContainer);
aboutSection.appendChild(bioContainer);
aboutSection.appendChild(cv);

wrapper.appendChild(title);
wrapper.appendChild(subTitle);
wrapper.appendChild(date);
wrapper.appendChild(listContainer);
wrapper.appendChild(aboutSection);

// wrapper.appendChild(cv)


let v = document.querySelectorAll("section div div")
v.forEach((a)=>{
    console.log(a)
})