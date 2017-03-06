


function Fcheckstate(){
var timel = document.getElementsByClassName("timerval");
for (var i = 0; i < timel.length; i++) {
    if ((i+1) == localStorage.getItem("reptime")){      // i+1 as 0 indicates empty choise
        timel[i].checked = true;
    }
};

// Display choised settings 
if (localStorage.getItem("cache") == 1)
    document.getElementById("contentval1").checked = true;
if (localStorage.getItem("cookies") == 1)
    document.getElementById("contentval2").checked = true;
if (localStorage.getItem("form") == 1)
    document.getElementById("contentval3").checked = true;
if (localStorage.getItem("history") == 1)
    document.getElementById("contentval4").checked = true;
}


// Set cleared parameters
function Fsetstate1(){
    document.getElementById('contentval1').addEventListener('click', function() {
        if (localStorage.getItem("cache") != 1)
            localStorage.setItem("cache", 1);       // remember the choise
        else
            localStorage.setItem("cache", 0);
    }, false);
    document.getElementById('contentval2').addEventListener('click', function() {
        if (localStorage.getItem("cookies") != 1)
            localStorage.setItem("cookies", 1);
        else
            localStorage.setItem("cookies", 0);
    }, false);
    document.getElementById('contentval3').addEventListener('click', function() {
        if (localStorage.getItem("form") != 1)
            localStorage.setItem("form", 1);
        else
            localStorage.setItem("form", 0);
    }, false);
    document.getElementById('contentval4').addEventListener('click', function() {
        if (localStorage.getItem("history") != 1)
            localStorage.setItem("history", 1);
        else
            localStorage.setItem("history", 0);
    }, false);

}


// Send clear comand when form is loaded
function FclearOnLoad(){
    chrome.runtime.sendMessage({
            timerval:1,
            cacheval:localStorage.getItem("cache"),
            cookiesval:localStorage.getItem("cookies"),
            formval:localStorage.getItem("form"),
            historyval:localStorage.getItem("history"),
    });
}


// Send clear comand on user action
function Fsetstate2(){
    document.getElementById('runbut').addEventListener('click', function() {
        chrome.runtime.sendMessage({
            timerval:1,
            cacheval:localStorage.getItem("cache"),
            cookiesval:localStorage.getItem("cookies"),
            formval:localStorage.getItem("form"),
            historyval:localStorage.getItem("history"),
        });
        document.getElementById("runbut").style.backgroundColor = "#CF9";
    }, false);

    document.getElementById('timerval1').addEventListener('click', function() {
        chrome.runtime.sendMessage({
            timerval:10, 
            cacheval:localStorage.getItem("cache"),
            cookiesval:localStorage.getItem("cookies"),
            formval:localStorage.getItem("form"),
            historyval:localStorage.getItem("history"),
        });
        localStorage.setItem("reptime", 1);       // remember the choise
        document.getElementById("stopcheck").style.backgroundColor = "#EEE";
    }, false);
    document.getElementById('timerval2').addEventListener('click', function() {
        chrome.runtime.sendMessage({
            timerval:30, 
            cacheval:localStorage.getItem("cache"),
            cookiesval:localStorage.getItem("cookies"),
            formval:localStorage.getItem("form"),
            historyval:localStorage.getItem("history"),
        });
        localStorage.setItem("reptime", 2);
        document.getElementById("stopcheck").style.backgroundColor = "#EEE";
    }, false);
    document.getElementById('timerval3').addEventListener('click', function() {
        chrome.runtime.sendMessage({
            timerval:60, 
            cacheval:localStorage.getItem("cache"),
            cookiesval:localStorage.getItem("cookies"),
            formval:localStorage.getItem("form"),
            historyval:localStorage.getItem("history"),
        });
        localStorage.setItem("reptime", 3);
        document.getElementById("stopcheck").style.backgroundColor = "#EEE";
    }, false);
    document.getElementById('timerval4').addEventListener('click', function() {
        chrome.runtime.sendMessage({
            timerval:180, 
            cacheval:localStorage.getItem("cache"),
            cookiesval:localStorage.getItem("cookies"),
            formval:localStorage.getItem("form"),
            historyval:localStorage.getItem("history"),
        });
        localStorage.setItem("reptime", 4);
        document.getElementById("stopcheck").style.backgroundColor = "#EEE";
    }, false);

    document.getElementById('stopcheck').addEventListener('click', function() {
        chrome.runtime.sendMessage({timerval:0});
        localStorage.setItem("reptime", 0);
        document.getElementById("stopcheck").style.backgroundColor = "#E99";
        var timel = document.getElementsByClassName("timerval");
        for (var i = 0; i < timel.length; i++) {
            timel[i].checked = false;
        };
    }, false);
}




document.addEventListener('DOMContentLoaded', function() {
    Fcheckstate();
    Fsetstate1();
    Fsetstate2();
    FclearOnLoad();
}, false);



