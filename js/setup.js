'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_CLOAK = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var players = [];

var userDialog = document.querySelector('.overlay');
var otherUsers = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

function fillPlayers(){
  for (var i = 0; i < 4; i++){
    players[i] = {
      name: WIZARD_NAMES[getRandomInt(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInt(0, WIZARD_NAMES.length)],
      coatColor: WIZARD_CLOAK[getRandomInt(0, WIZARD_CLOAK.length)],
      eyesColor: WIZARD_EYES[getRandomInt(0, WIZARD_EYES.length)],
    }
  }
}
fillPlayers();

userDialog.classList.remove('hidden');

function creatWizardElement(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

function fillWizardList() {
  var wizardListFragment = document.createDocumentFragment();
  for (var i = 0; i < 4; i++) {
    wizardListFragment.appendChild(creatWizardElement(players[i]));
  }
  otherUsers.appendChild(wizardListFragment);
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};
fillWizardList();
