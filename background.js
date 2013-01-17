chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.executeScript(null, { file: "script.js" }, function() {
      var version = localStorage["jquery_version"] || "1.9";
      chrome.tabs.sendMessage(tab.id, {version: version}, function(response) {
        chrome.browserAction.setBadgeBackgroundColor({color:[0, 200, 0, 100]});
        chrome.browserAction.setBadgeText({text:version});
        chrome.alarms.create('showBadgeText', {when: Date.now() + 3000});
        chrome.alarms.onAlarm.addListener(function() {
          chrome.browserAction.setBadgeText({text:""});
        });
      });
    });
  });
});

