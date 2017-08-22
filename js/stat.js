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
// var COLUMN_COLOR = 'rgba(32, 60, 171, 1)';
// var COLUMN_COLOR_YOUR_RESULT = 'rgba(255, 0, 0, 1)';
var COLOR = {
  your: 'rgba(255, 0, 0, 1)',
  other: 'rgba(32, 60, 171, 1)',
};
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
var RANGE_BETWEN_COLUMN = 70;

window.renderStatistics = function (ctx, names, times) {

  function drawCloud(color, step, points) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(points[0].x + step, points[0].y + step);
    for (var i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x + step, points[i].y + step);
    }
    ctx.closePath();
    ctx.fill();
  }

  function drawText(color, win, result) {
    ctx.fillStyle = color;
    ctx.textBaseline = 'hanging';
    ctx.fillText(win.text, win.x, win.y);
    ctx.fillText(result.text, result.x, result.y);
  }

  function findResult(height) {
    var maxTime = 0;
    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > maxTime) {
        maxTime = time;
      }
    }
    var result = height / (maxTime - 0);
    return result;
  }
  var result = findResult(HISTOGRAM_HEIGHT);

  function createHistogram(begin, width, step, color) {
    var range = 0;
    for (var i = 0; i < names.length; i++) {
      if (names[i] === 'Вы') {
        ctx.fillStyle = color.your;
      } else {
        ctx.fillStyle = color.other;
      }
      ctx.fillRect(begin['column'].x + range, begin['column'].y - result * times[i], width, result * times[i]);
      ctx.fillText(names[i], begin['name'].x + range, begin['name'].y);
      ctx.fillText((times[i] / 1000).toFixed(2), begin['time'].x + range, begin['time'].y - result * times[i]);
      range += step;
    }
  }

  drawCloud(SHADOW_CLOUD_COLOR, SHADOW_STEP, POINTS);
  drawCloud(CLOUD_COLOR, 0, POINTS);
  drawText(TEXT_COLOR, TEXT_WIN, TEXT_RESULT);
  createHistogram(HISTOGRAM_BEGIN, HISTOGRAM_WIDTH, RANGE_BETWEN_COLUMN, COLOR);

};
