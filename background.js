chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, { file: "script.js" },
  function() {
    chrome.browserAction.setBadgeBackgroundColor({color:[0, 200, 0, 100]});
    chrome.browserAction.setBadgeText({text:"ok"});
    chrome.alarms.create('showBadgeText', {when: Date.now() + 3000});
    chrome.alarms.onAlarm.addListener(function() {
      chrome.browserAction.setBadgeText({text:""});
    });
  });
});
