"use strict";

// VARIABLES

const navEl = document.querySelector(`.navigation`);
const btnLearnMore = document.querySelectorAll(`.learn-more`);
const btnNav = document.querySelectorAll(`.navigation h3`);
const btnLearnMoreIcon = document.querySelectorAll(`.icon`);
const sectionEl = document.querySelectorAll(`section`);

// EVENTS
for (let i = 0; i < btnLearnMore.length; i++) {
  // checkActiveButton();
  //On hover orange text and rotate icon
  btnLearnMore[i].addEventListener(`mouseover`, function () {
    btnLearnMore[i].style.color = `var(--orange)`;
    btnLearnMoreIcon[i].style.transform = `rotate(90deg)`;
  });
  //On mouseout return to default style
  btnLearnMore[i].addEventListener(`mouseout`, function () {
    btnLearnMore[i].style.color = `white`;
    btnLearnMoreIcon[i].style.transform = `rotate(0deg)`;
  });
  //On click go to next section
  btnLearnMore[i].addEventListener(`click`, function () {
    sectionEl[i + 1].scrollIntoView({});
  });
}

// function checkActiveButton() {
//   console.log(`Heyo`);
// }

for (let i = 0; i < btnNav.length; i++) {
  //On hover orange text and rotate icon
  btnNav[i].addEventListener(`mouseover`, function () {
    btnNav[i].style.color = `var(--orange)`;
  });
  //On mouseout return to default style
  btnNav[i].addEventListener(`mouseout`, function () {
    btnNav[i].style.color = `white`;
  });
  //On click go to next section
  btnNav[i].addEventListener(`click`, function () {
    sectionEl[i + 1].scrollIntoView({});
  });
}
