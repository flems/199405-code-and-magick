'use strict';

var POINTS = [
  {x: 120, y: 155},
  {x: 180, y: 20},
  {x: 490, y: 20},
  {x: 540, y: 155},
  {x: 480, y: 290},
  {x: 180, y: 290},
  {x: 120, y: 155},
];
var CLOUD_COLOR = '#fff';
var SHADOW_CLOUD_COLOR = 'rgba(0, 0, 0, 0.7)';
var SHADOW_STEP = 10;
var TEXT_COLOR = '#000';
var HISTOGRAM_HEIGHT = 150;
var HISTOGRAM_WIDTH = 40;
var HISTOGRAM_BEGIN = {
  column: {x: 200, y: 260},
  name: {x: 200, y: 270},
  time: {x: 200, y: 240},
};
var COLUMN_COLOR = 'rgba(32, 60, 171, 1)';
var COLUMN_COLOR_YOUR_RESULT = 'rgba(255, 0, 0, 1)';
var TEXT_WIN = {
  text: 'Ура вы победили!',
  x: 250,
  y: 40
};
var TEXT_RESULT = {
  text: 'Список результатов:',
  x: 240,
  y: 60
};

window.renderStatistics = function (ctx, names, times) {

  function drawCloud(color, step) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(POINTS[0].x + step, POINTS[0].y + step);
    for (var i = 1; i < POINTS.length; i++) {
      ctx.lineTo(POINTS[i].x + step, POINTS[i].y + step);
    }
    ctx.closePath();
    ctx.fill();
  }

  function drawText() {
    ctx.fillStyle = TEXT_COLOR;
    ctx.textBaseline = 'hanging';
    ctx.fillText(TEXT_WIN.text, TEXT_WIN.x, TEXT_WIN.y);
    ctx.fillText(TEXT_RESULT.text, TEXT_RESULT.x, TEXT_RESULT.y);
  }

  function findResult() {
    var maxTime = 0;
    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > maxTime) {
        maxTime = time;
      }
    }
    var result = HISTOGRAM_HEIGHT / (maxTime - 0);
    return result;
  }
  var result = findResult();

  function createHistogram() {
    var range = 0;
    for (var i = 0; i < names.length; i++) {
      if (names[i] === 'Вы') {
        ctx.fillStyle = COLUMN_COLOR_YOUR_RESULT;
      } else {
        ctx.fillStyle = COLUMN_COLOR;
      }
      ctx.fillRect(HISTOGRAM_BEGIN['column'].x + range, HISTOGRAM_BEGIN['column'].y - result * times[i], HISTOGRAM_WIDTH, result * times[i]);
      ctx.fillText(names[i], HISTOGRAM_BEGIN['name'].x + range, HISTOGRAM_BEGIN['name'].y);
      ctx.fillText((times[i] / 1000).toFixed(2), HISTOGRAM_BEGIN['time'].x + range, HISTOGRAM_BEGIN['time'].y - result * times[i]);
      range += 70;
    }
  }

  drawCloud(SHADOW_CLOUD_COLOR, SHADOW_STEP);
  drawCloud(CLOUD_COLOR, 0);
  drawText();
  createHistogram();

};
