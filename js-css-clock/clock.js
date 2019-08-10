const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function calcDegrees(unit, m){

  return (unit/m)*360;

}

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondDegrees = calcDegrees(seconds, 60);
  const minuteDegrees = calcDegrees(minutes, 60);
  const hourDegrees = calcDegrees(hours, 12) + (minuteDegrees/12);
  secondHand.style.transform = `rotate(${90+secondDegrees}deg)`;
  minuteHand.style.transform = `rotate(${90+minuteDegrees}deg)`;
  hourHand.style.transform = `rotate(${90+hourDegrees}deg)`;
}

setInterval(setDate,1000);