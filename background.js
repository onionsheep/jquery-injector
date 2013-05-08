var buttonClicked = function() {
  var version = localStorage["jquery_version"] || "2.0.0";
  var script = [];
  var scriptSource = 'https://ajax.googleapis.com/ajax/libs/jquery/' + version + '/jquery.min.js';
  script.push('var head = document.getElementsByTagName("head")[0];');
  script.push('var script = document.createElement("script");');
  script.push('script.type = "text/javascript";');
  script.push('script.src = "' + scriptSource + '";');
  script.push('head.appendChild(script);');
  chrome.tabs.executeScript(null, { code: script.join('') });
  chrome.browserAction.setBadgeBackgroundColor({color:[0, 200, 0, 100]});
  chrome.browserAction.setBadgeText({text:version});
  chrome.alarms.create('showBadgeText', {when: Date.now() + 3000});
  chrome.alarms.onAlarm.addListener(function() {
    chrome.browserAction.setBadgeText({text:""});
  });
};
chrome.browserAction.onClicked.addListener(buttonClicked);
