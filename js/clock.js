const clock = document.querySelector("h2#clock");

function getClock() {
    clock.innerText = new Date().toLocaleTimeString();
  }
  
  setInterval(getClock,1000);