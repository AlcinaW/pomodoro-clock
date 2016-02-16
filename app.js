window.onload = setInterval(function () {
    var d = new Date();
    var seconds = d.getMinutes() * 60 + d.getSeconds(); 
    var twoMin = 60 * 2; //2 minutes to test
    var timeleft = twoMin - seconds % twoMin; 
    var result = parseInt(timeleft / 60) + ':' + timeleft % 60; 
    document.getElementById('countdownNum').innerHTML = result;

}, 500);