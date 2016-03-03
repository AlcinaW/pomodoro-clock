// length of work is equal to HTML atm, which is 25
var worksession_length = document.getElementById('work_session');
console.log(worksession_length.value);
// break is 5, as in HTML

var break_length = document.getElementById('break_session');
console.log(break_length.value);

// controls status of timer, if stopped or started
var startStop = document.getElementById("start-stop");
console.log(startStop.value);

var count = 1;

//getting seconds for timer based on session length
var countDown = 60 * worksession_length.value; // minutes number convert to seconds
console.log(countDown);

//button text swaps when pressed
function swapText() {
    if (startStop.value === "Started") {
    	startStop.value = "Stopped";
    }
    else {
    	startStop.value = "Started";
    }
}

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
	document.getElementById("countingDownTime").innerHTML = countDown;
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
	count = document.getElementById("work_session").value;
	countDown = 60 * count; //resets based on number in input field
}

// up and down for work and break session adjustment 
//To-do: read BOTH + and -, go up or down depending on which is clicked 
//One function to rule them all
// if value === "+" and if value === work
//THE LEAST DRY THING EVERRRRR To-do: fix this part


function increase(clicked_id){
	if (clicked_id === "workIncrease") {
	var value = parseInt(worksession_length.value, 10);
	value = isNaN(value) ? 0 : value;
	value++;
	worksession_length.value = value;
	console.log(value);
	document.getElementById("clockTime").innerHTML = value + ":00 minutes";
	} 
	if (clicked_id === "breakIncrease") {
	var value = parseInt(break_length.value, 10);
	value = isNaN(value) ? 0 : value;
	value++;
	break_length.value = value;
	console.log(value);
	document.getElementById("breakTime").innerHTML = value + ":00 minutes";
	}
}

function decrease(clicked_id) {
	if (clicked_id === "workDecrease") {
			var value = parseInt(worksession_length.value, 10);
		if (value > 1) {
		value = isNaN(value) ? 0 : value;
		value--;
		worksession_length.value =  value;
		console.log(value);
			if (value > 1 ){
				document.getElementById("clockTime").innerHTML = value + ":00 minutes";
			} else {
				document.getElementById("clockTime").innerHTML = value + ":00 minute";
			}
		}
	}
	if (clicked_id === "breakDecrease") {
		var value = parseInt(break_length.value, 10);
		if (value > 1) {
		value = isNaN(value) ? 0 : value;
		value--;
		break_length.value =  value;
		console.log(value);
			if (value > 1 ){
			document.getElementById("breakTime").innerHTML = value + ":00 minutes";
			} else {
				document.getElementById("breakTime").innerHTML = value + ":00 minute";
			}
		}
	}
}

//On button submit, disable all inputs
function disableInputs (){
	var elems = document.getElementsByName('sessionButton');
	var len = elems.length;

	for (var i = 0; i < len; i++) {
    	elems[i].disabled = true;
	}
}


// function secondsToHms(d) {
// d = Number(d);
// var h = Math.floor(d / 3600);
// var m = Math.floor(d % 3600 / 60);
// var s = Math.floor(d % 3600 % 60);
// return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s); }


// function timeFormat(t) {
//     var seconds = Math.floor( (t/1000) % 60 );
//     var minutes = Math.floor( (t/1000/60) % 60 );
//     var milliseconds = t;

//     return {
//         minutes: minutes,
//         seconds: seconds,
//         milliseconds: milliseconds
//     }
// }


// Start button event listener!


//display time in minutes/seconds

