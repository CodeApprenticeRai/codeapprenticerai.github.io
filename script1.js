

var tonightAt11 = new Date();
tonightAt11.setHours(23,0,0,0);
tonightAt11 = tonightAt11.getTime();

var doThis = setInterval(function(){
  var now = new Date().getTime();

  var distance = tonightAt11 - now;

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('time-left').innerHTML = hours + ":" + minutes + ":" + seconds;

  if ( distance < 0 ){
    document.getElementById('time-left').innerHTML = " After Hours ";
  }
}, 1000 ); 

 // availableEffectiveTime(), 1000);
