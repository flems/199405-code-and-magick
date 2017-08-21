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
var cloudColor = '#fff';
var shadowCloudColor = 'rgba(0, 0, 0, 0.7)';
var shadowStep = 10;
var textColor = '#000';
var histogramHeight = 150;
var histogramWidth = 40;
var histogramBegin = {
  column: {x: 200, y: 260},
  name: {x: 200, y: 270},
  time: {x: 200, y: 240},
};
var columnColor = 'rgba(32, 60, 171, 1)';
var columnColorYourResult = 'rgba(255, 0, 0, 1)';

window.renderStatistics = function (ctx, names, times) {
  var drawCloud = function (color, step) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(POINTS[0]['x'] + step, POINTS[0]['y'] + step);
    for (var i = 1; i < POINTS.length; i++) {
      ctx.lineTo(POINTS[i]['x'] + step, POINTS[i]['y'] + step);
    }
    ctx.closePath();
    ctx.fill();
  };
  drawCloud(shadowCloudColor, shadowStep);
  drawCloud(cloudColor, 0);

  ctx.fillStyle = textColor;
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 250, 40);
  ctx.fillText('Список результатов:', 240, 60);

  var maxTime = 0;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > maxTime) {
      maxTime = time;
    }
  }
  var result = histogramHeight / (maxTime - 0);

  var range = 0;
  for (i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = columnColorYourResult;
    } else {
      ctx.fillStyle = columnColor;
    }
    ctx.fillRect(histogramBegin['column']['x'] + range, histogramBegin['column']['y'] - result * times[i], histogramWidth, result * times[i]);
    ctx.fillText(names[i], histogramBegin['name']['x'] + range, histogramBegin['name']['y']);
    ctx.fillText((times[i] / 1000).toFixed(2), histogramBegin['time']['x'] + range, histogramBegin['time']['y'] - result * times[i]);
    range += 70;
  }
};
