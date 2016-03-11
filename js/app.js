var myTime; 
//sets current work time on page to 25 minutes
var workTime = document.getElementById('workTime').innerHTML = 25;
console.log(workTime);
//sets break time on page to 5 minutes
var breakTime = document.getElementById('breakTime').innerHTML = 5;
console.log(breakTime);

//calculates seconds
var remainingSeconds = workTime * 60;

document.getElementById("timerDisplay").innerHTML = workTime;

// SVG
//control the height of the id="blocker" SVG with how much time
//height reduces as counds down, height is currently 400
//on windowload, set height to 400
//on startbutton press, calculate seconds, math.floor percentage
var overlay = document.getElementById('overlay').height.baseVal;
var overlayHeight;
window.onload = overlay.value = 390;
console.log(overlay.value);
// count down, make height smaller, convert to percentage of the height 0f 400?
// 400 = not started, 200 = 50%, 0 = 100%
var per;
console.log(per);

//controls START button
function startWorkCountDown(){
	//lets you see in tab title what status of timer is
	document.title = "Working!";
	//change text in SVG
	document.getElementById('svgText').textContent = "Working!";
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
  //SVG reset height
  overlay.value = 390;
  //calls start work function
  startWorkCountDown();
}

// changes seconds number to look like time
function displayCountDown(remainingTime) {
	var minutes = Math.floor(remainingTime / 60); 
	var seconds = remainingTime % 60; 
	console.log(remainingTime);
	console.log(minutes + ":" + seconds);
	//percentage of time remaining to control SVG 
	var per = (remainingTime / (workTime * 60));
	console.log(per);
	overlay.value = per * 390;

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

//callback for breaktime!
var callback = function() {
	//lets you see in tab title what status of timer is
	document.title = "Take a break~";
  	console.log('callback yoo');
  	//change text in SVG
	document.getElementById('svgText').textContent = "Break time!"; 

  	remainingSeconds = breakTime * 60;

	//percentage of time remaining to control SVG 
	// var per = (remainingTime / (breakTime * 60));
	// console.log(per);
	// overlay.value = per * 400;

  	//yet another callback
  	timerFunc(callbackRest);
};

var callbackRest = function() {
  	clearInterval(myTime);
  	console.log('callbackRest');
  	document.getElementById('timerText').innerHTML = "Work time~";
  	remainingSeconds = workTime * 60;
  	//controls Start button
  	document.getElementById("start").disabled = false;
  	//go back to work time? THIS IS NEW
  	return ( startWorkCountDown() );
};

// controls buttons to increase and decrease inputs 
//updates numbers as you go
//controls all buttons. When this.is is send, checks for matches, then if statement
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
