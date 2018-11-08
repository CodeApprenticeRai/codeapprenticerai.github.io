

var bedtime = new Date();
bedtime.setHours(21,0,0,0);
bedtime = bedtime.getTime();

var doThis = setInterval(function(){
  var now = new Date().getTime();

  var distance = bedtime - now;

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) - 5;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('time-left').innerHTML = hours + ":" + minutes + ":" + seconds;

  if ( distance < 0 ){
    document.getElementById('time-left').innerHTML = " After Hours ";
  }
}, 1000 ); 


 // availableEffectiveTime(), 1000);
