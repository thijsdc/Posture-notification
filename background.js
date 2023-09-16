'use strict';

chrome.alarms.onAlarm.addListener(() => {  
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'spine16.png',
    title: 'Correct posture!',
    message: "Correct your posture!",    
    priority: 0
  });
});

