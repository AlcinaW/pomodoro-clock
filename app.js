// window.onload = setInterval(function () {
//     var d = new Date();
//     var seconds = d.getMinutes() * 60 + d.getSeconds(); 
//     var twoMin = 60 * 2; //2 minutes to test
//     var timeleft = twoMin - seconds % twoMin; 
//     var result = parseInt(timeleft / 60) + ':' + timeleft % 60; 
//     document.getElementById('countdownNum').innerHTML = result;
// }, 500);

// console.log(result);

// function stopFunction {
// 	clearInterval();
// }

var count = document.getElementById("workTime").value;
var countDown = (60 * count) * 1000; //milliseconds 

window.onload = document.getElementById('countDownNum').innerHTML = 25;

var count = document.getElementById("workTime").value;
var countDown = (60 * count) * 1000; //milliseconds 
console.log(countDown);

var myTime;

function countDownFunc(){
	console.log("started");
	myTime = setInterval(changeNumFunc, 1000); 
}

function changeNumFunc(){
	countDown--;
	console.log(countDown);
	if (countDown <= 0) {
		clearInterval(myTime);
	}
}

function stopNumFunc(){ 
	clearInterval(myTime);
	console.log('paused');
}

function resetFunc(){
	stopNumFunc(); // calls stop function
	console.log("reset"); 
	count = document.getElementById("workTime").value;
	countDown = (60 * count) * 1000; //resets based on number in input field
}

//When time in the input is changed, HTML changes as well
function changeTime() {
	document.getElementById('countDownNum').innerHTML = document.getElementById("workTime").value;
}


