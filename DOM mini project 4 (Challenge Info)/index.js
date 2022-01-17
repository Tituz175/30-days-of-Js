// my variables
const wrapper = document.querySelector(".wrapper");
const title = document.createElement("h1");
const year = document.createElement("span");
const subTitle = document.createElement("h2");
const date = document.createElement("p");
const listContainer = document.createElement("div");
const authorName = document.createElement("h2");
const challenges = asabenehChallenges2020.challenges;
const authorFirstname = asabenehChallenges2020.author.firstName;
const authorLastname = asabenehChallenges2020.author.lastName;
const socialContainer = document.createElement("div");
const bioContainer = document.createElement("p");
const authorBio = asabenehChallenges2020.author.bio;
const aboutSection = document.createElement("section");
const cv = document.createElement("div");
const titlesContainer = document.createElement("div");
const titleFirstelement = document.createElement("h4");
const skillsContainer = document.createElement("div");
const skillFirstelement = document.createElement("h4");
const qualificationsContainer = document.createElement("div");
const qualificationFirstelement = document.createElement("h4");
const authorTitles = asabenehChallenges2020.author.titles;
const authorSkills = asabenehChallenges2020.author.skills;
const authorQualifications = asabenehChallenges2020.author.qualifications;
const authorSociallinks = asabenehChallenges2020.author.socialLinks;
const footer = document.createElement("footer");
const footerTitle = document.createElement("h4");
const footerContainer = document.createElement("div");
const keywords = asabenehChallenges2020.keywords;

// this function generate random hex color
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

// this function get the time and date
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

// setting the whole page font family, padding and margin
document.body.style.fontFamily = "Montserrat";
document.body.style.padding = "0";
document.body.style.margin = "0";

// formating and styling the title element (h1)
title.innerHTML = `${asabenehChallenges2020.challengeTitle} in `;
title.style.fontWeight = "500";
title.appendChild(year);
title.style.textAlign = "center";

// formatting and styling the year in the title element
year.innerHTML = asabenehChallenges2020.challengeYear;
year.style.fontSize = "96px";
year.style.fontWeight = "700";

// this function set the year color, date background color to a random color and also gets the date and time
setInterval(() => {
  year.style.color = colorGenrator();
  date.innerHTML = showDateTime();
  date.style.backgroundColor = colorGenrator();
}, 1000);

// formating and styling the sub title element (h2)
subTitle.innerHTML = asabenehChallenges2020.challengeSubtitle;
subTitle.style.fontWeight = "300";
subTitle.style.textDecoration = "underline";
subTitle.style.letterSpacing = "0.0625em";
subTitle.style.textAlign = "center";

// styling the date element (p)
date.style.padding = "15px";
date.fontWeight = "400";
date.style.fontSize = "16px"
date.style.margin = "auto auto";
date.style.width = "12%";
date.style.boxSizing = "border-box";
date.style.borderRadius = "5px"
date.style.textAlign = "center"

// styling the list container for the challenges.
listContainer.style.width = "50%";
listContainer.style.margin = "16px auto";

// this loop loops through the challenges [] create, format and style the list.
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
  challengeContainer.style.borderRadius = "10px"
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

// formating and styling of the author name
authorName.style.fontWeight = "600";
authorName.style.margin = "0px auto";
authorName.textContent = `${authorFirstname} ${authorLastname}`;
authorName.style.textAlign = "center";
aboutSection.appendChild(authorName);

// styling of the author social links container
socialContainer.style.display = "flex";
socialContainer.style.justifyContent = "center";

// this loop loops through the authorSociallinks [] create, format and style the social icons.
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
aboutSection.appendChild(socialContainer);

// styling the author's bio
bioContainer.style.width = "45%";
bioContainer.style.textAlign = "center";
bioContainer.style.margin = "0px auto";
bioContainer.style.marginBottom = "40px";
bioContainer.style.padding = "15px 8px 5px";
bioContainer.style.fontWeight = "400";
bioContainer.textContent = authorBio;
aboutSection.appendChild(bioContainer);

// styling the cv element the houses the titles, skills and qualifications of the author.
cv.style.width = "50%";
cv.style.display = "flex";
cv.style.justifyContent = "space-around";
cv.style.alignItems = "left";
cv.style.margin = "0px auto";

// formating and styling the title first element
titleFirstelement.style.margin = "8px auto";
titleFirstelement.textContent = "Titles";
titleFirstelement.style.fontWeight = "600";
titlesContainer.appendChild(titleFirstelement);

// this loop loops through the authorTitles [], create and style the author's title elements
authorTitles.forEach(([icon, title], i) => {
  let eachTitle = document.createElement("div");
  eachTitle.style.margin = "2px auto";
  let iconElement = document.createElement("span");
  let titleElement = document.createElement("span");
  iconElement.textContent = icon;
  titleElement.textContent = title;
  titleElement.style.fontWeight = "300";
  titleElement.style.marginLeft = "10px";
  eachTitle.append(iconElement);
  eachTitle.append(titleElement);
  titlesContainer.append(eachTitle);
});
cv.appendChild(titlesContainer);

// formating and styling the skill first element
skillFirstelement.textContent = "Skills";
skillFirstelement.style.margin = "8px auto";
skillFirstelement.style.fontWeight = "600";
skillsContainer.appendChild(skillFirstelement);

// this loop loops through the authorSkills [], create and style the author's skill elements
authorSkills.forEach((skill, i) => {
  let checkIcon = "✅";
  let eachSkill = document.createElement("div");
  eachSkill.style.margin = "2px auto";
  let iconElement = document.createElement("span");
  let skillElement = document.createElement("span");
  iconElement.textContent = checkIcon;
  skillElement.textContent = skill;
  skillElement.style.fontWeight = "300";
  skillElement.style.marginLeft = "10px";
  eachSkill.append(iconElement);
  eachSkill.append(skillElement);
  skillsContainer.append(eachSkill);
});
cv.appendChild(skillsContainer);

// formating and styling of the qualification first element
qualificationFirstelement.textContent = "Qualifications";
qualificationFirstelement.style.margin = "8px auto";
qualificationFirstelement.style.fontWeight = "600";
qualificationsContainer.appendChild(qualificationFirstelement);

//  this loop loops through the authorQualifications [], create and style the author's qualification elements
authorQualifications.forEach((qualification, i) => {
  let firstIcon = "📖";
  let restIcon = "👨‍🎓";
  let eachQualification = document.createElement("div");
  eachQualification.style.margin = "2px auto";
  let iconElement = document.createElement("span");
  let qualificationElement = document.createElement("span");
  i == 0
    ? (iconElement.textContent = firstIcon)
    : (iconElement.textContent = restIcon);
  qualificationElement.textContent = qualification;
  qualificationElement.style.fontWeight = "300";
  qualificationElement.style.marginLeft = "10px";
  eachQualification.append(iconElement);
  eachQualification.append(qualificationElement);
  qualificationsContainer.append(eachQualification);
});
cv.appendChild(qualificationsContainer);
aboutSection.appendChild(cv);

// styling of footer element of the page
footer.style.width = "45%";
footer.style.margin = "0px auto";

// formating and styling of footer title element of the page
footerTitle.textContent = "Keywords";
footer.appendChild(footerTitle);

// styling of the footer items container of the page
footerContainer.style.display = "flex";
footerContainer.style.flexWrap = "wrap";
footerContainer.style.paddingLeft = "5%";
footerContainer.style.boxSizing = "border-box";
footer.appendChild(footerContainer);

// this loop loops through the keywords [] and create, format and style the footer items
keywords.forEach((word) => {
  let wordElement = document.createElement("div");
  wordElement.style.backgroundColor = colorGenrator();
  wordElement.style.boxSizing = "border-box";
  wordElement.style.borderRadius = "10px";
  wordElement.style.padding = "5px 10px";
  wordElement.style.margin = "4px auto";
  wordElement.textContent = `#${word}`;
  footerContainer.append(wordElement);
});

// these line of codes shows the major child elements appended to the mother element (.wrapper).
wrapper.appendChild(title);
wrapper.appendChild(subTitle);
wrapper.appendChild(date);
wrapper.appendChild(listContainer);
wrapper.appendChild(aboutSection);
wrapper.appendChild(footer);
