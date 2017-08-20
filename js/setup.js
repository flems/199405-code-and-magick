'use stict';
var userDialog = document.querySelector('.overlay');
var otherUsers = userDialog.querySelector('.setup-similar-list');
userDialog.classList.remove('hidden');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var  getRandomInt = function(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}
const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const WIZARD_CLOAK = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var players = [
  {
    name: WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInt(0, WIZARD_NAMES.length)],
    coatColor: WIZARD_CLOAK[getRandomInt(0, WIZARD_CLOAK.length)],
    eyesColor: WIZARD_EYES[getRandomInt(0, WIZARD_EYES.length)],
  },
  {
    name: WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInt(0, WIZARD_NAMES.length)],
    coatColor: WIZARD_CLOAK[getRandomInt(0, WIZARD_CLOAK.length)],
    eyesColor: WIZARD_EYES[getRandomInt(0, WIZARD_EYES.length)],
  },
  {
    name: WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInt(0, WIZARD_NAMES.length)],
    coatColor: WIZARD_CLOAK[getRandomInt(0, WIZARD_CLOAK.length)],
    eyesColor: WIZARD_EYES[getRandomInt(0, WIZARD_EYES.length)],
  },
  {
    name: WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInt(0, WIZARD_NAMES.length)],
    coatColor: WIZARD_CLOAK[getRandomInt(0, WIZARD_CLOAK.length)],
    eyesColor: WIZARD_EYES[getRandomInt(0, WIZARD_EYES.length)],
  },

];
var renderWizard = function(wizard){
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}
var WizardListFragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++){
  WizardListFragment.appendChild(renderWizard(players[i]));
};
otherUsers.appendChild(WizardListFragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
