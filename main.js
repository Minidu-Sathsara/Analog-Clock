let hrhand = document.querySelector(".hour");
let minhand = document.querySelector(".minute");
let sechand = document.querySelector(".second");

let time = setInterval(() => {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let hrDeg = hr* 30 + min /2;
  let minDeg = min * 6 + sec /10;
  let secDeg = sec * 6;

  hrhand.style.transform = `rotate(${hrDeg}deg)`;
  minhand.style.transform = `rotate(${minDeg}deg)`;
  sechand.style.transform = `rotate(${secDeg}deg)`;
},1000);