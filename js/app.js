var myTime; 
//sets current work time on page to 25 minutes
var workTime = document.getElementById('workTime').innerHTML = 25;
console.log(workTime);
//sets break time on page to 5 minutes
var breakTime = document.getElementById('breakTime').innerHTML = 5;
console.log(breakTime);

//calculates seconds
var remainingSeconds = workTime * 60;

//sets initial text on page
window.onload = document.getElementById("timerDisplay").innerHTML = workTime + ":" + "00";
window.onload = document.getElementById('svgText').textContent = "Pomodoro!"; 

// SVG, control the height of the overlay with how much time
var overlay = document.getElementById('overlay').height.baseVal;
window.onload = overlay.value = 270;
console.log(overlay.value);
var per;

//check status of timer for text display
var isWorkTime; 
window.onload = isWorkTime = true;
var isBreakTime = false; 

//controls START button
function startWorkCountDown(){
	//disable start button after pressed
	document.getElementById("start").disabled = true;

	//callback that tells next function to run
	timerFunc(callback);
}

// controls pause 
function pauseCountDown(){ 
	//lets you see in tab title what status of timer is
	document.title = "Paused~";
	//change text in SVG
	document.getElementById('svgText').textContent = "Paused~";

	clearInterval(myTime);

	console.log('paused');
	//re-enable Start button when pressed
	document.getElementById("start").disabled = false;
}

// controls reset 
function resetFunc() {
  clearInterval(myTime);

  remainingSeconds = workTime * 60;

  isWorkTime = true; //resets to workTime
  isBreakTime = false; 

  //SVG reset height
  overlay.value = 370;
  //calls start work function
  startWorkCountDown();
}

function displayCountDown(remainingTime) {
	// changes seconds number to look like time
	var minutes = Math.floor(remainingTime / 60); 
	var seconds = remainingTime % 60; 
	console.log(remainingTime);
	console.log(minutes + ":" + seconds);
	//percentage of time remaining to control SVG 
	//checks which is true, work or break status

	if (isWorkTime == true) {
		var per = (remainingTime / (workTime * 60));
		//change text in SVG
		document.getElementById('svgText').textContent = "Work time!"; 
		//lets you see in tab title what status of timer is
		document.title = "Work time!";
		console.log('percent with workTime');
		console.log(per);
		overlay.value = per * 270;
	} else { 
		var per = (remainingTime / (breakTime * 60));
		//change text in SVG
		document.getElementById('svgText').textContent = "Break time!"; 
		//lets you see in tab title what status of timer is
		document.title = "Break time!";
		console.log('percent with breakTime');
		console.log(per);
		overlay.value = per * 270;
	}
	//display of the countdown
	if (remainingTime % 60 >= 10) {
		document.getElementById("timerDisplay").innerHTML = minutes + ":" + seconds;
	} else {
		document.getElementById("timerDisplay").innerHTML = minutes + ":" + "0" + seconds;
	}	
}

function timerFunc(tomato) {
	var remainingTime = remainingSeconds;
	//setTimeOut callback
	myTime = setTimeout(function() {
		displayCountDown(remainingTime);
		if (remainingTime >= 0) {
			// if greater than 0, keep doing down by one
			remainingSeconds--;
			timerFunc(tomato);
		} else {
			clearInterval();
			tomato();
		}
	}, 1000); //delay
}

//callback for breakTime
var callback = function() {

  	isWorkTime = false; 
  	isBreakTime = true; //sets to breakTime

	//lets you see in tab title what status of timer is
	document.title = "Take a break~";
  	console.log('callback yoo');

  	remainingSeconds = breakTime * 60;

  	//yet another callback
  	timerFunc(callbackRest);
};

var callbackRest = function() {

	isWorkTime = true; //sets to workTime
	isBreakTime = false; 

  	clearInterval(myTime);

  	console.log('callbackRest');

  	remainingSeconds = workTime * 60;
  	//controls Start button
  	document.getElementById("start").disabled = false;
  	//go back to work
  	return ( startWorkCountDown() );
};

// controls buttons to increase and decrease inputs 
//updates numbers as you go
//this.id is sent, checks for matches, then runs if statement
//To-do: addEventListener on JS side instead?
function buttonControl(clicked_id){ 
	if (clicked_id === "workIncrease") { 
		workTime++;
	  	document.getElementById('workTime').innerHTML = workTime;
	  	remainingSeconds = workTime * 60;
	  	console.log("Work time is now " + workTime + " minutes");
	}
	if (clicked_id === "breakIncrease") { 
  		breakTime++;
  		document.getElementById('breakTime').innerHTML = breakTime;
  		console.log("Break time is now " + breakTime + " minutes");
	}
	if (clicked_id === "workDecrease") { 
		if (workTime > 1) { //min time is 1 minute
			workTime = isNaN(workTime) ? 0 : workTime;
			workTime--;
			document.getElementById('workTime').innerHTML = workTime;
			remainingSeconds = workTime * 60;
			console.log("Work time is now " + workTime + " minutes");
		}
	}
	if (clicked_id === "breakDecrease") { 
	  if (breakTime > 1) { //min time is 1 minute
		breakTime = isNaN(breakTime) ? 0 : breakTime;
		breakTime--;
		document.getElementById('breakTime').innerHTML = breakTime;
		console.log("Break time is now " + breakTime + " minutes");
	  }
	}
}