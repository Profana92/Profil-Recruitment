export {
  generatorButton,
  generatorUserFirstName,
  generatorUserLastName,
  generatorImage,
  generatorUserRegisterDate,
  generatorUserNationality,
  generatorUserLocalization,
  generatorMainWrap,
  generatorHideAdressCheckbox,
};

let generatorButton = document.querySelector("button");
let generatorUserFirstName = document.querySelector(".user__firstname");
let generatorUserLastName = document.querySelector(".user__lastname");
let generatorImage = document.querySelector("img");
let generatorUserRegisterDate = document.querySelector(".user__registerdate");
let generatorUserNationality = document.querySelector(".user__nationality");
let generatorUserLocalization = document.querySelector(".user__location");
let generatorMainWrap = document.querySelector(".wrap");
let generatorHideAdressCheckbox = document.querySelector(
  "#hideadress__checkbox"
);

/* Test*/
if (
  generatorButton == undefined ||
  generatorUserFirstName == undefined ||
  generatorUserLastName == undefined ||
  generatorImage == undefined ||
  generatorUserRegisterDate == undefined ||
  generatorUserNationality == undefined ||
  generatorUserLocalization == undefined ||
  generatorMainWrap == undefined ||
  generatorHideAdressCheckbox == undefined
) {
  throw " Error ⛔⛔⛔ DOM Elements selection error, please ensure correct elements assignment";
}
