'use strict';
var fireballSize = 22;
var getFireballSpeed = function (left) {
  if (left) {
    return 5;
  } else {
    return 2;
  }
};
var wizardSpeed = 3;
var wizardWidth = 70;
var getWizardHeight = function () {
  return 1.337 * wizardWidth;
};
var getWizardX = function (width) {
  var magePositionX = width / 2 - wizardWidth / 2;
  return magePositionX;
};
var getWizardY = function (height) {
  var magePositionY = height / 3;
  return magePositionY;
};
