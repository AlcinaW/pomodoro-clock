// length of work is equal to HTML atm, which is 25
var worksession_length = document.getElementById('work_session');
console.log(worksession_length.value);
// break is 5, as in HTML

var break_length = document.getElementById('break_session');
console.log(break_length.value);

// controls status of timer, if stopped or started
var startStop = document.getElementById("start-stop");
console.log(startStop.value);

//count variable for adding to time when inputting how long timer will run for
var count = 1;

//getting seconds for timer based on session length
var countDown = 60 * worksession_length.value; // minutes number convert to seconds
console.log(countDown);

var countDownTwo = 60 * break_session.value;
console.log(countDownTwo);

var myTime;
// starts counting down by the second when Start button is pressed
function countDownFunc(){
	console.log("countDownFunc called");
	myTime = setInterval(changeNumFunc, 1000); 
}
// changes the time left, prevents number from going below zero 
//To-Do: reset break OR work time depending on what is active? 
function changeNumFunc(){
	countDown--;
	var minutes = Math.floor(countDown / 60); 
	var seconds = countDown % 60; 
	console.log(countDown);

	var timeDisplay = minutes + ":" + seconds;
	console.log(timeDisplay);

	document.getElementById("countingDownTime").innerHTML = timeDisplay;
	if (countDown <= 0) {
		clearInterval(myTime);
	} 
}

//function that defines break time
//loops back to work time after
function breakCountDown() {
	var countDownBreak = 60 * break_length.value;
	countDownBreak--;
	var minutes = Math.floor(countDownBreak / 60); 
	var seconds = countDownBreak % 60; 
	console.log(countDownBreak);
	console.log(minutes + ":" + seconds);

	document.getElementById("countingDownTime").innerHTML = minutes + ":" + seconds;
	if (countDownBreak <= 0) {
		//this stops THIS timer
		clearInterval(myTime);
		//call work timer function
		countDownFunc();
	} 
}

function pauseNumFunc(){ 
	clearInterval(myTime);
	console.log('paused');
}


//To-do: reset needs to also clear past value of timer?
function resetFunc(){
	pauseNumFunc(); // calls pause function
	console.log("reset"); 
	//this calls current number
	count = document.getElementById("work_session").value;
	countDown = 60 * count; //resets based on number in input field
	//re-enable inputs
	var elems = document.getElementsByName('sessionButton');
	var len = elems.length;

	for (var i = 0; i < len; i++) {
    	elems[i].disabled = false;
	}
}

// up and down for work and break session adjustment 
//To-do: read BOTH + and -, go up or down depending on which is clicked 
//One function to rule them all?
// if value === "+" and if value === work
//THE LEAST DRY THING EVERRRRR To-do: fix this part
function increase(clicked_id){
	if (clicked_id === "workIncrease") {
		var value = parseInt(worksession_length.value, 10);
		value = isNaN(value) ? 0 : value;
		value++;
		worksession_length.value = value;
		console.log("Work time is now " + value + " minutes");
		document.getElementById("clockTime").innerHTML = value + ":00 minutes";
	} 
	if (clicked_id === "breakIncrease") {
		var value = parseInt(break_length.value, 10);
		value = isNaN(value) ? 0 : value;
		value++;
		break_length.value = value;
		console.log("Break time is now " + value + " minutes");
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
			console.log("Work time is now " + value + " minutes");
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
			console.log("Break time is now " + value + " minutes");
				if (value > 1 ){
					document.getElementById("breakTime").innerHTML = value + ":00 minutes";
				} else {
					document.getElementById("breakTime").innerHTML = value + ":00 minute";
				}
		}
	}
}

//On button submit, disable all inputs
function disableInputs(){
	var elems = document.getElementsByName('sessionButton');
	var len = elems.length;

	for (var i = 0; i < len; i++) {
    	elems[i].disabled = true;
	}
}
