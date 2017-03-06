


var dt = 15;
var rq;
var vTimer = 0;


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    rq = request;
    dt = rq.timerval;
    if (dt > 1){
        clearInterval(vTimer);
        FtimerRun();
    }else if (dt == 1)
        Frun();
    else
        clearInterval(vTimer);

 });





function FtimerRun(){
    // alert("ok");
    vTimer = setInterval(function(){ 

        alert(rq.timerval + " sec");
        
        var callback = function () {
            // console.log (dt);
        };
          
        var millisecondsTime = 1000 * 60 * 60 * 24 * 1;
        var TimeAgo = (new Date()).getTime() - millisecondsTime;

        chrome.browsingData.remove({
            "since": TimeAgo,
            "originTypes": {
              "protectedWeb": false
            }
          }, {
            "appcache": false,
            "cache": Boolean(rq.cacheval),
            "cookies": Boolean(rq.cookiesval),
            "downloads": false,
            "fileSystems": false,
            "formData": Boolean(rq.formval),
            "history": Boolean(rq.historyval),
            "indexedDB": false,
            "localStorage": false,
            "serverBoundCertificates": false,
            "pluginData": false,
            "passwords": false,
            "webSQL": false
          }, callback);

    }, rq.timerval*1000);

}




function Frun(){
       
        var callback = function () {
            alert("ok");
        };
          
        var millisecondsTime = 1000 * 60 * 60 * 24 * 1;
        var TimeAgo = (new Date()).getTime() - millisecondsTime;

        chrome.browsingData.remove({
            "since": TimeAgo,
            "originTypes": {
              "protectedWeb": false
            }
          }, {
            "appcache": false,
            "cache": Boolean(rq.cacheval),
            "cookies": Boolean(rq.cookiesval),
            "downloads": false,
            "fileSystems": false,
            "formData": Boolean(rq.formval),
            "history": Boolean(rq.historyval),
            "indexedDB": false,
            "localStorage": false,
            "serverBoundCertificates": false,
            "pluginData": false,
            "passwords": false,
            "webSQL": false
          }, callback);

}