import {
  generatorUserLocalization,
  generatorHideAdressCheckbox,
} from "./domElements.js";
import { lastTenUsersDatabase } from "./getDataModules/lastTenUsersDatabase.js";
import { updateGeneratorData } from "./getDataModules/updateGeneratorData.js";
export { getData };

let url = new URL(
  "https://randomuser.me/api/?inc=name,nat,registered,picture,location"
);

async function getData() {
  if (generatorHideAdressCheckbox.checked)
    generatorUserLocalization.classList.add("hidden");
  else generatorUserLocalization.classList.remove("hidden");
  const res = await fetch(url);
  const response = await res.json();
  lastTenUsersDatabase(response);
  updateGeneratorData(response);
  return response;
}

/* Test*/
if (
  generatorUserLocalization == undefined ||
  generatorHideAdressCheckbox == undefined
) {
  throw " Error ⛔⛔⛔ DOM Elements import error, please ensure correct elements assignment";
}

if (lastTenUsersDatabase == undefined || updateGeneratorData == undefined) {
  throw " Error ⛔⛔⛔ function import error in getData.js";
}

if (getData() == undefined) {
  throw " Error ⛔⛔⛔ something went wrong while data fetch process, response is undefined";
}
