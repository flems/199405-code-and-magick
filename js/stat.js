window.renderStatistics = function(ctx, names, times){
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.beginPath();
  ctx.moveTo(130, 165);
  ctx.lineTo(190, 30);
  ctx.lineTo(500, 30);
  ctx.lineTo(550, 165);
  ctx.lineTo(490, 300);
  ctx.lineTo(190, 300);
  ctx.lineTo(130, 165);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.moveTo(120, 155);
  ctx.lineTo(180, 20);
  ctx.lineTo(490, 20);
  ctx.lineTo(540, 155);
  ctx.lineTo(480, 290);
  ctx.lineTo(180, 290);
  ctx.lineTo(120, 155);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 250, 40);
  ctx.fillText('Список результатов:', 240, 60);

  var maxTime = 0;
  var maxIndex = 0;
  for(var i = 0; i < times.length; i++){
    var time = times[i];
    if(time > maxTime){
      maxTime = time;
      maxIndex = i;
    }
  }
  var histogramHeight = 150;
  var result = histogramHeight / (maxTime - 0);

  var yourResult = 'игрок';
  var playerIndex = 0;

  for(var i = 0; i < names.length; i++){
    var playerName = names[i];
    if(playerName === 'Вы'){
      yourResult = playerName;
      playerIndex = i;
    }
  };

  var range = 0;
  var histogramWidth = 0;
  for(var i = 0; i < names.length; i++){
    if(names[i] === 'Вы') {
     ctx.fillStyle = 'rgba(255, 0, 0, 1)';
   } else {
     ctx.fillStyle = 'rgba(32, 60, 171, 1)';
   }
     ctx.fillRect(200 + range + histogramWidth, 110, 40, result * times[i]);
     ctx.textBaseline = 'hanging';
     ctx.fillText(names[i], 200 + range + histogramWidth, 120 + result * times[i]);
     ctx.fillText((times[i]/1000).toFixed(2), 200 + range + histogramWidth, 90);
     range += 30;
     histogramWidth += 40;
  }
}
