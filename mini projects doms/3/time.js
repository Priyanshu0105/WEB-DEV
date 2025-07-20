const time = document.querySelector('#clock');

setInterval(function(){
  let timee = new Date();
  let timeee = timee.toLocaleTimeString();
  time.innerHTML = timeee;
} , 1000);
