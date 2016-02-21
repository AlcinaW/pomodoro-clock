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

// var count = document.getElementById("workTime").value;
// var countDown = (60 * count) * 1000; 

//when page loads make the number of the work and break time 25 and 5 
window.onload = document.getElementById('workTimeNum').innerHTML = 25;
window.onload = document.getElementById('breakTimeNum').innerHTML = 5;


var count = document.getElementById("workTime").value;
var countDown = 60 * count; // convert to seconds
//var countDown = (60 * count) * 1000; // convert to milliseconds
console.log(countDown);

var myTime;
// starts counting down by the second when Start button is pressed
function countDownFunc(){
	console.log("started");
	myTime = setInterval(changeNumFunc, 1000); 
}
// changes the time left, prevents number from going below zero 
function changeNumFunc(){
	countDown--;
	console.log(countDown);
	if (countDown <= 0) {
		clearInterval(myTime);
	} 
	//if (countDown == 0) {
		// switch to break time
	//}
}

function pauseNumFunc(){ 
	clearInterval(myTime);
	console.log('paused');
}

function resetFunc(){
	pauseNumFunc(); // calls pause function
	console.log("reset"); 
	count = document.getElementById("workTime").value;
	countDown = 60 * count; //resets based on number in input field
}

//When time in the input is changed, HTML changes as well
function changeTime() {
	document.getElementById('workTimeNum').innerHTML = document.getElementById("workTime").value;
	// document.getElementById('breakTimeNum').innerHTML = document.getElementById("breakTime").value;
}
