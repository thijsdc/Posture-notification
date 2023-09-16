'use strict';

function setAlarm(event) {
 
  const slider = document.getElementById("mySlider");
  const minutes = parseFloat(slider.value);
  console.log(`Next alarm is in ${minutes}`);
  chrome.action.setBadgeText({ text: 'ON' });
  chrome.alarms.create({ periodInMinutes: minutes });
  chrome.storage.sync.set({ min: minutes });  
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