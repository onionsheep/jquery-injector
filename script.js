chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    var version = request.version;
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//ajax.googleapis.com/ajax/libs/jquery/" + version + "/jquery.min.js";
    head.appendChild(script);
   });
