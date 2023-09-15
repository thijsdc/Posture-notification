// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

chrome.alarms.onAlarm.addListener(() => {
  chrome.action.setBadgeText({ text: '' });
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'spine16.png',
    title: 'Correct posture!',
    message: "Correct your posture!",
    buttons: [{ title: 'Done!' }],
    priority: 0
  });
});

chrome.notifications.onButtonClicked.addListener(async () => {
  const storageData = await chrome.storage.sync.get(['min']);
  const minValue = storageData.min;
  console.log(`The min value is: ${minValue}`);
  const minutes = getRandomNumber(minValue, 60); 
  chrome.action.setBadgeText({ text: 'ON' });
  chrome.alarms.create({ delayInMinutes: minutes});
  console.log(`Next alarm is in ${minutes}`);
});


function getRandomNumber(min, max) {
  const randomDecimal = Math.random();  
  const randomInRange = randomDecimal * (max - min) + min;  
  const randomInteger = Math.floor(randomInRange);
  return randomInteger;
}
