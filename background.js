


var dt = 15;
var rq;
var vTimer = 0;
var vPeriod = 1000 * 60 * 60;


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    rq = request;
    dt = rq.timerval;
    switch (rq.periodval){
        case 1:
            vPeriod = 1000 * 60 * 60;
            break;
        case 2:
            vPeriod = 1000 * 60 * 60 * 24;
            break;
        case 3:
            vPeriod = 1000 * 60 * 60 * 24 * 7;
            break;
    }

    if (dt > 1){
        clearInterval(vTimer);
        FtimerRun();
    }else if (dt == 1)
        Frun();
    else
        clearInterval(vTimer);

 });





function FtimerRun(){

    vTimer = setInterval(function(){ 
        // alert(rq.timerval + " sec");
        
        var callback = function () {
            document.getElementById("stopcheck").style.backgroundColor = "#EE8";
        };
          
        var millisecondsTime = vPeriod;
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
            // alert("ok");
            document.getElementById("runbut").style.backgroundColor = "#CF9";
        };
          
        var millisecondsTime = vPeriod;
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