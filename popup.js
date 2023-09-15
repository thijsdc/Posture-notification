'use strict';

function getRandomNumber(min, max) {
  const randomDecimal = Math.random();
  const randomInRange = randomDecimal * (max - min) + min;
  const randomInteger = Math.floor(randomInRange);
  return randomInteger;
}

function setAlarm(event) {
 
  const slider = document.getElementById("mySlider");
  const minValue = parseFloat(slider.value);
  const minutes = getRandomNumber(minValue, 60);
  console.log(`Next alarm is in ${minutes}`);
  chrome.action.setBadgeText({ text: 'ON' });
  chrome.alarms.create({ delayInMinutes: minutes });
  chrome.storage.sync.set({ min: minValue });  
}

function clearAlarm() {
  chrome.action.setBadgeText({ text: '' });
  chrome.alarms.clearAll();
  window.close();
}


document.getElementById('activate').addEventListener('click', setAlarm);
document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);

const slider = document.getElementById("mySlider");
slider.addEventListener("input", function () {
  sliderOutput.textContent = this.value;
});